'use client';

import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { projects } from '@/data/config';
import type { Project } from '@/types';
import { Browser, MobileScreen } from './devices';

const ease = [0.23, 1, 0.32, 1] as const;

function Stage({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion() ?? false;
  const rx = useSpring(0, { stiffness: 120, damping: 16 });
  const ry = useSpring(0, { stiffness: 120, damping: 16 });
  const flip = index % 2 === 1;

  // Decorative tilt toward the mouse.
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  };

  return (
    <article
      className="me-stage me-grain mx-3 md:mx-8"
      style={{ background: project.field }}
      aria-labelledby={`stage-${index}`}
    >
      <div
        className={`mx-auto grid max-w-[1320px] items-center gap-10 px-6 py-14 md:grid-cols-12 md:gap-12 md:px-8 md:py-28 ${flip ? 'md:[&>*:first-child]:order-2' : ''}`}
      >
        <div
          className="md:col-span-7"
          style={{ perspective: 1400 }}
          onPointerMove={onMove}
          onPointerLeave={() => {
            rx.set(0);
            ry.set(0);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 14 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease }}
          >
            <motion.div
              className="relative"
              style={{
                rotateX: rx,
                rotateY: ry,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className={project.phone ? 'w-[84%]' : 'w-full'}>
                <Browser
                  project={project}
                  sizes="(max-width: 767px) 84vw, 48vw"
                />
              </div>
              {project.phone && (
                <motion.div
                  className="absolute bottom-[-8%] right-0 w-[26%]"
                  style={{ z: 60 }}
                  initial={{ opacity: 0, y: 50, rotate: 6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    type: 'spring',
                    duration: 1,
                    bounce: 0.25,
                    delay: 0.25,
                  }}
                >
                  <MobileScreen
                    sizes="(max-width: 767px) 24vw, 13vw"
                    src={project.phone}
                    alt={`${project.title} on mobile`}
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <span className="me-tag">
            {project.kind} · {project.year}
          </span>
          <h3
            id={`stage-${index}`}
            className="me-display mt-5 text-[clamp(2.5rem,5vw,4.5rem)]"
          >
            {project.title}
          </h3>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-[#35323b] md:text-[17px]">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map(t => (
              <span key={t} className="me-tag">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="me-pill me-pill--ink"
              >
                Visit {project.title} ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="me-pill"
              >
                Source ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export function Work() {
  const featured = projects.filter(p => p.featured);
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative z-10 -mt-[10vh] flex flex-col gap-4 pb-6 md:gap-6"
    >
      <div className="mx-auto mb-6 flex w-full max-w-[1320px] flex-wrap items-end justify-between gap-6 px-6 pt-20 md:mb-10 md:px-12 md:pt-24">
        <h2
          id="work-title"
          className="me-display text-[clamp(3rem,8vw,7rem)] uppercase"
        >
          The work
        </h2>
        <p className="me-mono max-w-[38ch] text-[13px] leading-[1.7] text-[#55515c]">
          Every one designed, built and shipped end to end: database, server,
          interface and deploy.
        </p>
      </div>
      {featured.map((p, i) => (
        <Stage key={p.title} project={p} index={i} />
      ))}
    </section>
  );
}
