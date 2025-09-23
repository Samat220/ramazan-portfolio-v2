'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ANIMATION_VARIANTS } from '@/lib/constants';
import { ScrollRevealProps } from '@/types';

export function ScrollReveal({
  children,
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  const variant = ANIMATION_VARIANTS[animationType];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variant.initial}
      animate={isInView ? variant.animate : variant.initial}
      transition={{
        ...variant.transition,
        delay: delay / 1000, // Convert ms to seconds for Framer Motion
      }}
    >
      {children}
    </motion.div>
  );
}
