'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/common/scroll-reveal';
import { experience } from '@/data/config';
import { useModalStore } from '@/lib/store';

export function Experience() {
  const { openExperienceModal } = useModalStore();

  return (
    <section id="experience" className="py-24">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      </ScrollReveal>

      <div className="space-y-8">
        {experience.map((job, index) => {
          const visibleItems = job.description.slice(0, 3);
          const hasMoreItems = job.description.length > 3;

          return (
            <ScrollReveal
              key={index}
              animationType="fadeUp"
              delay={index * 150}
            >
              <motion.div
                className="relative rounded-lg bg-card-bg p-6 transition-all duration-300 shadow-custom hover:shadow-lg cursor-pointer group border border-border"
                onClick={() => hasMoreItems && openExperienceModal(job)}
                role={hasMoreItems ? 'button' : undefined}
                tabIndex={hasMoreItems ? 0 : undefined}
                onKeyDown={e => {
                  if (hasMoreItems && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    openExperienceModal(job);
                  }
                }}
                whileHover={hasMoreItems ? { y: -2 } : {}}
                whileTap={hasMoreItems ? { scale: 0.98 } : {}}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-primary transition-colors duration-300">
                      {job.role}{' '}
                      <span className="text-accent transition-colors duration-300">
                        @{' '}
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company-link hover:underline"
                          onClick={e => e.stopPropagation()}
                        >
                          {job.company}
                        </a>
                      </span>
                    </h3>
                    <p className="text-sm font-mono text-secondary mt-1 mb-4 transition-colors duration-300">
                      {job.period}
                    </p>
                  </div>

                  {hasMoreItems && (
                    <div className="ml-4 flex items-center">
                      <motion.div
                        className="expand-icon transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ rotate: 5 }}
                      >
                        <ExternalLink className="h-5 w-5 text-accent" />
                      </motion.div>
                    </div>
                  )}
                </div>

                <ul className="space-y-2 text-secondary">
                  {visibleItems.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <span className="text-accent mr-4 transition-colors duration-300 flex-shrink-0">
                        ▹
                      </span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {hasMoreItems && (
                  <div className="mt-4 text-accent text-sm font-medium group-hover:underline transition-all duration-300">
                    Click to see all {job.description.length} highlights
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
