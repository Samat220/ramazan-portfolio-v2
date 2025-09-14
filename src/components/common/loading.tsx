'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingProps {
  isLoading: boolean;
}

export function Loading({ isLoading }: LoadingProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-accent/30" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-accent/20" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full border-2 border-accent/40" />
      </motion.div>

      <div className="text-center relative z-10">
        {/* Enhanced Logo Animation */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.div
            className="text-6xl font-bold gradient-text relative z-10"
            animate={{
              textShadow: [
                '0 0 20px var(--accent)',
                '0 0 40px var(--accent)',
                '0 0 20px var(--accent)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            RS
          </motion.div>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <motion.div
          className="relative w-32 h-2 bg-glass-border mx-auto rounded-full overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-accent rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        <motion.div
          className="flex space-x-2 mt-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2, 3, 4].map(index => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-accent rounded-full shadow-glow"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-fluid-base text-secondary mt-6 font-mono tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

// Page Loader Hook
export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
}
