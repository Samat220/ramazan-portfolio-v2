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
  bio: 'Founder & Creative Director of Oina Studio, an independent Canadian video game studio making single-player, story-driven games for PC and console. Before that, five years as a backend and infrastructure engineer shipping production systems for millions of users. I still build every day: full-stack web, native iOS, and data-driven tools.',
};

export const navLinks: NavLink[] = [
  { href: '#work', label: 'Work' },
  { href: '#studio', label: 'Studio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const experience: Experience[] = [
  {
    company: 'Oina Studio',
    companyUrl: 'https://oinastudio.com/',
    role: 'Founder & Creative Director',
    period: '2026 - Present',
    description: [
      'Founded an independent Canadian game studio making premium, single-player story-driven games for PC and console, and lead creative direction on its debut title, a narrative adventure in pre-production on Unreal Engine 5.',
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
  // Featured: staged as desktop + mobile on their own colour field
  {
    featured: true,
    title: 'ScoutMyRivals',
    kind: 'Web + iOS app',
    year: '2026',
    description:
      'A Marvel Rivals companion that tells you which heroes to ban based on the players in your lobby, re-ranking instantly as the real bans land. It follows a ranked match from queue to result with a ban board readable in one glance, adds season meta, team comp and matchup reports for between games, and ships as a web app and a native SwiftUI iOS app on one shared, typed API.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Preact', 'SwiftUI'],
    liveUrl: 'https://app.scoutmyrivals.com/',
    shot: '/shots/scoutmyrivals.webp',
    phone: '/shots/scoutmyrivals_phone.webp',
    field: '#c9c6f2',
  },
  {
    featured: true,
    title: 'ZealPower',
    kind: 'Marketing site + CMS',
    year: '2026',
    description:
      'A production marketing site for ZealPower, an open data layer for grid connectivity, with a built-in admin CMS so the CEO can update copy, images and stats without code. Magic-link login with TOTP 2FA, a schema-driven editor for each section, an audit log of every admin write, and a contact API protected by Cloudflare Turnstile, a honeypot and Upstash rate limiting.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Postgres',
      'Drizzle ORM',
      'Upstash',
      'Resend',
    ],
    liveUrl: 'https://zealpower-website.vercel.app/',
    shot: '/shots/zealpower.webp',
    phone: '/shots/zealpower_phone.webp',
    field: '#cfdcf7',
  },
  {
    featured: true,
    title: 'KESH',
    kind: 'Brand site + shop',
    year: '2026',
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
    shot: '/shots/kesh.webp',
    phone: '/shots/kesh_phone.webp',
    field: '#d9d3cb',
  },
  // The studio's own site is shown in the Oina Studio chapter
  {
    featured: false,
    title: 'Oina Studio website',
    kind: 'Studio website',
    year: '2026',
    description:
      'The bilingual site for my game studio: English and Quebec French with next-intl, MDX news and careers pages kept in sync with the hiring docs, contact and job applications through Resend, and a double opt-in newsletter.',
    technologies: ['Next.js', 'TypeScript', 'next-intl', 'MDX', 'Resend'],
    liveUrl: 'https://oinastudio.com/',
    shot: '/shots/oina.webp',
    phone: '/shots/oina_phone.webp',
  },
  // Also built: the carousel
  {
    featured: false,
    title: 'Reading Light',
    kind: 'iOS lamp app, hinge as dimmer',
    year: '2026',
    figure: '1800 K',
    icon: 'lamp',
    live: 'warmth-dial',
    description:
      'A nightstand lamp for the foldable iPhone. Set it down half-open and the inner display becomes a soft reading light. The hinge is the dimmer: close it a little to dim, open it to brighten. A physical-feeling warmth dial runs from 6500 K daylight to 1800 K candlelight, then past it to Ember, a deep red that spares night vision. Includes a wind-down timer, a sunrise wake-up, and Shortcuts, Siri and Control Center actions.',
    technologies: ['Swift', 'SwiftUI', 'App Intents', 'Core Haptics'],
  },
  {
    featured: false,
    title: 'Marathon Theme',
    kind: 'Omarchy desktop theme',
    year: '2026',
    shot: '/projects/marathon_preview.webp',
    description:
      "Dark and light desktop themes for the Omarchy Linux distribution, inspired by Bungie's Marathon (2026). They restyle the terminal, editor, btop, Waybar, Hyprland, the lock screen and icons, with original wallpapers and a two-command install. My most-starred open-source work.",
    technologies: ['Hyprland', 'Shell', 'Neovim', 'Waybar'],
    githubUrl: 'https://github.com/Samat220/omarchy-marathon-theme',
    extraLinks: [
      {
        label: 'Light theme',
        href: 'https://github.com/Samat220/omarchy-marathon-light-theme',
      },
    ],
  },
  {
    featured: false,
    title: 'Job Application Tracker',
    kind: 'Gemini-powered dashboard',
    year: '2025',
    shot: '/shots/jobtracker.webp',
    description:
      'A full-stack dashboard that keeps a job search in one place and uses the Gemini API to tailor a resume and cover letter to each job description, automating the slowest part of applying.',
    technologies: ['TypeScript', 'Firebase', 'SQL', 'Gemini'],
    liveUrl: 'https://job-search-dashboard-2e24c.web.app/',
  },
  {
    featured: false,
    title: 'Shinkansen Predictor',
    kind: '2nd place, MIT ML hackathon',
    year: '2026',
    figure: '95.78%',
    icon: 'chart',
    description:
      'Second place at the MIT machine learning hackathon with 95.78% test accuracy, 0.07% behind first. A three-model stacking ensemble of Optuna-tuned LightGBM, XGBoost and CatBoost, trained on 51 features engineered from 24 raw columns.',
    technologies: ['Python', 'LightGBM', 'XGBoost', 'CatBoost', 'Optuna'],
    githubUrl: 'https://github.com/Samat220/Shinkansen-Passenger-Satisfaction',
  },
  {
    featured: false,
    title: 'Media Picker',
    kind: 'Spin-the-wheel backlog picker',
    year: '2025',
    shot: '/shots/mediapicker.webp',
    description:
      'Settles "what should I watch or play next?" Catalogue your backlog into filterable lists, then spin an interactive wheel to pick the winner.',
    technologies: ['FastAPI', 'SQLite', 'Tailwind', 'Python'],
    githubUrl: 'https://github.com/Samat220/Choose-for-me',
  },
  {
    featured: false,
    title: 'Omarchy Link Router',
    kind: 'Chromium extension + native host',
    year: '2026',
    figure: 'MV3',
    icon: 'route',
    description:
      "Makes links clicked inside Omarchy's Chromium web apps open in your default browser. A Manifest V3 extension catches the new tab and hands the URL to a small native messaging host, while sign-in pop-ups stay in place so logins keep working.",
    technologies: ['JavaScript', 'Chrome Extensions', 'Python', 'Linux'],
    githubUrl: 'https://github.com/Samat220/omarchy-link-router',
  },
  {
    featured: false,
    title: 'Amazon Recommender',
    kind: 'Collaborative filtering, SVD',
    year: '2026',
    figure: '+4.8%',
    icon: 'graph',
    description:
      'Collaborative filtering on Amazon product ratings: user-user and item-item KNN with cosine and MSD similarity, plus SVD matrix factorisation. Grid-search tuning improved accuracy by 4.8%.',
    technologies: ['Python', 'scikit-learn', 'pandas', 'Surprise'],
    githubUrl: 'https://github.com/Samat220/recommendation_system',
  },
  {
    featured: false,
    title: 'Event Ingestion API',
    kind: 'Marketing events, validated',
    year: '2025',
    figure: 'UTC',
    icon: 'stack',
    description:
      'A high-performance API that receives, validates and stores marketing event data. Built with FastAPI and Pydantic, it normalises every timestamp to UTC and rejects malformed events before they reach storage.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'Pytest'],
  },
  {
    featured: false,
    title: 'GraphQL API with NestJS',
    kind: 'Products and users, tested',
    year: '2023',
    figure: 'GraphQL',
    icon: 'hex',
    description:
      'A GraphQL server for a product and user management system, built around clean architecture and dependency injection, with comprehensive unit tests in Jest.',
    technologies: ['NestJS', 'TypeScript', 'GraphQL', 'Jest', 'Node.js'],
    githubUrl: 'https://github.com/Samat220/Plotly-assignment',
  },
];

/** The studio's own website, shown in the Oina Studio chapter. */
export const studioSite = projects.find(
  p => p.title === 'Oina Studio website'
)!;
/** Side projects for the carousel. */
export const sideProjects = projects.filter(
  p => !p.featured && p !== studioSite
);

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
