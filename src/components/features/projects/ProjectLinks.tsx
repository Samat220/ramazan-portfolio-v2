import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from '@/components/icons';

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string | null;
  variant?: 'featured' | 'card';
  className?: string;
}

export function ProjectLinks({
  githubUrl,
  liveUrl,
  variant = 'featured',
  className = '',
}: ProjectLinksProps) {
  if (variant === 'featured') {
    return (
      <div className={`project-links ${className}`}>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Link"
          >
            <GithubIcon />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="External Link"
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {githubUrl && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Link"
          className="text-secondary hover:text-accent transition-colors duration-300 p-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <GithubIcon size={18} />
        </motion.a>
      )}
      {liveUrl && (
        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="External Link"
          className="text-secondary hover:text-accent transition-colors duration-300 p-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLinkIcon size={18} />
        </motion.a>
      )}
    </div>
  );
}
