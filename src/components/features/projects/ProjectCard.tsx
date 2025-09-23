import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ProjectLinks } from './ProjectLinks';
import { TechnologyList } from './TechnologyList';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal key={index} animationType="fadeUp" delay={index * 100}>
      <motion.div
        className="card-enhanced p-6 rounded-lg h-full flex flex-col"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <Folder className="h-10 w-10 text-accent" />
          <ProjectLinks
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            variant="card"
          />
        </div>

        <h3 className="text-lg font-medium text-primary mb-3 group">
          <a
            href={project.liveUrl || project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-link relative inline-block hover:text-accent transition-colors duration-300"
          >
            {project.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        </h3>

        <p className="text-secondary mb-4 flex-1 text-sm leading-relaxed">
          {project.description}
        </p>

        {project.technologies && (
          <TechnologyList technologies={project.technologies} variant="card" />
        )}
      </motion.div>
    </ScrollReveal>
  );
}
