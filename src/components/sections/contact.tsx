'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/common/scroll-reveal';
import { useModalStore } from '@/lib/store';

export function Contact() {
  const { openContactForm } = useModalStore();

  return (
    <footer id="contact" className="text-center py-32 fade-in-section">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading mb-6 justify-center">What&apos;s Next?</h2>
      </ScrollReveal>

      <ScrollReveal animationType="fadeUp" delay={100}>
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4 transition-colors duration-300">
          Get In Touch
        </h3>
      </ScrollReveal>

      <ScrollReveal animationType="fadeUp" delay={200}>
        <p className="max-w-xl mx-auto mb-8 text-secondary transition-colors duration-300">
          I&apos;m actively looking for new opportunities and my inbox is
          always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
      </ScrollReveal>

      <ScrollReveal animationType="fadeUp" delay={300}>
        <div className="flex justify-center items-center space-x-4 flex-wrap gap-y-4">
          <button
            onClick={openContactForm}
            className="btn-glow inline-flex items-center text-lg font-mono"
          >
            Say Hello
          </button>

          <a
            href="/resume.pdf"
            download="RamazanSamat_Resume.pdf"
            className="btn-glow inline-flex items-center text-lg font-mono"
          >
            Resume
          </a>
        </div>
      </ScrollReveal>
    </footer>
  );
}
