'use client';

import { X } from 'lucide-react';
import { useModal } from '@/components/ui/modal-provider';
import type { Experience } from '@/types';

function ExperienceModalContent({ job }: { job: Experience }) {
  const { closeModal } = useModal();

  return (
    <div className="glass-card w-full max-w-2xl rounded-2xl overflow-hidden">
      {/* Modal Header */}
      <header className="flex items-start justify-between gap-4 p-6 border-b border-[var(--glass-border)]">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">
            {job.role}
          </h3>
          <a
            href={job.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline text-lg"
            onClick={e => e.stopPropagation()}
          >
            {job.company} ↗
          </a>
          <p className="text-sm text-secondary font-mono mt-2">{job.period}</p>
        </div>
        <button
          onClick={closeModal}
          className="p-2 text-secondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-secondary/10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
      </header>

      {/* Modal Body */}
      <div className="p-6 max-h-[60vh] overflow-y-auto">
        <h4 className="text-lg font-medium text-primary mb-4">
          Key Highlights
        </h4>
        <ul className="space-y-3 mb-6">
          {job.description.map((point, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="text-accent mt-1 flex-shrink-0">▹</span>
              <span className="text-secondary leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Skills Section */}
        <div className="pt-4 border-t border-[var(--glass-border)]">
          <h4 className="text-lg font-medium text-primary mb-3">
            Technologies & Skills
          </h4>
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

export function useExperienceModal() {
  const { openModal } = useModal();

  const openExperienceModal = (job: Experience) => {
    openModal(<ExperienceModalContent job={job} />);
  };

  return { openExperienceModal };
}
