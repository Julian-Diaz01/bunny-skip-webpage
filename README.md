# Bunny Skip — Landing Page

The marketing landing page for **[Bunny Skip](https://chromewebstore.google.com/detail/fidpamnbdamkmianclaiokdoginbjbbh)**, a Chrome extension that automatically clicks "Skip Intro," "Skip Recap," and "Next Episode" prompts across seven major streaming platforms (Netflix, Prime Video, Disney+, Hulu, Max, Apple TV+, Paramount+).

This repo builds only the landing page — the extension itself lives at [Julian-Diaz01/bunny-skip-extension](https://github.com/Julian-Diaz01/bunny-skip-extension).

## What this page does

Explains what Bunny Skip does and converts visitors into installs. It leads with the extension's actual differentiators:

- **Rules as data** — match rules are stored as selectors/strings, not hardcoded per-site JavaScript, so a broken rule is fixed by re-picking the button in the popup UI.
- **Zero telemetry** — no network calls, no backend, no analytics.
- **Dual CTA** — every install prompt links to both the Chrome Web Store listing and the GitHub source, for visitors who want to audit the code first.

Every functional claim on the page traces back to the extension's own README and privacy policy — see `PRODUCT.md` for the full positioning brief and `DESIGN.md` for the visual design system.

## Stack

React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui, built with Vite.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check (tsc -b) and build for production
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Project docs

- `PRODUCT.md` — product purpose, positioning, and evidence constraints for landing-page copy.
- `DESIGN.md` — the design system (color, type, motion, and component rules) this page follows.
