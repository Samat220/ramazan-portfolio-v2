'use client';

import { useEffect, useRef } from 'react';
import { throttle } from '@/lib/utils';

export function BackgroundHighlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        spotlightRef.current.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(var(--accent-rgb, 14, 165, 233), 0.08) 0%, transparent 80%)`;
      }
    }, 16); // ~60fps

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="background-spotlight fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{
        background:
          'radial-gradient(600px at 50% 50%, rgba(var(--accent-rgb, 14, 165, 233), 0.05) 0%, transparent 80%)',
      }}
    />
  );
}
