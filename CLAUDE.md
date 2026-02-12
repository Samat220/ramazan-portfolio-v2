# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev              # Start dev server with Turbopack (localhost:3000)
npm run build            # Production build with Turbopack
npm run lint             # Auto-fix ESLint issues
npm run lint:check       # Check ESLint issues without fixing
npm run format           # Auto-format with Prettier
npm run format:check     # Check Prettier formatting without fixing
npm run type-check       # TypeScript type checking (tsc --noEmit)
```

Pre-commit hook runs `lint-staged` which auto-fixes Prettier and ESLint on staged files. CI runs `type-check`, `lint:check`, `format:check`, and `build` — all four must pass.

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.

## Architecture Overview

Single-page Next.js 15 portfolio site using App Router. The entire page is a client component (`src/app/page.tsx` has `'use client'`) that renders all sections sequentially: Hero, About, Experience, Projects, Contact.

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Content Data Layer

All portfolio content lives in `src/data/config.ts` — personal info, navigation links, work experience, projects, and skills. Types for this data are defined in `src/types/index.ts`. To update portfolio content, edit only this config file.

### Theming System

Theme is managed by a Zustand store (`useThemeStore` in `src/lib/store.ts`) persisted to localStorage under key `portfolio-theme`. The `ThemeProvider` (`src/providers/theme-provider.tsx`) applies `.light` or `.dark` class to `<html>`, which swaps CSS custom properties defined in `src/app/globals.css`. Default theme is `dark` with system preference detection on first visit.

All design tokens (colors, gradients, shadows, glass effects) are CSS custom properties in `:root`, `.light`, and `.dark` selectors in `globals.css`.

### Dual Modal System

1. **Zustand store** (`useModalStore` in `src/lib/store.ts`): Manages contact form and experience detail modals with dedicated open/close actions
2. **Context-based** (`ModalProvider` in `src/components/ui/modal-provider.tsx`): General-purpose modal via `useModal()` hook that accepts arbitrary ReactNode content

### Animation System

- Framer Motion for page transitions and element animations
- Three custom hooks in `src/hooks/`:
  - `useScrollAnimation`: Scroll-progress-based animations
  - `useScrollReveal`: Intersection Observer reveals with 5 types (fadeUp, fadeIn, slideLeft, slideRight, scaleUp)
  - `useSmoothScroll`: Smooth anchor navigation
- Additional UI hooks in `src/hooks/ui/`: body scroll lock, navigation handlers, scroll detection
- Animation constants (variants, durations) defined in `src/lib/constants.ts`
- `globals.css` contains extensive CSS animations, glass morphism utilities, and interactive effects (tilt cards, spotlight, magnetic buttons)

### Interactive Component Patterns

Located in `src/components/common/`:

- TiltCard, SpotlightCard, EnhancedCard: Mouse-tracking 3D/lighting effects
- MagneticButton: Magnetic hover effect
- ConstellationBackground, BackgroundHighlight: Animated backgrounds
- Loading: Full-screen animated loader with `usePageLoader`

### API Route

`src/app/api/upload-resume/route.ts`: Authenticated endpoint for uploading resume PDFs to Vercel Blob storage. Requires `ADMIN_SECRET_KEY` env var. Admin UI at `src/app/admin/upload-resume/`.

### Key Libraries

- `cn()` utility (`src/lib/utils.ts`): Combines `clsx` + `tailwind-merge` for conditional class names
- CVA (class-variance-authority): Component variant definitions
- Tailwind CSS v4 with `@tailwindcss/postcss`
- Fonts: Inter (sans) and Fira Code (mono) via `next/font/google`
