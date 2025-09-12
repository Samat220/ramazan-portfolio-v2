'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import { ScrollReveal } from '@/components/common/scroll-reveal';
import { ProjectImagePlaceholder } from '@/components/common/project-image-placeholder';
import { GithubIcon, ExternalLinkIcon } from '@/components/icons';
import { projects } from '@/data/config';
import { Button } from '@/components/ui/button';

export function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const GRID_LIMIT = 6;
  const projectsToShow = showMoreProjects
    ? otherProjects
    : otherProjects.slice(0, GRID_LIMIT);

  return (
    <section id="projects" className="py-24">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
      </ScrollReveal>

      {/* Featured Projects */}
      <ul>
        {featuredProjects?.map((project, i) => (
          <ScrollReveal key={i} animationType="fadeUp" delay={i * 200}>
            <li className="relative grid gap-10 items-center project">
              <div className="project-content relative bg-slate-800 rounded-lg p-6 lg:p-8 z-20">
                <div>
                  <p className="project-overline mb-2">Featured Project</p>
                  <h3 className="project-title text-2xl font-bold text-slate-100 mb-4">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors duration-300"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description mb-6">
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul className="project-tech-list flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <li
                        key={tech}
                        className="text-sm text-slate-300 bg-slate-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="project-links flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Link"
                        className="text-slate-300 hover:text-green-400 transition-colors duration-300"
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="External Link"
                        className="text-slate-300 hover:text-green-400 transition-colors duration-300"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-image relative z-10">
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="img-container relative rounded-lg overflow-hidden shadow-2xl">
                    {project.screenshotUrl ? (
                      <img
                        src={project.screenshotUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="img w-full h-full object-cover transition-all duration-300 hover:filter-none"
                      />
                    ) : (
                      <ProjectImagePlaceholder
                        title={project.title}
                        index={i}
                      />
                    )}
                  </div>
                </a>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>

      {/* Other Notable Projects */}
      <div className="text-center mt-24">
        <ScrollReveal animationType="fadeUp">
          <h3 className="text-2xl font-medium text-primary mb-12">
            Other Noteworthy Projects
          </h3>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsToShow.map((project, i) => (
            <ScrollReveal key={i} animationType="fadeUp" delay={i * 100}>
              <motion.div
                className="project-card bg-card-bg p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col"
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px rgba(14, 165, 233, 0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-10 w-10 text-accent" />
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
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
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
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
                </div>

                <h3 className="text-lg font-medium text-primary mb-3 group">
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link relative inline-block hover:text-accent transition-colors duration-300"
                  >
                    {project.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                  </a>
                </h3>

                <p className="text-secondary mb-4 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 text-xs font-mono text-secondary">
                  {project.technologies &&
                    project.technologies.map((tech, j) => (
                      <motion.li
                        key={j}
                        className="hover:text-accent transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {otherProjects.length > GRID_LIMIT && (
          <ScrollReveal animationType="fadeUp" delay={300}>
            <div className="mt-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  onClick={() => setShowMoreProjects(!showMoreProjects)}
                  className="px-8 py-3"
                >
                  Show {showMoreProjects ? 'Less' : 'More'}
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
