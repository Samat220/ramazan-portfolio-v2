'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, personalInfo } from '@/data/config';

const ease = [0.23, 1, 0.32, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 pt-4 md:px-6 md:pt-5">
      <a
        href="#"
        className="me-pill me-pill--glass"
        aria-label="Ramazan Samat, back to top"
      >
        Ramazan Samat
      </a>

      <nav aria-label="Main" className="hidden gap-2 md:flex">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="me-pill me-pill--glass"
          >
            {link.label}
          </a>
        ))}
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="me-pill me-pill--ink"
        >
          Resume ↗
        </a>
      </nav>

      <button
        type="button"
        className="me-pill me-pill--glass md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(v => !v)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="me-grain fixed inset-x-3 top-20 rounded-[28px] p-3 md:hidden"
            style={{
              background: '#f4f1ea',
              boxShadow:
                'inset 0 1px 0 #fff, 0 30px 60px -20px rgba(20,15,40,0.45)',
            }}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
              transition: { duration: 0.15 },
            }}
            transition={{ duration: 0.22, ease }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="me-display flex min-h-[60px] items-center rounded-[18px] px-4 text-[34px] active:bg-black/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="me-pill me-pill--ink mt-2 w-full justify-center"
            >
              Resume ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
