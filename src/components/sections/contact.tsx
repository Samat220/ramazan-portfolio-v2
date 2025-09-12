'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/common/scroll-reveal';
import { personalInfo } from '@/data/config';
import { useModalStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

export function Contact() {
  const { openContactForm } = useModalStore();

  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading justify-center">What&apos;s Next?</h2>
      </ScrollReveal>

      <ScrollReveal animationType="fadeUp" delay={100}>
        <h3 className="text-4xl sm:text-5xl font-medium text-primary mb-6">
          Get In Touch
        </h3>
      </ScrollReveal>

      <ScrollReveal animationType="fadeUp" delay={200}>
        <p className="text-secondary mb-12 leading-relaxed">
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
      </ScrollReveal>

      <ScrollReveal animationType="fadeUp" delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-8 py-4 text-lg font-mono text-accent border border-accent rounded bg-transparent hover:bg-accent/10 transition-all duration-300 group"
            whileHover={{
              y: -2,
              boxShadow: '0 10px 25px rgba(14, 165, 233, 0.2)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello
            <motion.span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </motion.span>
          </motion.a>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              onClick={openContactForm}
              className="px-8 py-4 text-lg font-mono"
            >
              Contact Form
            </Button>
          </motion.div>
        </div>
      </ScrollReveal>

      <ScrollReveal animationType="fadeUp" delay={400}>
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-secondary font-mono">
            Built with{' '}
            <span className="text-accent hover:text-accent/80 transition-colors">
              Next.js
            </span>{' '}
            &{' '}
            <span className="text-accent hover:text-accent/80 transition-colors">
              Tailwind CSS
            </span>
            <br />
            Deployed on{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Vercel
            </a>
          </p>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
