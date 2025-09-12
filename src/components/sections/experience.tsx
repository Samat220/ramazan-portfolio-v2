'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/common/scroll-reveal';
import { experience } from '@/data/config';
import { useModalStore } from '@/lib/store';

export function Experience() {
  const { openExperienceModal } = useModalStore();

  return (
    <section id="experience" className="py-32">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      </ScrollReveal>

      <div className="relative mt-16">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20" />
        
        {/* Timeline Items */}
        <div className="space-y-16">
          {experience.map((job, index) => {
            const visibleItems = job.description.slice(0, 3);
            const hasMoreItems = job.description.length > 3;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal
                key={index}
                animationType="fadeUp"
                delay={index * 200}
              >
                <div className={`relative flex items-start ${isEven ? 'justify-start' : 'justify-end'}`}>
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
                    className={`timeline-card relative max-w-lg ${isEven ? 'ml-20' : 'mr-20'}`}
                    onClick={() => hasMoreItems && openExperienceModal(job)}
                    role={hasMoreItems ? 'button' : undefined}
                    tabIndex={hasMoreItems ? 0 : undefined}
                    onKeyDown={e => {
                      if (hasMoreItems && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        openExperienceModal(job);
                      }
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={hasMoreItems ? { scale: 0.98 } : {}}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Card Arrow */}
                    <div className={`absolute top-6 w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
                      isEven 
                        ? 'left-0 -ml-2 border-r-8 border-r-card-bg/90' 
                        : 'right-0 -mr-2 border-l-8 border-l-card-bg/90'
                    }`} />

                    <div className="card-enhanced p-6 rounded-lg backdrop-blur-md border border-border/50">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-primary mb-1">
                            {job.role}
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <a
                              href={job.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent font-medium hover:underline transition-colors duration-200"
                              onClick={e => e.stopPropagation()}
                            >
                              {job.company}
                            </a>
                            <ExternalLink className="h-3 w-3 text-accent/70" />
                          </div>
                          <div className="flex items-center text-sm text-secondary/80 font-mono">
                            <span>{job.period}</span>
                          </div>
                        </div>

                        {hasMoreItems && (
                          <motion.div
                            className="ml-4 p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors duration-200"
                            whileHover={{ rotate: 15 }}
                          >
                            <ExternalLink className="h-4 w-4 text-accent" />
                          </motion.div>
                        )}
                      </div>

                      <ul className="space-y-3 text-secondary">
                        {visibleItems.map((point, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-accent mr-3 mt-1 flex-shrink-0 text-sm">
                              ▸
                            </span>
                            <span className="text-sm leading-relaxed">{point}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {hasMoreItems && (
                        <motion.div 
                          className="mt-4 text-accent text-sm font-medium flex items-center space-x-2 hover:underline transition-all duration-200"
                          whileHover={{ x: 2 }}
                        >
                          <span>View all {job.description.length} highlights</span>
                          <motion.span 
                            className="transition-transform duration-200"
                            whileHover={{ x: 2 }}
                          >
                            →
                          </motion.span>
                        </motion.div>
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
