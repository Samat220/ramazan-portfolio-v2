import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { THEME_STORAGE_KEY } from './constants';
import type { Experience } from '@/types';

interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      theme: 'dark',
      setTheme: theme => set({ theme }),
      toggleTheme: () =>
        set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: THEME_STORAGE_KEY,
    }
  )
);

interface ModalState {
  isContactFormOpen: boolean;
  selectedExperience: Experience | null;
  isExperienceModalOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
  openExperienceModal: (experience: Experience) => void;
  closeExperienceModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
  isContactFormOpen: false,
  selectedExperience: null,
  isExperienceModalOpen: false,
  openContactForm: () => set({ isContactFormOpen: true }),
  closeContactForm: () => set({ isContactFormOpen: false }),
  openExperienceModal: experience =>
    set({ selectedExperience: experience, isExperienceModalOpen: true }),
  closeExperienceModal: () =>
    set({ selectedExperience: null, isExperienceModalOpen: false }),
}));
