export interface PersonalInfo {
  name: string;
  greeting: string;
  intro: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
  photo: string;
  bio: string;
}

export interface NavLink {
  href: string;
  label: string;
  number: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface ProjectScreenshots {
  dark: string;
  light?: string; // Optional light mode
}

export interface Project {
  featured: boolean;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string | null;
  screenshots?: ProjectScreenshots;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export interface AnimationVariant {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp';
  delay?: number;
  threshold?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
