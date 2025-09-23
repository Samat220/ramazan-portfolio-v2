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
  bio: 'A Software Developer specializing in Python, with a proven record of building high-performance backend services and ensuring data integrity for millions of users. My background in economics and expertise in backend engineering drive my passion for solving complex challenges in fintech and machine learning.',
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
    role: 'Software Developer II',
    period: 'Jan 2024 - Present',
    description: [
      'Re-architected a distributed Celery workflow to resolve a critical race condition, eliminating production exceptions and on-call alerts by implementing a state-aware monitoring task that ensured data consistency between the database and third-party APIs during concurrent operations.',
      'Redesigned Celery monitoring to align microservice states with the Django model, streamlining web app and microservice synchronization reducing "invalid status" alerts and on-call pages by over 90%.',
      'Delivered an end-to-end migration from name-based to ID-based identifiers for a core feature, reducing configuration errors by 90%. This effort involved deprecating legacy fields, implementing GraphQL mutations and resolvers, executing data migrations, and refactoring the React/MUI front end.',
      'Architected and implemented a unified protobuf schema to consolidate disparate ESP-specific definitions, enabling scalable, multi-ESP campaign message generation.',
      'Enhanced the efficiency and reliability of internal microservice communication by developing and maintaining high-throughput gRPC-based services.',
      'Increased team development velocity by leading the adoption and integration of AI coding tools into the engineering workflow.',
    ],
    skills: [
      'Python',
      'Django',
      'FastAPI',
      'Podman',
      'Redis',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Microservices',
      'API Design',
    ],
  },
  {
    company: 'Lucky Financial',
    companyUrl: 'https://thelucky.app/',
    role: 'Software Developer',
    period: 'Dec 2022 - Oct 2023',
    description: [
      'Worked on core features for a fintech application, focusing on payment processing and data security.',
      'Implemented new third-party API integrations for financial data aggregation.',
      'Wrote comprehensive unit and integration tests, increasing code coverage by 15%.',
      'Developed secure authentication systems compliant with financial industry standards.',
      'Optimized database queries resulting in 40% faster transaction processing.',
      'Significantly improved the application’s security posture by revamping the user authentication flow to use JWTs and implementing Two-Factor Authentication (2FA).',
    ],
    skills: [
      'React',
      'TypeScript',
      'Python',
      'Node.js',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Docker',
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
  'Django',
  'FastAPI',
  'Flask',
  'REST APIs',
  'gRPC',
  'Protobuf',
  'WebSockets',
  'SQL (PostgreSQL)',
  'SQLAlchemy',
  'BigQuery',
  'Docker',
  'CI/CD',
  'NoSQL (Redis)',
];

export const mlSkills: string[] = [
  'PyTorch',
  'TensorFlow',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Jupyter Notebooks',
  'LLM',
];

// Site metadata
export const siteMetadata = {
  title: 'Ramazan Samat - Software Engineer',
  description:
    'Backend-focused Software Engineer with expertise in Python, Django, and Machine Learning. Building scalable applications and data-driven solutions.',
  url: 'https://your-domain.com', // Replace with your domain
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
