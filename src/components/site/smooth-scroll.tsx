'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

const HEADER_OFFSET = -24;

/**
 * Weighted wheel scrolling for mouse and trackpad (off for touch and reduced
 * motion), and smooth travel for in-page links.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    const lenis =
      !reduced.matches && finePointer.matches
        ? new Lenis({ lerp: 0.12, smoothWheel: true, autoRaf: true })
        : null;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!link) return;
      const hash = link.getAttribute('href');
      if (!hash) return;
      const target =
        hash === '#'
          ? document.body
          : document.querySelector<HTMLElement>(hash);
      if (!target) return;
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(hash === '#' ? 0 : target, {
          offset: HEADER_OFFSET,
          duration: 1.3,
        });
      } else {
        const top =
          hash === '#'
            ? 0
            : target.getBoundingClientRect().top +
              window.scrollY +
              HEADER_OFFSET;
        window.scrollTo({ top, behavior: reduced.matches ? 'auto' : 'smooth' });
      }
      if (hash !== '#') {
        history.replaceState(null, '', hash);
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
