'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/lib/store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme from system preference if not set
    if (typeof window !== 'undefined') {
      // Check if zustand has already loaded a theme from localStorage
      const zustandState = localStorage.getItem('portfolio-theme');

      if (zustandState) {
        try {
          const parsedState = JSON.parse(zustandState);
          if (parsedState?.state?.theme) {
            // Theme already loaded by zustand, just apply it
            const loadedTheme = parsedState.state.theme;
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(loadedTheme);
            return;
          }
        } catch {
          // localStorage may be empty or malformed — fall through to system preference
        }
      }

      // No saved theme, detect system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      const defaultTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);

      // Apply theme class immediately
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(defaultTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    // Apply theme class to document element
    if (typeof window !== 'undefined') {
      const root = document.documentElement;

      root.classList.remove('light', 'dark');

      root.classList.add(theme);
    }
  }, [theme]);

  return <>{children}</>;
}
