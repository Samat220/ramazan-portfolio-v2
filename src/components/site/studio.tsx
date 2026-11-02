'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { personalInfo, studioSite } from '@/data/config';
import { Browser } from './devices';
import { RackToController } from './drawing';
import { useMedia } from './use-media';

const facts = [
  'Single-player narrative adventure',
  'Unreal Engine 5',
  'PC and console',
  'In pre-production',
];

/** Clamped linear mapping, computed in JS every frame. */
const lerp = (v: number, a: number, b: number, from: number, to: number) => {
  const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return from + (to - from) * t;
};

function StudioContent() {
  return (
    <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 md:grid-cols-12 md:gap-12 md:px-10">
      <div className="md:col-span-6">
        <span
          className="me-tag"
          style={{
            background: 'rgba(255,255,255,0.1)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
          }}
        >
          Founder & Creative Director · 2026 –
        </span>
        <h2
          id="studio-title"
          className="me-display mt-6 text-[clamp(2.75rem,5.5vw,5rem)] uppercase"
        >
          Oina Studio
        </h2>
        <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-[#cfcad6] md:text-[18px]">
          An independent Canadian video game studio making single-player,
          story-driven games for PC and console. I founded it in 2026 and lead
          creative direction on its first game.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="The first game">
          {facts.map(f => (
            <li
              key={f}
              className="me-tag"
              style={{
                background: 'rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                color: '#e9e5ee',
              }}
            >
              {f}
            </li>
          ))}
        </ul>
        <p className="me-mono mt-6 text-[13px] text-[#a9a4b2]">
          Jury member · GDC Awards 2027, Narrative Game of the Year
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={studioSite.liveUrl ?? 'https://oinastudio.com/'}
            target="_blank"
            rel="noopener noreferrer"
            className="me-pill"
          >
            oinastudio.com ↗
          </a>
          <span
            className="me-pill me-pill--glass"
            style={{ color: '#f4f1ea', background: 'rgba(255,255,255,0.08)' }}
          >
            Hiring: Lead Developer, Lead Artist
          </span>
        </div>
      </div>

      {/* The studio's site with the founder in front of it */}
      <div className="relative md:col-span-6">
        <div className="w-[92%] rotate-[-3deg]">
          <Browser project={studioSite} sizes="(max-width: 767px) 84vw, 45vw" />
        </div>
        <figure
          className="absolute -bottom-10 right-0 w-[34%] rotate-[4deg] overflow-hidden rounded-[20px] bg-[#f4f1ea] p-2"
          style={{
            boxShadow: 'inset 0 1px 0 #fff, 0 30px 60px -16px rgba(0,0,0,0.6)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={personalInfo.photo}
            alt="Ramazan Samat"
            width={800}
            height={1000}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[14px] object-cover"
          />
          <figcaption className="me-mono px-1 pb-1 pt-2 text-[11px] text-[#55515c]">
            Ramazan Samat, founder
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export function Studio() {
  const reduced = useReducedMotion() ?? false;
  const desktop = useMedia('(min-width: 768px)');
  const animated = desktop && !reduced;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  // The camera pushes into the controller, then the studio appears.
  const zoom = useTransform(scrollYProgress, v => lerp(v, 0.15, 0.55, 1, 6));
  const drawFade = useTransform(scrollYProgress, v =>
    lerp(v, 0.42, 0.55, 1, 0)
  );
  const introFade = useTransform(scrollYProgress, v =>
    lerp(v, 0.05, 0.18, 1, 0)
  );
  const reveal = useTransform(scrollYProgress, v => lerp(v, 0.58, 0.72, 0, 1));
  const revealY = useTransform(scrollYProgress, v =>
    lerp(v, 0.58, 0.72, 40, 0)
  );
  // Links can't be clicked while the studio is still hidden.
  const revealPointer = useTransform(reveal, v => (v > 0.5 ? 'auto' : 'none'));

  if (!animated) {
    // Phones and reduced motion: the drawing, then the studio, in order.
    return (
      <section
        id="studio"
        ref={ref}
        aria-labelledby="studio-title"
        className="me-stage me-grain relative mx-3 my-4 py-16 md:mx-8 md:my-6"
        style={{ background: '#141317', color: '#f4f1ea' }}
      >
        <p className="me-mono text-center text-[13px] text-[#a9a4b2]">
          Five years in systems. Now, games.
        </p>
        <div className="mx-auto mt-6 w-[min(820px,88vw)]">
          <RackToController />
        </div>
        <div className="mt-14 pb-10">
          <StudioContent />
        </div>
      </section>
    );
  }

  return (
    <section
      id="studio"
      ref={ref}
      aria-labelledby="studio-title"
      className="me-stage me-grain relative mx-8 my-6"
      style={{ background: '#141317', color: '#f4f1ea', height: '260vh' }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-[40px]">
        <motion.p
          className="me-mono absolute inset-x-0 top-[14vh] text-center text-[13px] text-[#a9a4b2]"
          style={{ opacity: introFade }}
        >
          Five years in systems. Now, games.
        </motion.p>

        <motion.div
          className="w-[min(820px,86vw)]"
          style={{ scale: zoom, opacity: drawFade, transformOrigin: '76% 58%' }}
        >
          <RackToController />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center pb-10 pt-28"
          style={{ opacity: reveal, y: revealY, pointerEvents: revealPointer }}
        >
          <StudioContent />
        </motion.div>
      </div>
    </section>
  );
}
