'use client';

import { useEffect, useRef } from 'react';
import { useModalStore } from '@/lib/store';

export function ExperienceModal() {
  const { selectedExperience, isExperienceModalOpen, closeExperienceModal } =
    useModalStore();
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isExperienceModalOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeExperienceModal();
    };

    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isExperienceModalOpen, closeExperienceModal]);

  if (!isExperienceModalOpen || !selectedExperience) return null;

  const labelId = `modal-title-${selectedExperience.company}`;
  const descId = `modal-desc-${selectedExperience.company}`;

  return (
    <div
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
      aria-describedby={descId}
      onClick={closeExperienceModal}
    >
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <header className="dialog-header">
          <div>
            <h2 id={labelId}>{selectedExperience.role}</h2>
            <p className="muted">
              <a
                href={selectedExperience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                {selectedExperience.company} ↗
              </a>
            </p>
            <p className="period">{selectedExperience.period}</p>
          </div>
          <button
            ref={closeRef}
            className="close"
            onClick={closeExperienceModal}
            aria-label="Close"
          >
            ×
          </button>
        </header>
        <div id={descId} className="dialog-body">
          <h3>Key Highlights</h3>
          <ul className="bullets">
            {selectedExperience.description.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          background: rgba(15,23,42,0.6);
          backdrop-filter: blur(6px);
          padding: 24px;
        }
        .dialog {
          width: min(720px, 100%);
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
      `}</style>
    </div>
  );
}