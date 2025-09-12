import { PersonalInfo, NavLink, Experience, Project } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ramazan Samat',
  greeting: 'Hi, my name is',
  intro: 'I build things for the web.',
  email: 'your.email@example.com', // Replace with your email
  linkedin: 'https://linkedin.com/in/yourprofile', // Replace with your LinkedIn
  github: 'https://github.com/yourprofile', // Replace with your GitHub
  bio: 'Backend-focused Software Engineer with a passion for building scalable, efficient applications. Eager to leverage a strong foundation in Python and system design to transition into the field of Machine Learning and contribute to intelligent, data-driven solutions.',
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
      'Developed and maintained backend services for a marketing personalization platform, serving millions of requests per day.',
      'Key achievements include improving API response times by 20% through query optimization and caching strategies.',
      'Contributed to a major microservices architecture migration, enhancing system scalability and maintainability.',
      'Implemented real-time data processing pipelines handling 10M+ requests per hour.',
      'Collaborated with cross-functional teams to deliver features that increased customer engagement by 35%.',
      'Mentored junior developers and conducted code reviews to maintain high code quality standards.',
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
      'Built monitoring and alerting systems for critical financial operations.',
    ],
  },
];

export const projects: Project[] = [
  {
    featured: true,
    title: 'Project Alpha: ML-Powered Recommendation Engine',
    description:
      'A proof-of-concept API that provides personalized content recommendations. It explores collaborative filtering and content-based filtering algorithms to deliver relevant results. Built with a scalable microservices architecture in mind.',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'Docker'],
    githubUrl: 'https://github.com/yourprofile/project-alpha', // Replace
    liveUrl: 'https://project-alpha.yourdomain.com', // Replace
    screenshotUrl:
      'https://placehold.co/600x360/1E293B/38BDF8?text=Project+Alpha',
  },
  {
    featured: true,
    title: 'Project Beta: Real-Time Data Processing Pipeline',
    description:
      "A scalable data pipeline that ingests, processes, and stores streaming data from multiple sources. Deployed on AWS using serverless technologies to ensure high availability and cost-efficiency. It's designed to handle thousands of events per second.",
    technologies: ['Python', 'Kafka', 'AWS Lambda', 'DynamoDB', 'Terraform'],
    githubUrl: 'https://github.com/yourprofile/project-beta', // Replace
    liveUrl: 'https://project-beta.yourdomain.com', // Replace
    screenshotUrl:
      'https://placehold.co/600x360/1E293B/38BDF8?text=Project+Beta',
  },
  {
    featured: false,
    title: 'Project Gamma: Distributed Task Queue',
    description:
      'A backend system for managing and executing asynchronous tasks using Celery and RabbitMQ.',
    technologies: ['Python', 'Django', 'Celery', 'RabbitMQ'],
    githubUrl: 'https://github.com/yourprofile/project-gamma', // Replace
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Project Delta: API Performance Monitoring',
    description:
      'A utility library for Flask applications to monitor API endpoint performance and log metrics to Prometheus.',
    technologies: ['Python', 'Flask', 'Prometheus'],
    githubUrl: 'https://github.com/yourprofile/project-delta', // Replace
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Project Epsilon: CLI Tool for AWS S3',
    description:
      'A command-line interface tool to simplify interactions with AWS S3 for uploading and managing files.',
    technologies: ['Python', 'Boto3', 'Click'],
    githubUrl: 'https://github.com/yourprofile/project-epsilon', // Replace
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Project Zeta: GraphQL API with Django',
    description:
      'An implementation of a GraphQL API layer for a traditional Django REST Framework application.',
    technologies: ['Python', 'Django', 'Graphene'],
    githubUrl: 'https://github.com/yourprofile/project-zeta', // Replace
    liveUrl: null,
  },
  {
    featured: false,
    title: 'Project Eta: Secure User Authentication Service',
    description:
      'A microservice handling user registration, login, and JWT-based authentication for other services.',
    technologies: ['Python', 'FastAPI', 'OAuth2'],
    githubUrl: 'https://github.com/yourprofile/project-eta', // Replace
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
