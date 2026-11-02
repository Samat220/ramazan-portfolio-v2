# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mix of audiences, with the founder story first:

- People around Oina Studio: publishers, collaborators, possible hires and press. They check who is behind the studio and whether he can ship.
- Founders and brands who might commission a site or app, like ZealPower and KESH.
- Engineering hiring managers who want proof of senior backend and full-stack work.

Most arrive from a link (LinkedIn, GitHub, the Oina site, an email signature) and give the first screen a few seconds before deciding to scroll.

## Product Purpose

The personal site of Ramazan Samat (ramazansamat.dev). It must say who he is and what he does within five seconds: founder and creative director of Oina Studio, and an engineer with five years of backend and infrastructure work. Then it gets the visitor exploring the work. Success means the visitor scrolls into the projects. Contact and the resume are secondary actions that every audience can find.

## Positioning

An engineer turned video game studio founder who still builds his own products end to end: web, native iOS, data tools and the studio's own site. Other engineer portfolios show only engineering, and other studio founders don't ship code. The proof is the shipped work itself.

## Operating Context

- Visitors read on phones and desktops. Phone visits come mostly from social and messaging links.
- The resume is a PDF in Vercel Blob at a fixed URL, replaced through `/admin/upload-resume`.
- The site is deployed on Vercel from the `main` branch.

## Capabilities and Constraints

- Next.js 15 (App Router), React 19, Tailwind v4, TypeScript strict. CI runs `type-check`, `lint:check`, `format:check` and `build`, and all four must pass.
- All content lives in `src/data/config.ts`: personal info, experience, projects and skills.
- Contact form through Web3Forms (`NEXT_PUBLIC_WEB3FORMS_KEY`).
- Resume upload API at `src/app/api/upload-resume/route.ts`, guarded by `ADMIN_SECRET_KEY`.
- One designed light theme, no toggle (decided 2026-11-02).

## Brand Commitments

- Name: Ramazan Samat. Title: Founder & Creative Director, Oina Studio. Engineer with 5 years of backend and infrastructure experience (Movable Ink Jan 2024 – Aug 2026, Lucky Financial Dec 2021 – Oct 2023).
- Jury member, GDC Awards 2027, Narrative Game of the Year. Approved for public use.
- Oina Studio makes single-player, story-driven games for PC and console. Its debut is a narrative adventure in pre-production on Unreal Engine 5.
- The portfolio is about two things: his engineering background and his current work as a video game studio founder. Do not showcase Kazakh culture or heritage (the user decided this on 2026-11-02).

## Evidence on Hand

- Headshot: `public/my_info/headshot.jpeg`.
- Project screenshots: `public/shots/` (desktop 2880×1800 and mobile 1170×2532 for ScoutMyRivals, ZealPower, KESH, Oina Studio; desktop for the job tracker and media picker) and `public/projects/marathon_preview.webp`.
- Live sites: oinastudio.com, app.scoutmyrivals.com, zealpower-website.vercel.app, kesh-three.vercel.app.
- Real metrics from past roles are in `config.ts` (10M+ users, 30% and 90% error reductions, 100% of race-condition alerts eliminated, 2nd place at an MIT ML hackathon with 95.78%).
- None on hand: testimonials, client quotes, press coverage or logos. Do not invent them.

## Product Principles

1. Say who and what before anything clever. The first screen names him and his two roles.
2. Show the work, don't describe it: real screenshots and real projects lead.
3. Keep confidential things off the page. For Oina, use only what oinastudio.com already says. Never name the game, characters, funding or business plans. For ScoutMyRivals, never mention data sources, crawling, backtesting or ranking methods.
4. Every project shows a real link when one exists. Private repos show none.

## Accessibility & Inclusion

Full keyboard access, visible focus, and a `prefers-reduced-motion` path that keeps every piece of content while dropping the motion.
