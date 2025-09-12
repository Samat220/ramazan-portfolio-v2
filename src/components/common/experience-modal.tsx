'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModalStore } from '@/lib/store';
import type { Experience } from '@/types';

export function ExperienceModal() {
  const { selectedExperience, isExperienceModalOpen, closeExperienceModal } =
    useModalStore();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeExperienceModal();
      }
    };

    if (isExperienceModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isExperienceModalOpen, closeExperienceModal]);

  return (
    <AnimatePresence>
      {isExperienceModalOpen && selectedExperience && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeExperienceModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-card-bg rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative border border-border"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={closeExperienceModal}
              className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="mb-6 pr-12">
              <h2
                id="modal-title"
                className="text-2xl font-medium text-primary mb-2"
              >
                {selectedExperience.role}
                <span className="text-accent ml-2">
                  @{' '}
                  <a
                    href={selectedExperience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link hover:underline"
                  >
                    {selectedExperience.company}
                  </a>
                </span>
              </h2>
              <p className="text-sm font-mono text-secondary">
                {selectedExperience.period}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primary mb-4">
                Key Highlights
              </h3>
              <motion.ul
                className="space-y-3 text-secondary"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {selectedExperience.description.map(
                  (point: string, i: number) => (
                    <motion.li
                      key={i}
                      className="flex"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <span className="text-accent mr-4 flex-shrink-0">▹</span>
                      <span>{point}</span>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
