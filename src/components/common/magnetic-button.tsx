'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  strength?: number;
}

export function MagneticButton({ 
  children, 
  className = '', 
  href, 
  onClick,
  strength = 0.3 
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const commonProps = {
    ref: ref as any,
    className: `${className} cursor-pointer relative overflow-hidden`,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: { x: springX, y: springY },
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      {...commonProps}
      {...(href && { href })}
      {...(onClick && { onClick })}
      whileHover={{ 
        scale: 1.05,
        rotate: isHovered ? [0, -1, 1, -1, 0] : 0
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        rotate: {
          duration: 0.6,
          ease: 'easeInOut'
        }
      }}
    >
      <motion.div
        className="relative z-10"
        animate={{
          x: isHovered ? [-1, 1, -1, 1, 0] : 0,
          y: isHovered ? [1, -1, 1, -1, 0] : 0
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut'
        }}
      >
        {children}
      </motion.div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 1.2, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </Component>
  );
}