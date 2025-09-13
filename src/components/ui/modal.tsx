'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className = '' }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKey);

    // Lock scroll without jumping - preserve exact position
    scrollYRef.current = window.scrollY;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus management - focus first focusable element after a short delay
    setTimeout(() => {
      const focusableElements = document.querySelectorAll(
        '[data-modal] button, [data-modal] [href], [data-modal] input, [data-modal] select, [data-modal] textarea, [data-modal] [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      firstFocusable?.focus({ preventScroll: true });
    }, 100);

    return () => {
      window.removeEventListener('keydown', onKey);
      // Restore body overflow
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 ${className}`}
      onClick={onClose}
      data-modal
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}