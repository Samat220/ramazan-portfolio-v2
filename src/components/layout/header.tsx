'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/config';
import { useThemeStore } from '@/lib/store';
import { useSmoothScroll } from '@/hooks';

export function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const { scrollToElement, scrollToTop } = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Effect to handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    if (
      href.startsWith('http') ||
      (href.startsWith('/') && !href.startsWith('/#'))
    ) {
      window.open(href, href.includes('.pdf') ? '_blank' : '_self');
      return;
    }

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      // Dynamically calculate header height for accurate offset
      const offset = headerRef.current?.clientHeight || 80;
      scrollToElement(targetId, offset);
    }
    setIsMenuOpen(false);
  };

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
        transition={{ duration: 0.2 }}
      >
        RS
      </motion.button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 relative z-10">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="nav-link font-mono text-sm text-primary hover:text-accent transition-all duration-200 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-accent">{link.number}</span> {link.label}
          </motion.a>
        ))}
        <motion.a
          href="/resume.pdf"
          download="RamazanSamat_Resume.pdf"
          className="font-mono text-sm border border-accent rounded text-accent py-2 px-4 hover:bg-accent-light transition-all duration-200"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: navLinks.length * 0.1 + 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Resume
        </motion.a>
        <motion.button
          onClick={toggleTheme}
          className="text-accent hover:scale-110 transition-transform ml-4"
          aria-label="Toggle theme"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: navLinks.length * 0.1 + 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: theme === 'dark' ? 15 : -15 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center space-x-4 relative z-10">
        <motion.button
          onClick={toggleTheme}
          className="flex items-center justify-center h-10 w-10 text-accent"
          aria-label="Toggle theme"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
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
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full pt-24 bg-background/20 backdrop-blur-2xl border-b border-white/10 shadow-lg md:hidden" /* ✅ Shadow changed to shadow-lg */
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="px-8 pb-10 flex flex-col items-center text-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-xl text-primary hover:text-accent transition-colors font-mono"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.3, ease: 'easeOut' }}
                >
                  <span className="text-accent">{link.number}</span> {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-mono border border-accent rounded-lg text-accent px-8 py-3 mt-4 hover:bg-accent-light transition-colors"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.08, duration: 0.3, ease: 'easeOut' }}
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

