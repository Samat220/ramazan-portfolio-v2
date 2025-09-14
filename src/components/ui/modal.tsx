'use client';

import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

// Variants for the backdrop overlay
const overlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
};

// Variants for the modal content panel
const modalVariants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1], // Deceleration easing
      delay: 0.1, // Appears slightly after the overlay
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1], // Acceleration easing
    },
  },
};

export function Modal({
  isOpen,
  onClose,
  children,
  className = '',
}: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 ${className}`}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-background/20 backdrop-blur-lg"
            style={{ willChange: 'opacity' }} // Performance hint
            variants={overlayVariants as any}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
          <motion.div
            onClick={e => e.stopPropagation()}
            variants={modalVariants as any}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative"
            style={{ willChange: 'transform, opacity' }} // Performance hint
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
