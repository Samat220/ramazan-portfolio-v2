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
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {featuredProjects?.map((project, i) => (
          <ScrollReveal key={i} animationType="fadeUp" delay={i * 200}>
            <li className="project-item">
              <div className={`project-content ${
                i % 2 === 0 ? 'project-content-even' : 'project-content-odd'
              }`}>
                <div>
                  <p className="text-accent font-mono text-xs font-normal mt-2 mb-1">
                    Featured Project
                  </p>

                  <h3 className="text-primary text-2xl lg:text-3xl font-bold mt-0 mb-5">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="static text-inherit no-underline hover:text-accent transition-colors duration-300"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className={`project-description ${
                    i % 2 === 0 ? 'project-description-even' : 'project-description-odd'
                  }`}>
                    <p>{project.description}</p>
                  </div>

                  {project.technologies && (
                    <ul className="project-tech-list">
                      {project.technologies.map((tech, j) => (
                        <li key={j} className="project-tech-item">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Link"
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
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={`project-image-container ${
                i % 2 === 0 ? 'project-image-even' : 'project-image-odd'
              }`}>
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                >
                  <div className="project-image-overlay" />
                  {project.screenshotUrl ? (
                    <img
                      src={project.screenshotUrl}
                      alt={project.title}
                      className="project-image"
                    />
                  ) : (
                    <ProjectImagePlaceholder
                      title={project.title}
                      index={i}
                    />
                  )}
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
                className="card-enhanced p-6 rounded-lg h-full flex flex-col"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
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
