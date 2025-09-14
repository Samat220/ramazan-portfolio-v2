'use client';

import { useModal } from '@/components/ui/modal-provider';
import type { Experience } from '@/types';

// This defines the JSX that will appear inside the modal.
function ExperienceModalContent({ job }: { job: Experience }) {
  return (
    <div className="w-full max-w-2xl rounded-2xl bg-card-bg border border-border/50 shadow-2xl overflow-hidden glass-card">
      {/* Modal Header */}
      <header className="flex items-start justify-between gap-4 p-6 border-b border-border/50">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">{job.role}</h3>
          <a
            href={job.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline text-lg"
            onClick={e => e.stopPropagation()} // Prevents modal from closing when link is clicked
          >
            {job.company} ↗
          </a>
          <p className="text-sm text-secondary font-mono mt-2">{job.period}</p>
        </div>
      </header>

      {/* Modal Body with Scrolling */}
      <div className="p-6 max-h-[60vh] overflow-y-auto">
        <h4 className="text-lg font-medium text-primary mb-4">Key Highlights</h4>
        <ul className="space-y-3 mb-6">
          {job.description.map((point, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="text-accent mt-1 flex-shrink-0">▹</span>
              <span className="text-secondary leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Skills Section */}
        <div className="pt-4 border-t border-border/50">
          <h4 className="text-lg font-medium text-primary mb-3">Technologies & Skills</h4>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// This is the custom hook you'll use in your Experience component.
export function useExperienceModal() {
  const { openModal } = useModal();

  const openExperienceModal = (job: Experience) => {
    // This function takes a job object and opens the modal with the correct content.
    openModal(<ExperienceModalContent job={job} />);
  };

  return { openExperienceModal };
}