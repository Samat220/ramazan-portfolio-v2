# 🚀 Ramazan Samat Portfolio Website

This is my portfolio website built with **Next.js** and **TypeScript**, featuring modern animations and a clean design. This portfolio showcases professional experience, projects, and skills.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Features

- **⚡ Next.js 15** with App Router and Turbopack for lightning-fast development
- **🎨 Modern UI/UX** with Tailwind CSS v4 and custom animations
- **📱 Fully Responsive** design that works on all devices
- **🌙 Dark/Light Theme** with system preference detection
- **🎭 Advanced Animations** using Framer Motion
- **📧 Contact Form** with form validation
- **🔍 SEO Optimized** with proper metadata and structured data
- **♿ Accessible** with ARIA labels and keyboard navigation
- **🚀 Performance Optimized** with Next.js Image optimization
- **🔒 Type Safe** with strict TypeScript configuration
- **🧪 CI/CD Pipeline** with GitHub Actions
- **📦 Automated Deployments** to Vercel

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: Zustand with persistence
- **Icons**: Lucide React

### Development & Deployment

- **Build Tool**: Turbopack
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 🏗️ Architecture

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── common/            # Reusable components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   ├── icons/             # Custom icons
│   └── ui/                # Base UI components
├── data/
│   └── config.ts          # Site configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and stores
├── providers/             # React context providers
└── types/                 # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Samat220/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

### Development

```bash
npm run dev              # Start development server with Turbopack
npm start               # Start production server
```

### Build & Production

```bash
npm run build           # Build for production
```

### Code Quality

```bash
npm run lint            # Auto-fix ESLint issues
npm run lint:check      # Check ESLint issues without fixing
npm run format          # Auto-format code with Prettier
npm run format:check    # Check formatting without fixing
npm run type-check      # Run TypeScript type checking
```

### Git Hooks

```bash
npm run prepare         # Setup Husky git hooks
```

## 🎨 Customization

All portfolio content is centralized in `src/data/config.ts`. Update the following sections:

- **personalInfo**: Name, bio, contact information, social links
- **experience**: Work history and achievements
- **projects**: Featured projects with descriptions and tech stack
- **skills**: Technical skills categorized by domain
- **siteMetadata**: SEO configuration

## 🔄 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow:

- **Code Quality**: TypeScript, ESLint, and Prettier checks
- **Build Verification**: Ensures the application builds successfully
- **Security Audit**: npm audit for vulnerabilities
- **Automated Deployment**: Deploys to Vercel on main branch
- **Preview Deployments**: Creates preview URLs for pull requests
- **Dependency Updates**: Dependabot for automated updates

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push to main

### Manual Deployment

```bash
npm run build
npm start
```


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Contact

**Ramazan Samat**

- 📧 Email: [samatramazan.dev@gmail.com](mailto:samatramazan.dev@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/samatr](https://linkedin.com/in/samatr)
- 🐙 GitHub: [github.com/Samat220](https://github.com/Samat220)
- 🌐 Portfolio: [Live Demo](https://portfolio-v2-samat220s-projects.vercel.app)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Vercel](https://vercel.com/) - For hosting and deployment
- [Lucide](https://lucide.dev/) - For beautiful icons

---

<div align="center">
  <p>Built with ❤️ using Next.js and TypeScript</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
