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
}

export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export type LineIconKind =
  'lamp' | 'chart' | 'route' | 'graph' | 'stack' | 'hex';

export interface Project {
  featured: boolean;
  title: string;
  /** What it is, in a few words: "Web + iOS app" */
  kind: string;
  description: string;
  technologies: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string | null;
  /** Desktop screenshot (2880×1800) */
  shot?: string;
  /** Mobile screenshot (1170×2532) */
  phone?: string;
  /** Background colour of the project's stage */
  field?: string;
  /** A true figure shown when there is no screenshot */
  figure?: string;
  /** Line drawing shown when there is no screenshot */
  icon?: LineIconKind;
  /** More links beyond source and live */
  extraLinks?: ProjectLink[];
  /** An interactive demo shown in the project's detail view */
  live?: 'warmth-dial';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
