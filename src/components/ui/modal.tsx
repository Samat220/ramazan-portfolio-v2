'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const overlayVariants: Variants = {
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
};

const modalVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export function Modal({
  isOpen,
  onClose,
  children,
  className = '',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

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

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const modal = modalRef.current;
    if (!modal) return;

    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    // Focus first focusable element after animation
    const timer = setTimeout(() => {
      const firstEl = modal.querySelector<HTMLElement>(focusableSelector);
      firstEl?.focus();
    }, 100);

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = modal.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          ref={modalRef}
          className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 ${className}`}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-background/20 backdrop-blur-lg"
            style={{ willChange: 'opacity' }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
          <motion.div
            onClick={e => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative"
            style={{ willChange: 'transform, opacity' }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
