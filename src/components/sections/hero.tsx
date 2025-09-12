'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/config';
import { ANIMATION_VARIANTS } from '@/lib/constants';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { x: '100%' },
  };

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center items-start pt-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 ml-1 font-mono text-accent transition-colors duration-300"
        >
          {personalInfo.greeting}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative text-4xl font-bold text-primary transition-colors duration-300 sm:text-6xl md:text-7xl overflow-hidden"
        >
          {personalInfo.name}.
          <motion.div
            variants={shimmerVariants}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          />
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-2 text-4xl font-bold text-secondary transition-colors duration-300 sm:text-6xl md:text-7xl"
        >
          {personalInfo.intro}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-5 max-w-xl text-secondary transition-colors duration-300 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-mono text-accent border border-accent rounded bg-transparent hover:bg-accent/10 transition-all duration-300 group"
            whileHover={{
              y: -2,
              boxShadow: '0 10px 25px rgba(14, 165, 233, 0.2)',
            }}
            whileTap={{ scale: 0.98 }}
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
          >
            Get In Touch
            <motion.span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
