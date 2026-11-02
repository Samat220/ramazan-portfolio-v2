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

Single-page Next.js 15 portfolio site using App Router. `src/app/page.tsx` composes the client sections in `src/components/site/`.

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Content Data Layer

All portfolio content lives in `src/data/config.ts`: personal info, navigation links, experience, projects and skills. Projects carry `kind`, `year`, `shot`/`phone` screenshots, a stage `field` colour, and for screenshot-less projects a `figure` and line `icon`; `studioSite` and `sideProjects` are derived lists. Types are in `src/types/index.ts`. To update content, edit only the config file.

### Design System

One designed light theme (no toggle): a cream ground, ink type, a soft colour field per project, grain, and real depth from shadows, perspective and layered devices. Shared tokens and base styles are in `src/app/globals.css`; the site's own styles (devices, tactile pills, stages, grain, carousel) are in `src/app/site.css`, inside `@layer components` so Tailwind utilities still win. Fonts: Bricolage Grotesque (display), Inter (text), Geist Mono (small labels). `DESIGN.md` documents the system; `PRODUCT.md` holds product context and content rules (no Kazakh-culture imagery, no stock photos, ScoutMyRivals copy never reveals its methods).

### Modal

`ModalProvider` (`src/components/ui/modal-provider.tsx`) offers a general-purpose modal through `useModal()`. The contact form (`src/components/common/contact-form.tsx`) opens in it from the Contact section.

### Sections and motion

`src/app/page.tsx` composes the client sections in `src/components/site/`: `Nav`, `Hero` (the name with the projects floating in front as browser windows and mobile screens), `Work` (each featured project staged as desktop + mobile on its own colour field), `Studio` (the server-rack-to-controller line drawing zooms into Oina Studio on desktop), `Experience` (roles, skills, toolkit), `Carousel` (side projects on a ring you can drag to spin; each card opens `ProjectDetail`), `Contact` and `Footer`.

- Motion is Framer Motion. `MotionConfig reducedMotion="user"` wraps the page; scroll-linked values that must stay exact inside sticky stages use function transforms (`useTransform(v => ...)`), not the accelerated path.
- `SmoothScroll` adds Lenis (fine pointers only, off under reduced motion) and smooth in-page links.
- Screenshots live in `public/shots/` (desktop 2880×1800, mobile 1170×2532); line drawings are in `src/components/site/drawing.tsx`.

### API Route

`src/app/api/upload-resume/route.ts`: Authenticated endpoint for uploading resume PDFs to Vercel Blob storage. Requires `ADMIN_SECRET_KEY` env var. Admin UI at `src/app/admin/upload-resume/`.

### Key Libraries

- `cn()` utility (`src/lib/utils.ts`): Combines `clsx` + `tailwind-merge` for conditional class names
- CVA (class-variance-authority): Component variant definitions
- Tailwind CSS v4 with `@tailwindcss/postcss`
- Fonts: Bricolage Grotesque, Inter and Geist Mono via `next/font/google`
