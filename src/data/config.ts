import { PersonalInfo, NavLink, Experience, Project } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ramazan Samat',
  greeting: 'Hi, my name is',
  intro: 'I build games, products, and the systems behind them.',
  email: 'samatramazan.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/samatr',
  github: 'https://github.com/Samat220',
  resume:
    'https://oysrscezxk9outav.public.blob.vercel-storage.com/resume/ramazan_samat.pdf',
  photo: '/my_info/headshot.jpeg',
  bio: 'Founder & Creative Director of Oina Studio, an independent Canadian studio making story-driven games rooted in Kazakh mythology. Before that, five years as a backend and infrastructure engineer shipping production systems for millions of users — and I still build every day: full-stack web, native iOS, and data-driven tools.',
};

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About', number: '01.' },
  { href: '#experience', label: 'Experience', number: '02.' },
  { href: '#projects', label: 'Projects', number: '03.' },
  { href: '#contact', label: 'Contact', number: '04.' },
];

export const experience: Experience[] = [
  {
    company: 'Oina Studio',
    companyUrl: 'https://oinastudio.com/',
    role: 'Founder & Creative Director',
    period: '2026 - Present',
    description: [
      'Founded an independent Canadian game studio making premium, single-player story-driven games for PC and console, and lead creative direction on its debut title: a narrative adventure set in the mythology of the Kazakh steppe, in pre-production on Unreal Engine 5.',
      'Jury member for the GDC Awards 2027, Narrative Game of the Year.',
      'Running studio strategy and building the founding team, hiring for the Lead Developer and Lead Artist roles.',
      "Designed and built the studio's bilingual (English / Quebec French) website end to end: Next.js 16, next-intl, MDX news and careers pages, and contact, job application, and newsletter flows.",
    ],
    skills: [
      'Creative Direction',
      'Narrative Design',
      'Unreal Engine 5',
      'Studio Strategy',
      'Hiring',
      'Next.js',
      'TypeScript',
    ],
  },
  {
    company: 'Movable Ink',
    companyUrl: 'https://movableink.com/',
    role: 'Software Developer',
    period: 'Jan 2024 - Aug 2026',
    description: [
      'Eliminated 100% of race-condition production alerts by implementing per-campaign Celery locks, a state-guarded monitor that skips in-flight states, and moving state transitions into task-owned flows across Django, Celery, Prefect, and Postgres.',
      'Decreased API over-limit errors by 30% by building a Redis-backed token-bucket rate limiter at the Oracle Responsys SDK level, enforcing global request pacing across all workers with configurable burst capacity and refill rates.',
      'Reduced configuration errors by 90% by redesigning Cordial send properties from name-based to client-scoped ID-based architecture: introduced new Django models with FK references, built v2 GraphQL mutations/resolvers, executed zero-downtime data migrations, and refactored the React/MUI front end.',
      'Integrated ML recommendation system with ESP APIs (Adobe, Salesforce, Epsilon), enabling personalized email content delivery based on user demographics, location, and device features - serving predictions to millions of email recipients.',
      'Built unified Protobuf schema for ML feature payloads across ESPs, standardizing how user signals flow from recommendation models to email personalization endpoints via gRPC services.',
      "Built environment-aware ESP client factory for Adobe Campaign, Salesforce, and Zeta SDKs with centralized credential injection and mock client returns for non-prod - solved Adobe's eager SOAP login side-effect via targeted monkeypatch, eliminating CI flakiness.",
    ],
    skills: [
      'Python',
      'Django',
      'FastAPI',
      'Celery',
      'gRPC',
      'Protobuf',
      'GraphQL',
      'React',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
      'Microservices',
      'API Design',
    ],
  },
  {
    company: 'Lucky Financial',
    companyUrl: 'https://thelucky.app/',
    role: 'Software Engineer',
    period: 'Dec 2021 - Oct 2023',
    description: [
      'Scaled user data storage to 10M+ users by designing a PostgreSQL schema with table partitioning by registration date, adding composite indexes on frequently queried fields, and optimizing critical authentication queries from 2s to <100ms.',
      'Built user authentication APIs by implementing JWT access/refresh token flow, bcrypt password hashing with configurable work factor, and IP-based rate limiting using NestJS and Docker.',
      'Improved system modularity by extracting the FAQ feature into a standalone NestJS microservice with REST endpoints, defining OpenAPI contracts, and deploying via Docker Compose with independent scaling.',
    ],
    skills: [
      'NestJS',
      'TypeScript',
      'React',
      'Python',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Docker',
      'Microservices',
      'REST APIs',
      'JWT',
      'Tailwind CSS',
    ],
  },
];

