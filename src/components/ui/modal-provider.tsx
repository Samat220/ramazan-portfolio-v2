'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Modal } from './modal';

interface ModalContextType {
  openModal: (content: ReactNode, className?: string) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [className, setClassName] = useState<string>('');

  const openModal = (modalContent: ReactNode, modalClassName = '') => {
    setContent(modalContent);
    setClassName(modalClassName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Clear content after animation
    setTimeout(() => {
      setContent(null);
      setClassName('');
    }, 200);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal} className={className}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}