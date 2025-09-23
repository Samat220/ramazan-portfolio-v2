import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/config';
import { useNavigationHandlers } from '@/hooks/ui/useNavigationHandlers';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  headerHeight: number;
}

export function MobileMenu({ isOpen, onClose, headerHeight }: MobileMenuProps) {
  const { handleLinkClick } = useNavigationHandlers(headerHeight);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-0 left-0 w-full pt-24 bg-background/20 backdrop-blur-2xl border-b border-white/10 shadow-lg md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <nav className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => handleLinkClick(e, link.href, onClose)}
                className="text-lg font-mono text-secondary hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-accent">{link.number}</span> {link.label}
              </motion.a>
            ))}

            <motion.a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 text-sm font-medium mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            >
              Resume
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </nav>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-secondary hover:text-accent transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
