import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { THEME_STORAGE_KEY } from './constants';

interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      theme: 'dark', // Default to dark theme
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
  selectedExperience: any | null;
  isExperienceModalOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
  openExperienceModal: (experience: any) => void;
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
