'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project, ProjectLink } from '@/types';
import { LineIcon } from './drawing';
import { WarmthDial } from '@/components/work/warmth-dial';
import { desktopSrcSet } from './devices';

const ease = [0.23, 1, 0.32, 1] as const;
const PANEL_WIDTH = 880;

export function projectLinks(p: Project): ProjectLink[] {
  return [
    ...(p.liveUrl ? [{ label: 'Live', href: p.liveUrl }] : []),
    ...(p.githubUrl ? [{ label: 'Source on GitHub', href: p.githubUrl }] : []),
    ...(p.extraLinks ?? []),
  ];
}

/** The picture area of a project, shared by the card and the detail view. */
export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (large && project.live === 'warmth-dial') return <WarmthDial />;
  if (project.shot) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.shot}
        srcSet={desktopSrcSet(project.shot)}
        sizes={large ? '(max-width: 767px) 94vw, 880px' : '300px'}
        alt={large ? `${project.title}, screenshot` : ''}
        draggable={false}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
      {project.icon && <LineIcon kind={project.icon} />}
      <span className="me-mono text-[13px] text-[#c9c4d2]">
        {project.figure}
      </span>
    </div>
  );
}

/**
 * A card opens into this panel. It grows out of the card's own position on
 * screen (transform only), and returns focus to the card when it closes.
 */
export function ProjectDetail({
  project,
  origin,
  onClose,
}: {
  project: Project | null;
  origin: DOMRect | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [project, onClose]);

  // Where the card sits relative to the centre, and how much smaller it is.
  const from = (() => {
    if (!origin || typeof window === 'undefined')
      return { x: 0, y: 40, scale: 0.9 };
    const width = Math.min(PANEL_WIDTH, window.innerWidth * 0.92);
    return {
      x: origin.left + origin.width / 2 - window.innerWidth / 2,
      y: origin.top + origin.height / 2 - window.innerHeight / 2,
      scale: origin.width / width,
    };
  })();

  const links = project ? projectLinks(project) : [];

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4">
          <motion.div
            className="absolute inset-0 bg-[#141317]/55 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.3, ease }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            className="me-grain relative max-h-[92svh] w-[min(880px,94vw)] overflow-y-auto rounded-[28px] md:rounded-[32px]"
            style={{
              background: '#f4f1ea',
              boxShadow:
                'inset 0 1px 0 #fff, 0 40px 100px -30px rgba(20,15,40,0.6)',
            }}
            initial={{ ...from, opacity: 0.4 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            exit={{ ...from, opacity: 0, transition: { duration: 0.22, ease } }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.12 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#1b1a20] md:aspect-[16/9]">
              <ProjectVisual project={project} large />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="me-pill me-pill--glass absolute right-3 top-3 md:right-4 md:top-4"
                aria-label={`Close ${project.title}`}
              >
                Close ✕
              </button>
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-12 md:p-10">
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="me-tag">{project.year}</span>
                  <span className="me-mono text-[12px] text-[#6b6772]">
                    {project.kind}
                  </span>
                </div>
                <h3
                  id="project-detail-title"
                  className="me-display mt-4 text-[clamp(2.25rem,4.5vw,3.5rem)]"
                >
                  {project.title}
                </h3>
                <p className="mt-5 text-[16px] leading-relaxed text-[#35323b] md:text-[17px]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col gap-6 md:col-span-5">
                <div>
                  <p className="me-mono text-[12px] text-[#6b6772]">
                    Built with
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map(t => (
                      <span key={t} className="me-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {links.length > 0 ? (
                  <div className="flex flex-col items-start gap-3">
                    {links.map(l => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-pill me-pill--ink"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="me-mono text-[12px] leading-relaxed text-[#6b6772]">
                    {project.live === 'warmth-dial'
                      ? "Private project. Try the warmth dial above: it is the app's real colour range."
                      : 'Private repository.'}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
