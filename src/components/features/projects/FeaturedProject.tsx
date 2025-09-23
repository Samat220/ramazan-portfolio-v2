import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ThemeAwareImage } from '@/components/shared/theme-aware-image';
import { ProjectImagePlaceholder } from '@/components/shared/project-image-placeholder';
import { ProjectLinks } from './ProjectLinks';
import { TechnologyList } from './TechnologyList';
import { Project } from '@/types';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal key={index} animationType="fadeUp" delay={index * 200}>
      <li className="project-item">
        <div
          className={`project-content ${
            isEven ? 'project-content-even' : 'project-content-odd'
          }`}
        >
          <div>
            <p className="text-accent font-mono text-xs font-normal mt-2 mb-1">
              Featured Project
            </p>

            <h3 className="text-primary text-2xl lg:text-3xl font-bold mt-0 mb-5">
              <a
                href={project.liveUrl || project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="static text-inherit no-underline hover:text-accent transition-colors duration-300"
              >
                {project.title}
              </a>
            </h3>

            <div
              className={`project-description ${
                isEven ? 'project-description-even' : 'project-description-odd'
              }`}
            >
              <p>{project.description}</p>
            </div>

            {project.technologies && (
              <TechnologyList
                technologies={project.technologies}
                variant="featured"
                className={isEven ? 'justify-start' : 'justify-end'}
              />
            )}

            <ProjectLinks
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              variant="featured"
            />
          </div>
        </div>

        <div
          className={`project-image-container ${
            isEven ? 'project-image-even' : 'project-image-odd'
          }`}
        >
          <div className="project-image-wrapper">
            {project.screenshots ? (
              <ThemeAwareImage
                darkSrc={project.screenshots.dark}
                lightSrc={project.screenshots.light}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <ProjectImagePlaceholder title={project.title} index={index} />
            )}
          </div>
        </div>
      </li>
    </ScrollReveal>
  );
}
