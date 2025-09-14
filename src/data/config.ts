import { PersonalInfo, NavLink, Experience, Project } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ramazan Samat',
  greeting: 'Hi, my name is',
  intro: 'I engineer scalable backend systems.',
  email: 'samatramazan.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/samatr',
  github: 'https://github.com/Samat220',
  resume: '/my_info/resume.pdf',
  photo: '/my_info/headshot.jpeg',
  bio: "A Software Developer specializing in building robust integrations and backend services at Movable Ink.  My work focuses on enhancing system reliability by implementing custom rate limiters, strengthening data integrity through multi-phase schema updates, and developing high-throughput gRPC services. With a Master's in Software Development from Boston University, I'm passionate about applying my skills in system design to new challenges. ",
};

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About', number: '01.' },
  { href: '#experience', label: 'Experience', number: '02.' },
  { href: '#projects', label: 'Projects', number: '03.' },
  { href: '#contact', label: 'Contact', number: '04.' },
];

export const experience: Experience[] = [
  {
    company: 'Movableink',
    companyUrl: 'https://movableink.com/',
    role: 'Software Developer',
    period: 'Jan 2024 - Sep 2025',
    description: [
      'Reduced API request bursts and prevented over-limit errors by 30% by integrating a custom rate limiter at the SDK level for Oracle.',
      'Strengthened data integrity across 20+ email service provider integrations by retiring fragile legacy name references and executing a multi-phase schema update.',
      'Enhanced the efficiency and reliability of internal microservice communication by developing and maintaining high-throughput gRPC-based services.',
      'Implemented real-time data processing pipelines handling 10M+ requests per hour.',
      'Increased team development velocity by leading the adoption and integration of AI coding tools into the engineering workflow.',
      'Wrote documentation for best practices for the django migrations, improving team onboarding and knowledge sharing.',
    ],
    skills: [
      'Python',
      'Django',
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
    companyUrl: 'https://lucky.finance/',
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
      'FastAPI',
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
      'A full-stack dashboard designed to streamline the job search process. This tool centralizes application tracking and provides data-driven insights through visualizations. Its core feature is an automated email parsing pipeline using Celery and Redis that ingests and categorizes new applications and interview requests in real-time.',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'Docker'],
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
      "A web app built to solve the endless debate of 'what to watch or play next.' Users can catalog their media into filterable lists, and the app's centerpiece is an interactive spinning wheel that randomly selects a choice, making decisions fun and easy.",
    technologies: ['Python', 'Kafka', 'AWS Lambda', 'DynamoDB', 'Terraform'],
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
  'Flask',
  'SQL (PostgreSQL)',
  'NoSQL (Redis)',
  'AWS',
  'Docker',
  'Kubernetes',
  'Terraform',
  'CI/CD',
  'RabbitMQ',
];

export const mlSkills: string[] = [
  'scikit-learn',
  'Pandas',
  'NumPy',
  'TensorFlow',
  'PyTorch',
  'Jupyter Notebooks',
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
  image: '/og-image.jpg', // Add your OG image
};
