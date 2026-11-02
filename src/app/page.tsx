'use client';

import { MotionConfig } from 'framer-motion';
import { SmoothScroll } from '@/components/site/smooth-scroll';
import { Nav } from '@/components/site/nav';
import { Hero } from '@/components/site/hero';
import { Work } from '@/components/site/work';
import { Studio } from '@/components/site/studio';
import { Experience } from '@/components/site/experience';
import { Carousel } from '@/components/site/carousel';
import { Contact, Footer } from '@/components/site/contact';

export default function Home() {
  return (
    // Framer drops transform motion for visitors who ask for reduced motion.
    <MotionConfig reducedMotion="user">
      <div className="me overflow-x-clip">
        <SmoothScroll />
        <Nav />
        <main>
          <Hero />
          <Work />
          <Studio />
          <Experience />
          <Carousel />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
