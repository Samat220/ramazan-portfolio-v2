'use client';

import { motion } from 'framer-motion';
import {
  backendSkills,
  experience,
  mlSkills,
  personalInfo,
} from '@/data/config';

const ease = [0.23, 1, 0.32, 1] as const;

const paper = {
  background: 'linear-gradient(180deg, #fbf8f2 0%, #f1ebe0 100%)',
  boxShadow:
    'inset 0 1px 0 #fff, 0 1px 2px rgba(0,0,0,0.06), 0 24px 50px -24px rgba(60,45,20,0.35)',
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="me-stage me-grain mx-3 my-4 md:mx-8 md:my-6"
      style={{ background: '#e7dfd2' }}
    >
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            id="experience-title"
            className="me-display text-[clamp(3rem,7vw,6.5rem)] uppercase"
          >
            Experience
          </h2>
          <p className="me-mono max-w-[38ch] text-[13px] leading-[1.7] text-[#5a554d]">
            Five years of backend and infrastructure engineering in production,
            then a studio of my own.
          </p>
        </div>

        {/* The numbers, said once, plainly */}
        <motion.p
          className="mt-10 max-w-[30ch] text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em] text-[#2f2b27]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          Storage for 10M+ users, auth queries from 2s to under 100ms, and 100%
          of race-condition alerts gone.
        </motion.p>

        <div className="mt-12 flex flex-col gap-5">
          {experience.map((role, i) => (
            <motion.article
              key={role.company}
              className="grid gap-6 rounded-[28px] p-6 md:grid-cols-12 md:gap-10 md:p-10"
              style={paper}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease, delay: Math.min(i, 1) * 0.06 }}
            >
              <div className="md:col-span-4">
                <span className="me-tag">{role.period}</span>
                <h3 className="me-display mt-4 text-[clamp(2rem,3vw,2.75rem)]">
                  {role.company}
                </h3>
                <p className="mt-2 text-[16px] text-[#5a554d]">{role.role}</p>
                <a
                  href={role.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-pill mt-5"
                >
                  {new URL(role.companyUrl).hostname.replace('www.', '')} ↗
                </a>
              </div>
              <div className="md:col-span-8">
                <ul className="flex flex-col gap-3">
                  {role.description.map(point => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#2f2b27] md:text-[16px]"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.7em] h-[5px] w-[5px] shrink-0 rounded-full bg-[#2f2b27]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2" aria-label="Skills">
                  {role.skills.map(s => (
                    <span key={s} className="me-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Toolkit */}
        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <h3 className="me-display text-[clamp(1.75rem,2.6vw,2.5rem)] md:col-span-4">
            What I build with
          </h3>
          <div className="flex flex-col gap-6 md:col-span-8">
            <div>
              <p className="me-mono text-[12px] text-[#5a554d]">Engineering</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {backendSkills.map(s => (
                  <span key={s} className="me-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="me-mono text-[12px] text-[#5a554d]">ML and data</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {mlSkills.map(s => (
                  <span key={s} className="me-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="me-pill me-pill--ink"
          >
            Full resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
