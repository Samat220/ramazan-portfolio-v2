'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useSmoothScroll } from '@/hooks';

export function BackToTop() {
  const { scrollToTop } = useSmoothScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-2 sm:right-4 md:right-6 z-50 p-4 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 group"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--backdrop-blur))',
            WebkitBackdropFilter: 'blur(var(--backdrop-blur))',
            border: '1px solid var(--glass-border)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          aria-label="Back to top"
        >
          <ChevronUp
            size={20}
            className="text-accent group-hover:text-primary transition-colors duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
