'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/data/config';
import { useThemeStore } from '@/lib/store';
import { useSmoothScroll } from '@/hooks';
import { cn } from '@/lib/utils';

export function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const { scrollToElement } = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    scrollToElement(href.replace('#', ''), 80);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-12 md:px-24">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.button
            className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
            onClick={() => scrollToElement('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RS
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="font-mono text-sm text-secondary hover:text-accent transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -2 }}
              >
                <span className="text-accent">{link.number}</span> {link.label}
              </motion.button>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="RamazanSamat_Resume.pdf"
              className="font-mono text-sm border border-accent rounded text-accent py-2 px-4 hover:bg-accent-light transition-all duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ y: -2 }}
            >
              Resume
            </motion.a>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={cn(
            'md:hidden overflow-hidden',
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-4 space-y-4 border-t border-border">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center space-x-3 text-secondary hover:text-accent transition-colors w-full text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-accent font-mono text-sm">
                  {link.number}
                </span>
                <span className="font-mono">{link.label}</span>
              </motion.button>
            ))}

            {/* Mobile Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-accent hover:text-accent/80 transition-colors w-full text-left font-mono border border-accent rounded px-3 py-2 mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 + 0.1 }}
            >
              <span className="text-accent font-mono text-sm">05.</span>
              <span className="font-mono">Resume</span>
            </motion.a>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
