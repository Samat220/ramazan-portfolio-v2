'use client';

import { useCallback, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  type AnimationPlaybackControls,
} from 'framer-motion';
import { sideProjects } from '@/data/config';
import { ProjectDetail, ProjectVisual } from './project-detail';

const DEG_PER_PX = 0.28;

/**
 * Side projects on a ring. Grab to spin; a flick keeps its momentum and
 * settles on the nearest card. A click (no drag) opens the card.
 */
export function Carousel() {
  const n = sideProjects.length;
  const step = 360 / n;
  const reduced = useReducedMotion() ?? false;

  const turn = useMotionValue(0);

  // Only the cards turned towards the viewer can be clicked or focused;
  // the ones at the back of the ring are out of reach.
  const facingOf = (deg: number) =>
    sideProjects.map((_, i) => {
      const a = ((((i * step + deg) % 360) + 540) % 360) - 180;
      return Math.abs(a) < 75;
    });
  const [facing, setFacing] = useState(() => facingOf(0));
  useMotionValueEvent(turn, 'change', deg => {
    const next = facingOf(deg);
    setFacing(prev => (prev.every((f, i) => f === next[i]) ? prev : next));
  });
  const grab = useRef<{
    id: number;
    x: number;
    t: number;
    v: number;
    travel: number;
  } | null>(null);
  const moved = useRef(false);
  const entered = useRef(false);
  const settle = useRef<AnimationPlaybackControls | null>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [origin, setOrigin] = useState<DOMRect | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  const openCard = (i: number, el: HTMLButtonElement) => {
    opener.current = el;
    setOrigin(el.getBoundingClientRect());
    setOpenIndex(i);
  };
  const closeCard = useCallback(() => {
    setOpenIndex(null);
    opener.current?.focus({ preventScroll: true });
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (grab.current) return; // ignore a second finger mid-drag
    settle.current?.stop();
    grab.current = {
      id: e.pointerId,
      x: e.clientX,
      t: performance.now(),
      v: 0,
      travel: 0,
    };
    moved.current = false;
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = grab.current;
    if (!g || e.pointerId !== g.id) return;
    const now = performance.now();
    const dx = e.clientX - g.x;
    g.travel += Math.abs(dx);
    // Only a real drag takes the pointer, so a plain click still reaches
    // the card underneath.
    if (!moved.current && g.travel > 6) {
      moved.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (moved.current) turn.set(turn.get() + dx * DEG_PER_PX);
    g.v = (dx * DEG_PER_PX) / Math.max(1, now - g.t); // degrees per ms
    g.x = e.clientX;
    g.t = now;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = grab.current;
    if (!g || e.pointerId !== g.id) return;
    grab.current = null;
    if (!moved.current) return; // a click, not a drag
    const thrown = reduced ? 0 : g.v * 320;
    const landing = Math.round((turn.get() + thrown) / step) * step;
    if (reduced) {
      turn.set(landing);
      return;
    }
    settle.current = animate(turn, landing, {
      type: 'spring',
      velocity: g.v * 1000,
      stiffness: 70,
      damping: 16,
    });
  };

  // Arrow keys turn the ring one card at a time.
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    settle.current?.stop();
    const target =
      Math.round(turn.get() / step) * step +
      (e.key === 'ArrowLeft' ? step : -step);
    settle.current = reduced
      ? (turn.set(target), null)
      : animate(turn, target, { type: 'spring', stiffness: 120, damping: 18 });
  };

  return (
    <section
      id="also"
      aria-labelledby="also-title"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="flex flex-col items-center px-5">
        <h2
          id="also-title"
          className="me-display text-center text-[clamp(3rem,8vw,7rem)] uppercase"
        >
          Also built
        </h2>
        <p className="me-mono mt-4 text-center text-[13px] text-[#55515c]">
          Side projects, tools and experiments · drag to spin, tap to open
        </p>
      </div>

      <div
        className="me-spin relative mx-auto mt-12 h-[320px] w-full select-none md:mt-14 md:h-[330px]"
        style={
          {
            perspective: 1800,
            touchAction: 'pan-y',
            '--card-w': 'clamp(230px, 21vw, 300px)',
            '--ring-r': 'calc(var(--card-w) * 1.45)',
          } as React.CSSProperties
        }
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        onClickCapture={e => {
          // A drag is not a click: don't open the card under the cursor.
          // Swallow only the one click that ends a drag, so a later Enter
          // on a focused card still opens it.
          if (moved.current) {
            moved.current = false;
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <motion.div
          className="absolute left-1/2 top-0 h-full w-0"
          style={{ rotateY: turn, transformStyle: 'preserve-3d' }}
          onViewportEnter={() => {
            // A short spin on arrival shows that the ring turns.
            if (reduced || entered.current) return;
            entered.current = true;
            turn.set(step * 1.5);
            settle.current = animate(turn, 0, {
              type: 'spring',
              stiffness: 40,
              damping: 14,
            });
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {sideProjects.map((p, i) => (
            <div
              key={p.title}
              className="absolute top-0"
              style={{
                width: 'var(--card-w)',
                transform: `translateX(-50%) rotateY(${i * step}deg) translateZ(var(--ring-r))`,
                backfaceVisibility: 'hidden',
              }}
            >
              <button
                type="button"
                draggable={false}
                tabIndex={facing[i] ? 0 : -1}
                aria-hidden={!facing[i]}
                style={{ pointerEvents: facing[i] ? 'auto' : 'none' }}
                onClick={e => openCard(i, e.currentTarget)}
                aria-haspopup="dialog"
                className="me-plate block w-full text-left"
              >
                <span className="relative block aspect-[16/10] bg-[#1b1a20]">
                  <ProjectVisual project={p} />
                </span>
                <span className="flex items-end justify-between gap-3 p-4">
                  <span>
                    <span className="block font-semibold">{p.title}</span>
                    <span className="me-mono mt-1 block text-[12px] text-[#6b6772]">
                      {p.kind}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="me-plate-open grid h-8 w-8 shrink-0 place-items-center rounded-full text-[18px]"
                  >
                    +
                  </span>
                </span>
              </button>
            </div>
          ))}
        </motion.div>
      </div>

      <ProjectDetail
        project={openIndex === null ? null : sideProjects[openIndex]}
        origin={origin}
        onClose={closeCard}
      />
    </section>
  );
}
