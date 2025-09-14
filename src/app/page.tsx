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
import { BackToTop } from '@/components/common/back-to-top';
import { Loading, usePageLoader } from '@/components/common/loading';
import { CustomCursor } from '@/components/common/custom-cursor';
import { useScrollAnimation } from '@/hooks';
import { HeroBackground } from '@/components/common/hero-background';
import { AuroraBackground } from '@/components/common/aurora-background';
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
            {/* <HeroBackground /> */}
            {/* <AuroraBackground /> */}
            <ConstellationBackground />
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
                delayChildren: 0.3,
                staggerChildren: 0.1
              }}
            >
              {/* Background Geometric Shapes */}
              <div className="fixed left-0 top-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2s" />
                <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-4s" />
              </div>

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
