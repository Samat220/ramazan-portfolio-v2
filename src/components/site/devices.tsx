import type { Project } from '@/types';

// Full widths of the source captures that aren't the usual 2880 / 1170.
const FULL_WIDTH: Record<string, number> = {
  '/projects/marathon_preview.webp': 1800,
  '/shots/jobtracker.webp': 2095,
  '/shots/mediapicker.webp': 2095,
};

/** Every screenshot ships in three sizes: `name.webp` plus `name-<w>.webp`. */
function srcSetFor(src: string, sizes: number[], fullWidth: number) {
  const base = src.replace(/\.webp$/, '');
  return [
    ...sizes.map(w => `${base}-${w}.webp ${w}w`),
    `${src} ${FULL_WIDTH[src] ?? fullWidth}w`,
  ].join(', ');
}

export const desktopSrcSet = (src: string) => srcSetFor(src, [960, 1440], 2880);
const mobileSrcSet = (src: string) => srcSetFor(src, [390, 585], 1170);

/** A browser window showing a whole desktop screenshot, never a crop. */
export function Browser({
  project,
  priority = false,
  sizes = '(max-width: 767px) 92vw, 50vw',
}: {
  project: Project;
  /** Above the fold: load at once instead of lazily */
  priority?: boolean;
  /** How wide the window renders, for picking the right file */
  sizes?: string;
}) {
  return (
    <div className="me-browser">
      <div className="me-browser__bar" aria-hidden>
        <span style={{ background: '#ff5f57' }} />
        <span style={{ background: '#febc2e' }} />
        <span style={{ background: '#28c840' }} />
      </div>
      <div className="me-browser__screen">
        {project.shot && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.shot}
            srcSet={desktopSrcSet(project.shot)}
            sizes={sizes}
            alt={`${project.title} on desktop`}
            width={2880}
            height={1800}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            draggable={false}
          />
        )}
      </div>
    </div>
  );
}

/** The mobile view as a clean screen panel: no fake device around it. */
export function MobileScreen({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 767px) 26vw, 12vw',
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="me-panel">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        srcSet={mobileSrcSet(src)}
        sizes={sizes}
        alt={alt}
        width={1170}
        height={2532}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        draggable={false}
      />
    </div>
  );
}
