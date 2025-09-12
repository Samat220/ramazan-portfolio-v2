'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function EnhancedCard({ children, className = '', href }: EnhancedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    rest: {
      scale: 1,
      y: 0,
      filter: 'brightness(1)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.03,
      y: -8,
      filter: 'brightness(1.1)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const glowVariants = {
    rest: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const CardComponent = href ? 'a' : 'div';

  return (
    <motion.div
      ref={ref}
      className={`${className} project-card relative group perspective-1000`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-accent opacity-0 blur-xl"
        variants={glowVariants}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
      />

      {/* Main Card Content */}
      <motion.div
        className="relative z-10 h-full"
        style={{ transform: "translateZ(50px)" }}
      >
        {href ? (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            {children}
          </a>
        ) : (
          children
        )}
      </motion.div>

      {/* Floating Particles */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full opacity-60"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0
              }}
              animate={{
                y: [null, `-${Math.random() * 50 + 20}px`],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                ease: 'easeOut'
              }}
            />
          ))}
        </>
      )}

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={false}
        animate={isHovered ? {
          background: [
            'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
            'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
          ],
          backgroundPosition: ['-200% 0', '200% 0'],
        } : {}}
        transition={{
          duration: 1.5,
          ease: 'linear',
          repeat: isHovered ? Infinity : 0,
        }}
      />
    </motion.div>
  );
}