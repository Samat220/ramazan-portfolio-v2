'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { FeaturedProject, ProjectCard } from '@/components/features/projects';
import { useProjectsData } from '@/hooks/features/useProjectsData';
import { Button } from '@/components/ui/button';

export function Projects() {
  const {
    featuredProjects,
    projectsToShow,
    showMoreProjects,
    hasMoreProjects,
    toggleShowMore,
  } = useProjectsData();

  return (
    <section id="projects" className="py-32">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
      </ScrollReveal>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {featuredProjects?.map((project, i) => (
          <FeaturedProject key={project.title} project={project} index={i} />
        ))}
      </ul>
      <div className="text-center mt-24">
        <ScrollReveal animationType="fadeUp">
          <h3 className="text-2xl font-medium text-primary mb-12">
            Other Noteworthy Projects
          </h3>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsToShow.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {hasMoreProjects && (
          <ScrollReveal animationType="fadeUp" delay={300}>
            <div className="mt-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  onClick={toggleShowMore}
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
