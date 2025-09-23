import { motion } from 'framer-motion';

interface TechnologyListProps {
  technologies: string[];
  variant?: 'featured' | 'card';
  className?: string;
}

export function TechnologyList({
  technologies,
  variant = 'featured',
  className = '',
}: TechnologyListProps) {
  if (variant === 'featured') {
    return (
      <ul className={`project-tech-list ${className}`}>
        {technologies.map((tech, index) => (
          <li key={index} className="project-tech-item">
            {tech}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className={`flex flex-wrap gap-3 text-xs font-mono text-secondary ${className}`}
    >
      {technologies.map((tech, index) => (
        <motion.li
          key={index}
          className="hover:text-accent transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {tech}
        </motion.li>
      ))}
    </ul>
  );
}
