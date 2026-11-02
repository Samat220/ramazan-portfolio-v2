'use client';

import { motion } from 'framer-motion';
import { navLinks, personalInfo } from '@/data/config';
import { useContactForm } from '@/components/common/contact-form';

const ease = [0.23, 1, 0.32, 1] as const;

export function Contact() {
  const { openContactForm } = useContactForm();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="me-stage me-grain mx-3 md:mx-8"
      style={{ background: '#141317', color: '#f4f1ea' }}
    >
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 py-24 text-center md:px-8 md:py-32">
        <motion.h2
          id="contact-title"
          className="me-display text-[clamp(3.25rem,12vw,11rem)] uppercase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          Let&apos;s talk
        </motion.h2>
        <p className="mt-6 max-w-[44ch] text-[17px] text-[#bdb8c4] md:text-[18px]">
          Making a game, building a product, or hiring? I read every message.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${personalInfo.email}`} className="me-pill">
            {personalInfo.email}
          </a>
          <button
            type="button"
            onClick={() => openContactForm()}
            className="me-pill me-pill--glass"
            style={{ color: '#f4f1ea', background: 'rgba(255,255,255,0.08)' }}
          >
            Send a message
          </button>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {[
            { label: 'LinkedIn', href: personalInfo.linkedin },
            { label: 'GitHub', href: personalInfo.github },
            { label: 'Resume', href: personalInfo.resume },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="me-pill me-pill--glass"
              style={{ color: '#f4f1ea', background: 'rgba(255,255,255,0.08)' }}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
        <p className="me-mono mt-10 text-[12px] text-[#8f8a98]">
          Based in Canada
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1320px] flex-col gap-4 px-6 pb-8 pt-10 text-[14px] text-[#55515c] md:flex-row md:items-center md:justify-between md:px-12">
      <p>Ramazan Samat · engineer and game studio founder</p>
      <nav
        aria-label="Footer"
        className="flex flex-wrap gap-x-6 gap-y-2 text-[#141317]"
      >
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="hover:underline">
            {l.label}
          </a>
        ))}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </nav>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
