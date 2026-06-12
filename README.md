# Benito Ishimwe — Portfolio

Personal portfolio showcasing backend engineering, cloud infrastructure, and full-stack projects.

[![Live Site](https://img.shields.io/badge/Live%20Site-benitoishimwe.github.io-brightgreen)](https://benitoishimwe.github.io/my-portfolio-engine/)

---

## Tech Stack

- **React 18** + **TypeScript** — component-driven UI with full type safety
- **Vite** — fast dev server and optimised production builds
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered and entrance animations
- **shadcn/ui** — accessible Radix-based component library
- **GitHub Pages** — static hosting via the `gh-pages` package

---

## Local Setup

```bash
git clone https://github.com/benitoishimwe/my-portfolio-engine.git
cd my-portfolio-engine
npm install
npm run dev        # starts dev server at http://localhost:5173
```

---

## Build & Deploy

```bash
npm run build      # outputs static files to dist/
npm run deploy     # runs build then pushes dist/ to the gh-pages branch
```

GitHub Pages serves the `gh-pages` branch automatically. The `homepage` field in `package.json` and the `base` option in `vite.config.ts` ensure assets resolve correctly under the `/my-portfolio-engine/` sub-path.

---

## Project Structure

```
src/
  components/       # Page sections (Hero, About, Experience, Skills, Projects, Contact)
  components/ui/    # shadcn/ui primitives (Button, Input, etc.)
  data/             # Content data files — edit these to update portfolio content
  hooks/            # Custom React hooks
  pages/            # Route-level components (Index, NotFound)
  lib/              # Utility helpers (cn, etc.)
public/
  profile.jpg       # Profile photo served at runtime
  resume.pdf        # Résumé download
index.html          # Entry HTML with meta tags and structured data
```

---

## Customisation Guide

| What to change | Where |
|---|---|
| Name, title, email, social links | `src/data/site-config.ts` |
| Work experience entries | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Skills / technology groups | `src/data/skills.ts` |
| About section expertise cards | `src/data/about.ts` |
| Page title, OG tags, structured data | `index.html` |
| Profile photo | `public/profile.jpg` (replace in place) |
| Résumé PDF | `public/resume.pdf` (replace in place) |

---

## Contact

- **LinkedIn:** [benito-ishimwe](https://www.linkedin.com/in/benito-ishimwe/)
- **GitHub:** [@benitoishimwe](https://github.com/benitoishimwe)
- **Email:** benishimwe31@gmail.com
