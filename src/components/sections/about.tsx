'use client';

import { ScrollReveal } from '@/components/common/scroll-reveal';
import { backendSkills, mlSkills } from '@/data/config';

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
          <p className="transition-colors duration-300 text-secondary">
            My journey into technology began with a fascination for complex
            systems, which I first explored while studying Economics at Warwick.
            This curiosity led me to programming, and I&apos;ve been hooked ever
            since. After completing a Master&apos;s at Boston University,
            I&apos;ve had the privilege of building robust backend systems at
            innovative companies like Movableink and Lucky Financial.
          </p>
          <p className="transition-colors duration-300 text-secondary">
            My expertise is in the Python ecosystem, where I enjoy designing
            clean architecture, optimizing performance, and building systems
            that scale. I&apos;m now channeling that passion towards Machine
            Learning and am excited to find a role where I can merge my software
            engineering skills with data-driven challenges.
          </p>
        </ScrollReveal>

        <ScrollReveal
          animationType="slideLeft"
          delay={300}
          className="md:col-span-2 relative"
        >
          <div className="group w-full max-w-sm mx-auto">
            <div className="relative rounded-lg overflow-hidden z-10 bg-card-bg shadow-lg transition-colors duration-300">
              <img
                src="https://placehold.co/400x400/1E293B/F8FAFC?text=Your+Photo"
                alt="A placeholder headshot"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-accent/20 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            <div className="absolute inset-0 border-2 border-accent rounded-lg transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </ScrollReveal>
      </div>

      {/* SKILL TREE SECTION */}
      <ScrollReveal animationType="scaleUp" delay={400}>
        <div className="skills-container">
          <div className="skills-tree">
            <div className="skills-header transition-colors duration-300">
              MY SKILLS
            </div>
            <div className="skills-branches">
              <div className="skill-branch">
                <h4 className="transition-colors duration-300">
                  Python Backend
                </h4>
                <div className="skill-tags">
                  {backendSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="skill-tag transition-colors duration-300"
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
                <h4 className="transition-colors duration-300">
                  Machine Learning
                </h4>
                <div className="skill-tags">
                  {mlSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="skill-tag transition-colors duration-300"
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
