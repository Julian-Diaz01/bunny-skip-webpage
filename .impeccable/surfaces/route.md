---
version: 1
slug: "route"
primary_target: "route:/"
related_targets: []
---

# Bunny Skip landing page — surface brief

Visitor mode: Persuade. Visual authority: pinned by the user — https://impeccable.style/neo-mirai/'s design *system*, not its Japan-specific dressing (confirmed: "System only, not costume"). Skips the concept-seed dice roll: a user-pinned reference beats the roll by contract.

## Job and audience

A streaming viewer (Netflix, Prime Video, Disney+, Hulu, Max, Apple TV+, Paramount+) lands here deciding whether to install a Chrome extension that auto-skips intros/recaps/next-episode prompts. They need to trust it fast (it requests host permissions on every streaming page) and then act.

## Outcome and proof

Primary action: install (Chrome Web Store) or inspect the source (GitHub) — both always visible together, never one without the other. Proof carried: real extension icons/screenshots pulled from the repo, the "rules are data, not code, and nothing ever phones home" story, and seven-platform breadth. No testimonials, star counts, or invented claims — none exist yet and must not be fabricated.

## Selected direction

Carry NEO MIRAI's *system*, translated to Bunny Skip's own subject — not its literal content:

- **Palette**: warm cream/paper ground, near-black "night" contrast panels, a vivid sun-orange accent that owns full sections at saturation (the manifesto block). Same formula/token family as the reference — not literal Japan, so the hue family carries over freely.
- **Type pairing**: a techy geometric display sans (large, light-weight, all-caps headlines) against a warm humanist serif for taglines/quotes/body copy. Exact faces chosen at build time — do not default to Mincho, and do not reflexively reach for Fraunces/Playfair/Cormorant/Lora/Crimson/Newsreader without a reason beyond "these are elegant serifs."
- **Signature motif**: the circular sun/moon disc, kept as an abstract compositional device (a glow/spotlight behind hero art, ring shapes around CTAs) — no folklore narrative attached (rabbit-in-the-moon was considered and explicitly not chosen).
- **Illustration**: full-bleed painterly hero — a bunny mid-leap over a skyline built from streaming-platform UI chrome (play buttons, progress bars, a "Skip Intro" pill rendered as a building), backlit by the sun disc. Original artwork; label it synthetic since it depicts no real product screen.
- **Composition grammar**: alternating full-bleed light/dark panels, one saturated single-color manifesto block, illustrated square-tile card grids, circular buttons.

## Scope and boundaries

Single-route static landing page. Stack: React + Tailwind + shadcn/ui (per PRODUCT.md). No backend, no forms, no auth. Real assets (icons, 3 screenshots) sourced from `github.com/Julian-Diaz01/bunny-skip-extension` (`icons/icon16.png`, `icon48.png`, `icon128.png`; `store-assets/screenshot-1-this-site.png`, `screenshot-2-other-sites.png`, `screenshot-3-add-rule.png`). Hero/feature illustrations are new original art. Never depict ad-skipping (explicitly out of scope for the extension). Never show install counts, star counts, or reviews.

## States and ranges

Marketing-only: responsive breakpoints (desktop/tablet/mobile), standard hover/focus/active states on buttons and cards, scroll-triggered section reveals with a `prefers-reduced-motion` fallback (default visible, motion enhances). No loading/error/empty states — nothing on this page is dynamic.

## Interaction and layout — section-for-section translation of NEO MIRAI's depth

1. **Hero** — wordmark, tagline, bunny-over-streaming-skyline illustration, dual CTA (Chrome Web Store primary / GitHub secondary), platform-icon strip.
2. **How it works** (dark panel, split layout like the reference's Agenda) — 3-step timeline (rule matches → clicks once → stays live via `chrome.storage.onChanged`) beside a blueprint-style diagram of the mechanism.
3. **Supported platforms** (light card grid like the reference's Speakers) — 7 platform cards, sun-disc treatment behind each mark; Netflix flagged as shipping seed rules out of the box.
4. **Feature tiles** (illustrated square grid like the reference's Installations) — Rules as data / Zero telemetry / Element picker.
5. **Privacy manifesto** (full-bleed saturated block like the reference's Manifesto) — a trust statement built from the real "no backend, no telemetry, no eval" facts, quiet illustration opposite, link to `PRIVACY_POLICY.md`.
6. **Install** (two-tier card layout, echoing the reference's ticket tiers) — Chrome Web Store card and GitHub Source card side by side, each with its own circular CTA. Chrome Web Store id: `fidpamnbdamkmianclaiokdoginbjbbh`.
7. **Footer** (dark) — wordmark, links to GitHub, Chrome Web Store, Privacy Policy, MIT License.

## Constraints and open decisions

Exact typefaces and exact hero-illustration production method (AI-generated raster vs. crafted SVG/vector, depending on available image tooling this session) are open, resolved at build time. Everything else above is locked by this brief — do not reopen confirmed decisions without a stated reason.
