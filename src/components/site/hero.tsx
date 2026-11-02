'use client';

import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { personalInfo, projects, studioSite } from '@/data/config';
import { Browser, MobileScreen } from './devices';
import { useMedia } from './use-media';

interface Floater {
  key: string;
  node: React.ReactNode;
  /** Position and size on desktop, then on phones */
  className: string;
  rotate: number;
  depth: number; // how much it follows the mouse and the scroll
  flyX: number; // where it flies on scroll, in vw
}

const zeal = projects.find(p => p.title === 'ZealPower')!;
const kesh = projects.find(p => p.title === 'KESH')!;
const scout = projects.find(p => p.title === 'ScoutMyRivals')!;

const floaters: Floater[] = [
  {
    key: 'oina-desktop',
    node: (
      <Browser
        project={studioSite}
        priority
        sizes="(max-width: 767px) 56vw, 29vw"
      />
    ),
    className:
      'left-[-12%] top-[40%] w-[56vw] md:left-[-3%] md:top-[36%] md:w-[29vw]',
    rotate: -7,
    depth: 0.6,
    flyX: -30,
  },
  {
    key: 'zeal-desktop',
    node: (
      <Browser project={zeal} priority sizes="(max-width: 767px) 56vw, 27vw" />
    ),
    className:
      'right-[-18%] top-[13%] w-[62vw] md:right-[-2%] md:top-[9%] md:w-[27vw]',
    rotate: 5,
    depth: 0.75,
    flyX: 28,
  },
  {
    key: 'kesh-mobile',
    node: <MobileScreen src={kesh.phone!} alt="KESH on mobile" priority />,
    className:
      'right-[6%] top-[44%] w-[24vw] md:right-[15%] md:top-[47%] md:w-[11.5vw]',
    rotate: 9,
    depth: 1.05,
    flyX: 24,
  },
  {
    key: 'scout-mobile',
    node: (
      <MobileScreen src={scout.phone!} alt="ScoutMyRivals on mobile" priority />
    ),
    className:
      'left-[5%] top-[10%] w-[22vw] md:left-[19%] md:top-[6%] md:w-[9.5vw]',
    rotate: -11,
    depth: 1.15,
    flyX: -20,
  },
];

function FloatingDevice({
  item,
  index,
  mx,
  my,
  progress,
  still,
}: {
  item: Floater;
  index: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  progress: MotionValue<number>;
  still: boolean;
}) {
  const px = useTransform(mx, v => v * 28 * item.depth);
  const py = useTransform(my, v => v * 20 * item.depth);
  const sx = useTransform(progress, [0, 1], ['0vw', `${item.flyX}vw`]);
  const sy = useTransform(progress, [0, 1], [0, -380 * item.depth]);
  const sr = useTransform(progress, [0, 1], [item.rotate, item.rotate * 2.2]);
  return (
    // Three layers: arrival, scroll travel, mouse depth.
    <motion.div
      className={`absolute ${item.className}`}
      style={{ zIndex: Math.round(item.depth * 10) }}
      aria-hidden
      initial={{ opacity: 0, y: 140, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        duration: 1.2,
        bounce: 0.2,
        delay: 0.25 + index * 0.1,
      }}
    >
      <motion.div
        style={still ? { rotate: item.rotate } : { x: sx, y: sy, rotate: sr }}
      >
        <motion.div style={still ? undefined : { x: px, y: py }}>
          {item.node}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const nameOpacity = useTransform(scrollYProgress, [0.4, 0.9], [1, 0]);

  // Decorative mouse depth: springs, so it has weight rather than snapping.
  const finePointer = useMedia('(pointer: fine)');
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });
  useEffect(() => {
    if (reduced || !finePointer) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced, finePointer, rawX, rawY]);

  return (
    <section
      ref={ref}
      className="relative h-[150svh] md:h-[190vh]"
      aria-labelledby="hero-title"
    >
      <div className="me-mesh me-grain sticky top-0 h-svh overflow-hidden">
        <motion.h1
          id="hero-title"
          style={
            reduced ? undefined : { scale: nameScale, opacity: nameOpacity }
          }
          className="me-display absolute inset-0 flex flex-col items-center justify-center text-center text-[18vw] uppercase text-white md:text-[16.5vw]"
        >
          {['Ramazan', 'Samat'].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.04em]">
              {/* CSS, not script: the name rises on first paint */}
              <span
                className="me-rise block"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
        </motion.h1>

        {floaters.map((item, i) => (
          <FloatingDevice
            key={item.key}
            item={item}
            index={i}
            mx={mx}
            my={my}
            progress={scrollYProgress}
            still={reduced}
          />
        ))}

        {/* Painted at once: this text is the largest thing on a phone's first
            screen, so it must not wait for script to fade in. */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-5 px-5 pb-6 md:flex-row md:items-end md:justify-between md:px-8 md:pb-8">
          <p className="max-w-[40ch] text-[16px] leading-relaxed text-[#2b2833] md:text-[17px]">
            <strong className="font-semibold">
              Engineer turned video game founder.
            </strong>{' '}
            I run Oina Studio and still build every layer of my products myself.
          </p>
          <div className="flex gap-3">
            <a href="#work" className="me-pill me-pill--ink">
              See the work ↓
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="me-pill me-pill--glass"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
