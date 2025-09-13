'use client';

import { useModal } from '@/components/ui/modal-provider';

interface ExperienceModalProps {
  job: {
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string[];
  };
}

function ExperienceModalContent({ job }: ExperienceModalProps) {
  const { closeModal } = useModal();

  const labelId = `modal-title-${job.company}`;
  const descId = `modal-desc-${job.company}`;

  return (
    <div
      className="w-full max-w-2xl rounded-2xl overflow-hidden"
      role="dialog"
      aria-labelledby={labelId}
      aria-describedby={descId}
    >
      <div className="dialog">
        <header className="dialog-header">
          <div>
            <h2 id={labelId}>{job.role}</h2>
            <p className="muted">
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
                onClick={e => e.stopPropagation()}
              >
                {job.company} ↗
              </a>
            </p>
            <p className="period">{job.period}</p>
          </div>
          <button
            className="close"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
        </header>
        <div id={descId} className="dialog-body">
          <h3>Key Highlights</h3>
          <ul className="bullets">
            {job.description.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="skills-section">
            <h4>Technologies & Skills</h4>
            <div className="skills-grid">
              {job.skills.map((skill: string, i: number) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dialog {
          width: 100%;
          border-radius: 16px;
          background: var(--card-bg, #1e293b);
          border: 1px solid var(--border, rgba(148, 163, 184, 0.2));
          box-shadow: 0 24px 64px rgba(0,0,0,0.4);
          overflow: hidden;
          animation: pop 180ms ease-out;
        }
        @keyframes pop {
          from { transform: translateY(8px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .dialog-header {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 12px;
          padding: 24px 24px 16px;
          border-bottom: 1px solid var(--border, rgba(148, 163, 184, 0.2));
        }
        .dialog-header h2 {
          margin: 0 0 8px;
          color: var(--text-primary, #f1f5f9);
          font-size: 1.5rem;
          font-weight: 600;
        }
        .muted {
          margin: 4px 0;
          color: var(--text-secondary, #94a3b8);
          font-size: 0.9rem;
        }
        .company-link {
          color: var(--accent, #0ea5e9);
          text-decoration: none;
        }
        .company-link:hover {
          text-decoration: underline;
        }
        .period {
          margin: 6px 0 0;
          color: var(--text-secondary, #94a3b8);
          font-family: 'Fira Code', monospace;
          font-size: 0.85rem;
        }
        .close {
          border: 1px solid var(--border, rgba(148, 163, 184, 0.2));
          background: var(--card-bg, #1e293b);
          color: var(--text-secondary, #94a3b8);
          border-radius: 10px;
          width: 36px;
          height: 36px;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .close:hover {
          background: var(--background, #0f172a);
          color: var(--text-primary, #f1f5f9);
        }
        .dialog-body {
          padding: 16px 24px 24px;
          color: var(--text-primary, #f1f5f9);
        }
        .dialog-body h3 {
          margin: 0 0 16px;
          color: var(--text-primary, #f1f5f9);
          font-size: 1.1rem;
          font-weight: 500;
        }
        .bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .bullets li {
          margin-bottom: 12px;
          padding-left: 20px;
          position: relative;
          color: var(--text-secondary, #94a3b8);
          line-height: 1.6;
        }
        .bullets li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent, #0ea5e9);
          font-weight: bold;
        }
        .skills-section {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border, rgba(148, 163, 184, 0.2));
        }
        .skills-section h4 {
          margin: 0 0 12px;
          color: var(--text-primary, #f1f5f9);
          font-size: 1rem;
          font-weight: 500;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          padding: 6px 12px;
          background: var(--accent, #0ea5e9);
          background: rgba(14, 165, 233, 0.1);
          color: var(--accent, #0ea5e9);
          border: 1px solid rgba(14, 165, 233, 0.2);
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .skill-tag:hover {
          background: rgba(14, 165, 233, 0.2);
        }
      `}</style>
    </div>
  );
}

export function useExperienceModal() {
  const { openModal } = useModal();

  const openExperienceModal = (job: ExperienceModalProps['job']) => {
    openModal(<ExperienceModalContent job={job} />);
  };

  return { openExperienceModal };
}