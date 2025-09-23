import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/config';
import { useNavigationHandlers } from '@/hooks/ui/useNavigationHandlers';

interface NavigationMenuProps {
  headerHeight: number;
  className?: string;
}

export function NavigationMenu({
  headerHeight,
  className = '',
}: NavigationMenuProps) {
  const { handleLinkClick } = useNavigationHandlers(headerHeight);

  return (
    <nav className={`hidden md:flex items-center space-x-8 ${className}`}>
      {navLinks.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={e => handleLinkClick(e, link.href)}
          className="nav-link relative z-[60] text-sm font-mono text-secondary hover:text-accent transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
        >
          <span className="text-accent">{link.number}</span> {link.label}
        </motion.a>
      ))}

      <motion.a
        href={personalInfo.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glow relative z-[60] inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 + navLinks.length * 0.1 }}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        Resume
        <ExternalLink className="h-3 w-3" />
      </motion.a>
    </nav>
  );
}
