'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/config';
import { useThemeStore } from '@/lib/store';
import { useSmoothScroll } from '@/hooks';

export function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const { scrollToElement, scrollToTop } = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      scrollToElement(targetId, 80);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 z-50 flex items-center justify-between w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 bg-background/80 backdrop-blur-sm shadow-md transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.button
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        className="header-logo relative z-[60] bg-transparent border-none cursor-pointer p-0 text-2xl font-bold text-accent"
        aria-label="Go to top"
        whileHover={{
          y: -3,
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        RS
      </motion.button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="nav-link font-mono text-sm text-primary hover:text-accent transition-all duration-300 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1 + 0.3,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            whileHover={{ y: -2 }}
          >
            <span className="text-accent">{link.number}</span> {link.label}
          </motion.a>
        ))}
        <motion.a
          href="/resume.pdf"
          download="RamazanSamat_Resume.pdf"
          className="font-mono text-sm border border-accent rounded text-accent py-2 px-4 hover:bg-accent-light transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: navLinks.length * 0.1 + 0.5,
            duration: 0.4,
            type: 'spring',
            stiffness: 200,
            damping: 20
          }}
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
          transition={{
            delay: navLinks.length * 0.1 + 0.7,
            duration: 0.5
          }}
          whileHover={{
            scale: 1.1,
            rotate: theme === 'dark' ? 15 : -15,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
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
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center space-x-4">
        <motion.button
          onClick={toggleTheme}
          className="text-accent hover:scale-110 transition-transform"
          aria-label="Toggle theme"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
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
          className="text-accent"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen}
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav className="px-6 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center space-x-3 text-primary hover:text-accent transition-colors font-mono"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-accent text-sm">{link.number}</span>
                  <span>{link.label}</span>
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-accent hover:text-accent/80 transition-colors font-mono border border-accent rounded px-3 py-2 mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: navLinks.length * 0.1 + 0.1,
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Resume</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
