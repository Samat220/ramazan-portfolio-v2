'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/config';

export function Email() {
  return (
    <motion.div
      className="fixed bottom-0 right-4 sm:right-8 md:right-12 lg:right-16 hidden md:flex flex-col items-center space-y-6 z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.a
        href={`mailto:${personalInfo.email}`}
        className="email-link font-mono text-sm text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300 vertical-text p-2"
        style={{ writingMode: 'vertical-rl' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {personalInfo.email}
      </motion.a>

      <motion.div
        className="w-px h-24 bg-secondary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      />
    </motion.div>
  );
}
