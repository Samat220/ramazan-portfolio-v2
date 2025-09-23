'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  MobileMenu,
  ThemeToggle,
} from '@/components/features/navigation';
import { useScrollDetection } from '@/hooks/ui/useScrollDetection';
import { useBodyScrollLock } from '@/hooks/ui/useBodyScrollLock';
import { useSmoothScroll } from '@/hooks';

export function Header() {
  const { scrollToTop } = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isScrolled = useScrollDetection(10);
  useBodyScrollLock(isMenuOpen);

  const headerHeight = headerRef.current?.clientHeight || 80;

  return (
    <motion.header
      ref={headerRef}
      // The header is now just a layout container. Its background is always transparent.
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-6 sm:px-8 md:px-12 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* This is the new animated background for the header bar */}
      <AnimatePresence>
        {isScrolled && !isMenuOpen && (
          <motion.div
            className="absolute inset-0 bg-background/20 backdrop-blur-2xl border-b border-white/10 shadow-lg" /* ✅ Shadow changed to shadow-lg */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* The rest of the header content now sits on top of the animated background */}
      <motion.button
        onClick={scrollToTop}
        className="header-logo relative z-[60] bg-transparent border-none cursor-pointer p-0 text-2xl font-bold text-accent"
        aria-label="Go to top"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        RS
      </motion.button>

      <NavigationMenu headerHeight={headerHeight} />

      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center space-x-4 relative z-10">
        <ThemeToggle />
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 flex items-center justify-center h-10 w-10 rounded-full bg-background/50 border border-border/20 text-accent transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'x' : 'menu'}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        headerHeight={headerHeight}
      />
    </motion.header>
  );
}
