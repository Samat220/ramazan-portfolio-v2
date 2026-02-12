'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Socials } from '@/components/layout/socials';
import { Email } from '@/components/layout/email';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { BackgroundHighlight } from '@/components/common/background-highlight';
import { BackToTop } from '@/components/shared/back-to-top';
import { Loading, usePageLoader } from '@/components/common/loading';
import { useScrollAnimation } from '@/hooks';
import { ConstellationBackground } from '@/components/common/constellation-background';

export default function Home() {
  const { isLoading } = usePageLoader();

  // Initialize scroll animations for fade-in-section elements
  useScrollAnimation();

  return (
    <>
      <Loading isLoading={isLoading} />

      <div className="relative bg-background text-primary min-h-screen">
        {!isLoading && (
          <>
            <ConstellationBackground />
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <BackgroundHighlight />

              <Header />
              <Socials />
              <Email />

              <main className="mx-auto min-h-screen max-w-6xl px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 2xl:px-40 transition-all duration-300">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </main>

              {/* Back to Top Button */}
              <BackToTop />
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