export const projects: Project[] = [
  {
    featured: true,
    title: 'ScoutMyRivals',
    description:
      'A Marvel Rivals companion that tells you which heroes to ban based on the players in your lobby, re-ranking instantly as the real bans land. It follows a ranked match from queue to result, with a ban board readable in one glance during the ban phase, and adds season meta, team comp, and matchup reports for between games. Ships as a web app and a native SwiftUI iOS app on one shared, typed API.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Preact', 'SwiftUI'],
    liveUrl: 'https://scoutmyrivals.com/',
  },
  {
    featured: true,
    title: 'Oina Studio',
    description:
      'The website for my game studio. Bilingual English and Quebec French with next-intl, MDX news and careers pages kept in sync with the hiring docs by a drift check, contact and job applications delivered through Resend, and a double opt-in newsletter. A dark, type-led brand with a scroll-driven statement on the home page.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'next-intl',
      'MDX',
      'Resend',
      'Framer Motion',
    ],
    liveUrl: 'https://oinastudio.com/',
    screenshots: { dark: '/projects/oina_studio.webp' },
  },
  {
    featured: true,
    title: 'ZealPower',
    description:
      'A production marketing site for ZealPower, an open data layer for grid connectivity, with a built-in admin CMS so the CEO can update copy, images, and stats without code changes. Magic-link login with TOTP 2FA, a schema-driven editor for each section, an audit log of every admin write, and a contact API protected by Cloudflare Turnstile, a honeypot, and Upstash rate limiting.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Postgres',
      'Drizzle ORM',
      'Upstash',
      'Resend',
    ],
    liveUrl: 'https://zealpower-website.vercel.app/',
    screenshots: { dark: '/projects/zealpower.webp' },
  },
  {
    featured: true,
    title: 'KESH',
    description:
      'An editorial site and shop for a premium denim brand. Collections and lookbooks are managed in an embedded Sanity Studio and refreshed on publish through webhook-driven revalidation, while the shop runs on the Shopify Storefront API with hosted checkout. Every page falls back to built-in content, so the CMS can be adopted gradually.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Sanity CMS',
      'Shopify',
      'Tailwind',
    ],
    liveUrl: 'https://kesh-three.vercel.app/',
    screenshots: { dark: '/projects/kesh.webp' },
  },
  {
    featured: false,
    title: 'Reading Light - iPhone Duo Lamp',
    description:
      'A nightstand lamp for the foldable iPhone: the hinge sensor is the dimmer, and a haptic warmth dial with detents and inertia runs from daylight down to a night-vision red. Includes a wind-down timer with animated countdowns, a sunrise wake-up, and Shortcuts, Siri, and Control Center actions.',
    technologies: ['Swift', 'SwiftUI', 'App Intents', 'Core Haptics'],
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Marathon Theme for Omarchy',
    description:
      "Dark and light desktop themes for the Omarchy Linux distribution, inspired by Bungie's Marathon (2026). Restyles the terminal, editor, btop, Waybar, Hyprland, lock screen, and icons, with original wallpapers and a two-command install.",
    technologies: ['Hyprland', 'Shell', 'Neovim', 'Waybar'],
    githubUrl: 'https://github.com/Samat220/omarchy-marathon-theme',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Omarchy Link Router',
    description:
      "Makes links clicked inside Omarchy's Chromium web apps open in the system default browser. A Manifest V3 extension catches the new tab and hands the URL to a small native messaging host, while OAuth popups stay inside the web app so logins keep working.",
    technologies: ['JavaScript', 'Chrome Extensions', 'Python', 'Linux'],
    githubUrl: 'https://github.com/Samat220/omarchy-link-router',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Shinkansen Passenger Satisfaction Predictor',
    description:
      'Achieved 95.78% test accuracy (2nd place at MIT ML Hackathon, 0.07% behind 1st) by building a 3-model stacking ensemble with Optuna-tuned LightGBM, XGBoost, and CatBoost. Engineered 51 features from 24 raw columns including survey aggregates, delay ratios, and categorical interactions.',
    technologies: ['Python', 'LightGBM', 'XGBoost', 'CatBoost', 'Optuna'],
    githubUrl: 'https://github.com/Samat220/Shinkansen-Passenger-Satisfaction',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'AI Powered Job Application Tracker',
    description:
      'A full-stack dashboard that centralizes application tracking and uses the Google Gemini API to tailor resumes and cover letters to each job description, automating the most time-consuming part of a job search.',
    technologies: ['TypeScript', 'Firebase', 'SQL', 'Gemini', 'LLM'],
    liveUrl: 'https://job-search-dashboard-2e24c.web.app/',
  },
  {
    featured: false,
    title: 'Media Picker & Spin Wheel',
    description:
      "A web app built to solve the endless debate of 'what to watch or play next?' Users catalog their media into filterable lists, and an interactive spinning wheel randomly picks the winner.",
    technologies: ['FastAPI', 'SQLite', 'Tailwind', 'Python'],
    githubUrl: 'https://github.com/Samat220/Choose-for-me',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Amazon Product Recommendation System',
    description:
      'Built collaborative filtering system using user-user and item-item KNN with cosine/MSD similarity and SVD matrix factorization on Amazon product ratings dataset. Improved model accuracy by 4.8% through GridSearchCV hyperparameter tuning.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Surprise'],
    githubUrl: 'https://github.com/Samat220/recommendation_system',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Marketing Event Ingestion API',
    description:
      'A high-performance API designed to receive, validate, and store marketing event data. Built with FastAPI, this service converts timestamps to UTC, and ensures data integrity using Pydantic.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'Pytest'],
    liveUrl: null,
  },
  {
    featured: false,
    title: 'GraphQL API with NestJS',
    description:
      'A robust GraphQL server for a product and user management system. The project emphasizes clean architecture, dependency injection, and comprehensive unit testing with Jest.',
    technologies: ['NestJS', 'TypeScript', 'GraphQL', 'Jest', 'Node.js'],
    githubUrl: 'https://github.com/Samat220/Plotly-assignment',
    liveUrl: null,
  },
];

