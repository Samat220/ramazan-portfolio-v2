# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev              # Start development server with Turbopack
npm start               # Start production server

# Build & Production
npm run build           # Build for production with Turbopack

# Code Quality
npm run lint            # Auto-fix ESLint issues
npm run lint:check      # Check ESLint issues without fixing
npm run format          # Auto-format code with Prettier
npm run format:check    # Check Prettier formatting without fixing
npm run type-check      # Run TypeScript type checking

# Git Hooks
npm run prepare         # Setup Husky git hooks
```

## Architecture Overview

This is a **Next.js 15** portfolio website with the App Router, built using modern React patterns and TypeScript.

### Core Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: Zustand (with persistence)
- **TypeScript**: Strict mode enabled
- **Icons**: Lucide React

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── common/            # Reusable components (modals, forms, animations)
│   ├── layout/            # Layout components (header, navigation)
│   ├── sections/          # Page sections (hero, about, experience, projects, contact)
│   ├── icons/             # Custom icon components
│   └── ui/                # Base UI components (button, etc.)
├── data/
│   └── config.ts          # Site configuration and content data
├── hooks/                 # Custom React hooks
├── lib/
│   ├── store.ts           # Zustand state management
│   ├── constants.ts       # App constants
│   └── utils.ts           # Utility functions
├── providers/             # React context providers
└── types/                 # TypeScript type definitions
```

### Key Architectural Patterns

1. **Component Organization**: Components are categorized by purpose (common, layout, sections, ui)

2. **Data Management**:
   - Site content is centralized in `src/data/config.ts`
   - Global state uses Zustand with localStorage persistence
   - Theme and modal states are managed globally

3. **Animation System**:
   - Framer Motion for page transitions and scroll animations
   - Custom hooks for scroll-triggered animations (`useScrollAnimation`, `useScrollReveal`)
   - Loading states with animated transitions

4. **Styling Architecture**:
   - Tailwind CSS with custom CSS variables for theming
   - Class Variance Authority (CVA) for component variants
   - CSS-in-JS approach using Tailwind utilities

5. **Type Safety**:
   - Comprehensive TypeScript interfaces in `src/types/index.ts`
   - Strict type checking enabled

## Code Quality Setup

- **ESLint**: Next.js recommended config with auto-fixing
- **Prettier**: Code formatting with consistent style
- **Husky + lint-staged**: Pre-commit hooks for quality checks
- **TypeScript**: Strict mode for maximum type safety

## Content Management

All portfolio content is configured in `src/data/config.ts`:
- Personal information and contact details
- Navigation links with numbering
- Experience data with company details
- Project showcases with technology stacks
- Skills categorized by backend/ML focus
- SEO metadata

## Performance Considerations

- Next.js 15 with Turbopack for faster builds
- Image optimization with Next.js Image component
- Font optimization with next/font
- Bundle analysis and code splitting
- Vercel Analytics integration

## Development Notes

- Uses client-side rendering for animation-heavy components
- Theme switching with system preference detection
- Responsive design with mobile-first approach
- Accessibility considerations built into components
- SEO optimized with proper metadata and structured data