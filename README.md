# Kaushik Mukherjee — Portfolio

This folder hosts portable documentation for the portfolio project so collaborators can open the repo at a glance and still access the essentials (even if the root README stays minimal).

## Overview
- **Stack:** React 18 + TypeScript + Vite, Tailwind CSS, shadcn/ui primitives, GSAP animations.
- **Purpose:** Showcase Kaushik's full-stack capabilities, resume, and production projects.
- **Highlights:** Animated hero, categorized skills, live project cards with demos/code, downloadable resume export.

## Local Development
1. Install dependencies: `npm install`
2. Start in dev mode: `npm run dev`
3. Build for production: `npm run build`
4. Preview built output: `npm run preview`

The dev server lives at http://localhost:5173 by default (configured to 8080 for hosted environments via `vite.config.ts`).

## Key Structure
- `src/components` — Feature sections (Hero, About, Projects, Resume, Footer, etc.).
- `src/components/ui` — Reusable UI primitives sourced from shadcn/ui.
- `src/hooks` — Custom hooks like `use-mobile` and toast utilities.
- `public/` — Static assets served as-is (favicons, robots, etc.).

## Deployment Notes
- Run `npm run build` to emit the latest assets into `dist/`.
- Upload the `dist` folder to Vercel/Netlify/Render or serve via any static host.
- Ensure environment variables (if any future APIs need them) are configured at the host level; this portfolio currently runs without secrets.

## Customization Tips
- Update meta tags in `index.html` to keep sharing previews current (already personalized for Kaushik).
- Swap hero/profile imagery via `src/assets/profile-photo.jpg`.
- Extend the projects section inside `src/components/Projects.tsx` with new live/GitHub links as additional work ships.
