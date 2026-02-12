import { PersonalInfo, NavLink, Experience, Project } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ramazan Samat',
  greeting: 'Hi, my name is',
  intro: 'I bring data-driven solutions to life.',
  email: 'samatramazan.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/samatr',
  github: 'https://github.com/Samat220',
  resume:
    'https://oysrscezxk9outav.public.blob.vercel-storage.com/resume/ramazan_samat.pdf',
  photo: '/my_info/headshot.jpeg',
  bio: 'A Software Engineer specializing in Python, with a proven record of building high-performance backend services and data-driven solutions for millions of users. My expertise in backend engineering and machine learning drives my passion for solving complex challenges in fintech and AI.',
};

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About', number: '01.' },
  { href: '#experience', label: 'Experience', number: '02.' },
  { href: '#projects', label: 'Projects', number: '03.' },
  { href: '#contact', label: 'Contact', number: '04.' },
];

export const experience: Experience[] = [
  {
    company: 'Movable Ink',
    companyUrl: 'https://movableink.com/',
    role: 'Software Developer',
    period: 'Jan 2024 - Present',
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
    title: 'AI Powered Job Application Tracker',
    description:
      'A full-stack dashboard I built to streamline the job search by automating the most time-consuming part: tailoring resumes and cover letters. This tool centralizes application tracking and leverages the Google Gemini API to intelligently customize application documents for each specific job description.',
    technologies: ['TypeScript', 'Firebase', 'SQL', 'Gemini', 'LLM', 'AI/ML'],
    githubUrl: 'https://github.com/Samat220/job-search-dashboard',
    liveUrl: 'https://job-search-dashboard-2e24c.web.app/',
    screenshots: {
      dark: '/featured_project_1/job_board_dark_mode.png',
      light: '/featured_project_1/job_board_light_mode.png',
    },
  },
  {
    featured: true,
    title: 'Media Picker & Spin Wheel',
    description:
      "A web app built to solve the endless debate of 'what to watch or play next?' Users can catalog their media into filterable lists, and the app's centerpiece is an interactive spinning wheel that randomly selects a choice, making decisions fun and easy.",
    technologies: ['FastAPI', 'SQLite', 'Tailwind', 'Python'],
    githubUrl: 'https://github.com/Samat220/Choose-for-me',
    liveUrl: null, // Replace
    screenshots: {
      dark: '/featured_project_2/media_picker_dark_mode.png',
      light: '/featured_project_2/media_picker_light_mode.png',
    },
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
    githubUrl: 'https://github.com/Samat220/event_integration_hub',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Restaurant Booking API',
    description:
      'A Django application provides a complete backend for a restaurant. It features menu and table booking APIs, and user registration with token-based authentication.',
    technologies: ['Python', 'Django', 'Django', 'RestAPI', 'SQLite'],
    githubUrl: 'https://github.com/Samat220/LittleLemonAPI',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Clima - iOS Weather App',
    description:
      "A dark-mode enabled iOS weather app developed in Swift. It provides real-time weather data based on the user's current GPS location or a manual city search, utilizing URLSession for networking and Core Location for GPS data.",
    technologies: ['Swift', 'UIKit', 'Core Location', 'URLSession'],
    githubUrl: 'https://github.com/Samat220/Clima-iOS13',
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Web Blog Website',
    description:
      'A web application that allows users to create, edit, and manage blog posts with secure user authentication and a clean, responsive interface.',
    technologies: ['Node.js', 'EJS', 'OAuth2', 'React'],
    githubUrl: 'https://github.com/Samat220/Blog-Website',
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
  'SQL',
  'TypeScript/JavaScript',
  'Java',
  'Django',
  'NestJS',
  'FastAPI',
  'Flask',
  'React',
  'Celery',
  'gRPC',
  'Protobuf',
  'GraphQL',
  'REST APIs',
  'WebSockets',
  'Docker',
  'Kubernetes',
  'SQL (PostgreSQL)',
  'SQLAlchemy',
  'NoSQL (Redis)',
  'BigQuery',
  'AWS',
  'GCP',
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
  'LLM',
];

// Site metadata
export const siteMetadata = {
  title: 'Ramazan Samat - Software Engineer',
  description:
    'Backend-focused Software Engineer with expertise in Python, Django, and Machine Learning. Building scalable applications and data-driven solutions.',
  url: 'https://www.ramazansamat.dev/',
  author: 'Ramazan Samat',
  keywords: [
    'Software Engineer',
    'Backend Developer',
    'Python',
    'Django',
    'Machine Learning',
    'Full Stack',
  ],
  image: '/og-image.jpg',
};
