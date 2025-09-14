'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { personalInfo } from '@/data/config';

export function Hero() {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  }), []);

  const shimmerVariants = useMemo(() => ({
    initial: { x: '-100%' },
    animate: { x: '100%' },
  }), []);

  // Rotating taglines for dynamic intro
  const taglines = useMemo(() => [
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Creative Builder'
  ], []);

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center items-start pt-16"
    >
      {/* Subtle Background Pattern */}


      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent/20 rounded-full"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-accent/30 rounded-full"
        animate={{
          y: [10, -15, 10],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-accent/15 rounded-full"
        animate={{
          y: [-8, 12, -8],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
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
          className="relative text-fluid-6xl font-bold transition-colors duration-300 overflow-hidden"
        >
          <span className="gradient-text">{personalInfo.name}</span>.
          <motion.div
            variants={shimmerVariants}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          />
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-2 text-fluid-5xl font-bold text-secondary transition-colors duration-300"
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

        {/* Dynamic Tagline */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="flex items-center space-x-2 text-fluid-lg font-mono">
            <span className="text-secondary">I am a</span>
            <div className="relative h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTagline}
                  className="absolute inset-0 gradient-text font-semibold"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {taglines[currentTagline]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-12"
        >
          <motion.a
            href="#contact"
            className="btn-glow inline-flex items-center text-lg font-mono group"
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
