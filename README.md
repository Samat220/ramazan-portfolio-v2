# Ramazan Samat — Portfolio

Source for [ramazansamat.dev](https://www.ramazansamat.dev/): the personal site of Ramazan Samat, founder of Oina Studio and software engineer.

One light, tactile design: each project is staged on its own colour field as real desktop and mobile screenshots, with depth from shadows, perspective and layered devices. Side projects sit on a ring you can drag to spin, and every card opens into a detail panel.

## Stack

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** with CSS custom properties as design tokens
- **Framer Motion** for scroll-linked and interactive motion, **Lenis** for smooth scroll
- **Vercel** hosting, Analytics and Blob (resume storage)
- **Web3Forms** for the contact form

## Getting started

Requires Node 24 (pinned in `.mise.toml`).

```bash
npm install
cp .env.example .env.local   # add your Web3Forms key
npm run dev                  # http://localhost:3000
```

## Scripts

```bash
npm run dev            # Dev server (Turbopack)
npm run build          # Production build
npm start              # Serve the production build
npm run type-check     # TypeScript
npm run lint:check     # ESLint (npm run lint to fix)
npm run format:check   # Prettier (npm run format to fix)
```

The pre-commit hook runs `lint-staged`. CI runs type-check, lint, format and build, plus an npm audit; all must pass.

## Project layout

```
src/
├── app/                 # Layout, page, globals.css + site.css, icons, robots, sitemap
│   ├── admin/           # Resume upload page
│   └── api/             # Authenticated resume upload to Vercel Blob
├── components/
│   ├── site/            # Page sections: nav, hero, work, studio, experience, carousel, contact
│   ├── work/            # Project-specific interactive pieces
│   ├── common/          # Contact form
│   └── ui/              # Button, modal
├── data/config.ts       # All site content
├── lib/                 # Utilities
└── types/               # Content types
```

All content lives in `src/data/config.ts`. Design rules are in [`DESIGN.md`](DESIGN.md) and product context in [`PRODUCT.md`](PRODUCT.md).

## Resume

The resume PDF is served from Vercel Blob. Replace it at `/admin/upload-resume`; uploads need the `ADMIN_SECRET_KEY` set on the deployment.

## License

MIT, see [LICENSE](LICENSE). You're welcome to learn from the code; if it inspires your own site, please credit [ramazansamat.dev](https://www.ramazansamat.dev/) and don't present the design as your own.

## Contact

[samatramazan.dev@gmail.com](mailto:samatramazan.dev@gmail.com) · [LinkedIn](https://linkedin.com/in/samatr) · [GitHub](https://github.com/Samat220)
