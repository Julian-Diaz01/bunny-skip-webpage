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
- **Illustration**: the Hero's illustration slot (a square composition inside a circular sun-disc glow, beside the headline/CTA column — not a full-bleed background) shows the bunny — same silhouette/pose/palette as the site's `logo.svg` mark — mid-leap toward a glowing "skip forward" pill button haloed by the sun/moon disc motif, at `src/assets/illustrations/hero-bunny-skip.svg`. Original artwork; labeled synthetic in its alt text since it depicts an invented UI element, not a real product screen. Updated 2026-08-18 at explicit user request: the earlier skyline composition (`hero-bunny-skyline.svg`, built from streaming-platform UI chrome as invented building shapes) was rejected outright — "dont make a skyline do something else" — and never shipped; that file is left in the repo unused for reference only. Hero ground is paper (light), not night — updated 2026-08-17 at explicit user request; the illustration's own dark elements are night-ink silhouettes only, not a full-bleed dark background.
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
