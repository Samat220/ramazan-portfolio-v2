'use client';

import { ScrollReveal } from '@/components/shared/scroll-reveal';
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
          <p className="text-secondary">
            I&apos;m the founder and creative director of{' '}
            <a
              href="https://oinastudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Oina Studio
            </a>
            . &quot;Oina&quot; means &quot;play&quot; in Kazakh. I grew up with
            the epic poetry and mythology of Central Asia and never once saw
            that world in a game, so we&apos;re making one: a single-player
            narrative adventure built on Unreal Engine 5. I&apos;m also on the
            jury for the GDC Awards 2027, Narrative Game of the Year.
          </p>
          <p className="text-secondary">
            Before Oina, I spent five years as a backend and infrastructure
            engineer. At Movable Ink I built gRPC services, Redis-backed rate
            limiters, and ML personalization pipelines serving millions of email
            recipients; at Lucky Financial I scaled user data to 10M+ users. I
            still build every day, from full-stack web apps to native iOS and
            data tools like ScoutMyRivals, a Marvel Rivals ban recommender for
            web and iOS.
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

      <ScrollReveal animationType="scaleUp" delay={400}>
        <div className="skills-container">
          <div className="skills-tree">
            <div className="skills-header">MY SKILLS</div>
            <div className="skills-branches">
              <div className="skill-branch">
                <h4>Engineering</h4>
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
                <h4>ML &amp; Data</h4>
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
