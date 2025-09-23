import { useState, useMemo } from 'react';
import { projects } from '@/data/config';

const GRID_LIMIT = 3;

export function useProjectsData() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const projectsData = useMemo(() => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);
    const projectsToShow = showMoreProjects
      ? otherProjects
      : otherProjects.slice(0, GRID_LIMIT);

    return {
      featuredProjects,
      otherProjects,
      projectsToShow,
      hasMoreProjects: otherProjects.length > GRID_LIMIT,
    };
  }, [showMoreProjects]);

  const toggleShowMore = () => setShowMoreProjects(!showMoreProjects);

  return {
    ...projectsData,
    showMoreProjects,
    toggleShowMore,
  };
}
