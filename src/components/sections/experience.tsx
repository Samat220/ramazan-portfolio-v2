'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/common/scroll-reveal';
import { experience } from '@/data/config';
import { useExperienceModal } from '../common/experience-modal';


export function Experience() {
  const { openExperienceModal } = useExperienceModal();

  // ✅ All old state (useState) and refs (useRef) that handled scrolling are now gone.

  return (
    <section id="experience" className="py-32 relative">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      </ScrollReveal>

      <div className="relative mt-16">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {experience.map((job, index) => {
            const previewItems = job.description.slice(0, 2);

            return (
              <ScrollReveal
                key={index}
                animationType="fadeUp"
                delay={index * 150}
              >
                <div className="relative flex items-start justify-start">
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-8 w-4 h-4 rounded-full bg-accent shadow-glow z-10 transform -translate-x-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.2 }}
                    viewport={{ once: true }}
                  />

                  {/* Experience Card */}
                  <motion.div
                    className="timeline-card relative ml-20 max-w-2xl w-full"
                    role="button"
                    tabIndex={0}
                    // ✅ This now *only* opens the modal. It no longer calls a function that scrolls the page.
                    onClick={() => openExperienceModal(job)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openExperienceModal(job);
                      }
                    }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Card Arrow */}
                    <div className="absolute top-6 left-0 -ml-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-card-bg/90" />

                    {/* Card Visual Content */}
                    <div className="card-enhanced p-8 rounded-lg backdrop-blur-md border border-border/50">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-primary mb-2">
                            {job.role}
                          </h3>
                          <div className="flex items-center space-x-2 mb-3">
                            <a
                              href={job.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent font-medium hover:underline transition-colors duration-200 text-lg"
                              onClick={e => e.stopPropagation()}
                            >
                              {job.company}
                            </a>
                            <ExternalLink className="h-4 w-4 text-accent/70" />
                          </div>
                          <div className="flex items-center text-base text-secondary/80 font-mono">
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-4 text-secondary">
                        {previewItems.map((point, i) => (
                          <li
                            key={`${index}-${i}`}
                            className="flex items-start"
                          >
                            <span className="text-accent mr-4 mt-1 flex-shrink-0 text-base">
                              ▸
                            </span>
                            <span className="text-base leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 4).map((skill, skillIndex) => (
                              <span
                                key={`${index}-skill-${skillIndex}`}
                                className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          {job.skills.length > 4 && (
                            <span className="px-3 py-1 text-xs font-medium text-secondary/60">
                              +{job.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {job.description.length > 2 && (
                        <div className="mt-4 text-accent/80 text-sm font-medium">
                          Click to see more...
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Timeline End Cap */}
        <motion.div
          className="absolute left-8 bottom-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent/60 to-accent/20 transform -translate-x-1/2 shadow-glow"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: experience.length * 0.1 + 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}