export const backendSkills: string[] = [
  'Python',
  'TypeScript/JavaScript',
  'SQL',
  'Swift',
  'Java',
  'Django',
  'FastAPI',
  'NestJS',
  'Node.js',
  'Next.js',
  'React',
  'SwiftUI',
  'Celery',
  'gRPC',
  'Protobuf',
  'GraphQL',
  'REST APIs',
  'WebSockets',
  'PostgreSQL',
  'Drizzle ORM',
  'SQLAlchemy',
  'Redis',
  'BigQuery',
  'Docker',
  'Kubernetes',
  'AWS',
  'GCP',
  'Vercel',
  'Cloudflare',
  'GitHub Actions CI/CD',
];

export const mlSkills: string[] = [
  'PyTorch',
  'TensorFlow',
  'Scikit-learn',
  'LightGBM',
  'XGBoost',
  'CatBoost',
  'Optuna',
  'Pandas',
  'NumPy',
  'SciPy',
  'Surprise',
  'Jupyter Notebooks',
  'LLM APIs (Claude, Gemini)',
];

// Site metadata
export const siteMetadata = {
  title: 'Ramazan Samat - Founder & Engineer',
  description:
    'Founder & Creative Director of Oina Studio and a backend and full-stack engineer. Building story-driven games, products, and the systems behind them.',
  url: 'https://www.ramazansamat.dev/',
  author: 'Ramazan Samat',
  keywords: [
    'Ramazan Samat',
    'Oina Studio',
    'Game Studio Founder',
    'Creative Director',
    'Software Engineer',
    'Backend Developer',
    'Full Stack',
    'Python',
    'TypeScript',
    'Machine Learning',
  ],
  image: '/og-image.jpg',
};
