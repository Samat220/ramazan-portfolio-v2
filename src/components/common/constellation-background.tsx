'use client';

import { useRef, useEffect } from 'react';
import { useThemeStore } from '@/lib/store';

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;

      constructor(x: number, y: number, vx: number, vy: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 1.5 + 1;
        this.color = color;
        this.vx = vx;
        this.vy = vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numberOfParticles = Math.floor(
        (canvas.width * canvas.height) / 9000
      );

      // 👇 3. Read the correct color based on the current theme
      const particleColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--text-secondary')
        .trim();

      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const vx = Math.random() * 0.4 - 0.2;
        const vy = Math.random() * 0.4 - 0.2;
        particles.push(new Particle(x, y, vx, vy, particleColor));
      }
    };

    const CONNECTION_DIST = 120;

    const connect = () => {
      if (!ctx || !canvas) return;
      const lineColor = theme === 'dark' ? '148, 163, 184' : '100, 116, 139';

      const cols = Math.ceil(canvas.width / CONNECTION_DIST);
      const rows = Math.ceil(canvas.height / CONNECTION_DIST);
      const grid: Particle[][][] = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => [])
      );

      for (const p of particles) {
        const col = Math.min(
          Math.max(Math.floor(p.x / CONNECTION_DIST), 0),
          cols - 1
        );
        const row = Math.min(
          Math.max(Math.floor(p.y / CONNECTION_DIST), 0),
          rows - 1
        );
        grid[row][col].push(p);
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c];
          for (let dr = 0; dr <= 1; dr++) {
            for (let dc = dr === 0 ? 0 : -1; dc <= 1; dc++) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
              const neighbor = grid[nr][nc];
              for (const a of cell) {
                for (const b of neighbor) {
                  if (a === b) continue;
                  const dx = a.x - b.x;
                  const dy = a.y - b.y;
                  const dist = Math.sqrt(dx * dx + dy * dy);
                  if (dist < CONNECTION_DIST) {
                    ctx.strokeStyle = `rgba(${lineColor}, ${1 - dist / CONNECTION_DIST})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      init();
      animate();
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]); // 👈 4. Re-run effect when theme changes!

  return (
    <canvas
      ref={canvasRef}
      // 👇 5. Corrected z-index and opacity
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40"
    />
  );
}
