'use client';

import { ScrollReveal } from '@/components/common/scroll-reveal';
import { backendSkills, mlSkills, personalInfo } from '@/data/config';

export function About() {
  return (
    <section id="about" className="py-32">
      <ScrollReveal animationType="fadeUp">
        <h2 className="numbered-heading">About Me</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <ScrollReveal
          animationType="slideRight"
          delay={200}
          className="md:col-span-3 space-y-4"
        >
          {/* ✅ UPDATED PARAGRAPH 1 */}
          <p className="text-secondary">
            I specialize in Python backend development, with a focus on
            designing resilient, high-performance systems. My experience
            includes building scalable gRPC services, implementing custom rate
            limiters, and optimizing backend reliability at Movable Ink.
          </p>
          {/* ✅ UPDATED PARAGRAPH 2 */}
          <p className="text-secondary">
            What drives me now is the chance to bring that same system-design
            mindset into machine learning and AI—especially in fintech, where
            technology and data can unlock real-world impact. I’m eager to
            contribute to teams building intelligent, reliable systems that sit
            at the intersection of software engineering and applied ML.
          </p>
        </ScrollReveal>

        <ScrollReveal
          animationType="slideLeft"
          delay={300}
          className="md:col-span-2 relative"
        >
          <div className="group w-full max-w-sm mx-auto">
            <div className="relative rounded-lg overflow-hidden z-10 bg-card-bg shadow-lg">
              <img
                src={personalInfo.photo}
                alt={`${personalInfo.name} profile photo`}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 border-2 border-accent rounded-lg transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </ScrollReveal>
      </div>

      {/* The skills tree section remains the same */}
      <ScrollReveal animationType="scaleUp" delay={400}>
        <div className="skills-container">
          <div className="skills-tree">
            <div className="skills-header">MY SKILLS</div>
            <div className="skills-branches">
              <div className="skill-branch">
                <h4>Python Backend</h4>
                <div className="skill-tags">
                  {backendSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="skill-tag"
                      style={{
                        animationDelay: `${500 + index * 100}ms`,
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="skill-branch">
                <h4>Machine Learning</h4>
                <div className="skill-tags">
                  {mlSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="skill-tag"
                      style={{
                        animationDelay: `${700 + index * 100}ms`,
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
