# Portfolio

A hyper-minimalist, cyber-terminal monospace portfolio built with Next.js 14 (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design language

- **Canvas** — pure OLED black (`#000000`) with stark white text.
- **Borders / labels** — mechanical grays (`#1A1A1A` borders, `#666666`
  labels).
- **Accent** — a single operational red (`#D71921`), used only for the
  pulsing status dot and CLI prompt characters.
- **Type** — monospace, uppercase, wide-tracked for structural/metadata
  text; clean sans-serif for narrative copy.
- **Interaction** — instant color-inversion on hover (`100ms` linear), no
  elastic easing.

## Getting started

```bash
npm install
npm run dev
```

Open https://techyhandz0108.netlify.app/.

## Project structure

```
app/
  layout.tsx        Root layout — sets black background, metadata
  page.tsx           Renders portfolio components
  globals.css        Tailwind directives + OLED base styles, focus rings,
                      reduced-motion handling
components/
  tech-portfolio.tsx   The full portfolio layout component
  root-layout-wrapper.tsx Client wrapper layout with preloader
tailwind.config.ts   Design tokens (tech-border, tech-label, tech-accent)
```

## Notes

- The `PortfolioLayout` component is self-contained and can be dropped into
  any Next.js App Router page — see `app/page.tsx` for the one-line usage.
- `PharmaFluxRow` (inside the component file) implements the expandable
  technical row: clicking it streams a simulated CLI log via staggered
  `setTimeout` calls and animates open/closed height with Framer Motion.
- Reduced-motion is respected globally via `prefers-reduced-motion` in
  `globals.css`.
