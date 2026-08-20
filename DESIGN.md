---
name: Bunny Skip
description: A marketing landing page proving the mechanism, not the mood — rules-as-data over blush-cream paper, deep wine-plum panels, and a rose-pink manifesto block.
colors:
  paper: "oklch(0.968 0.017 3.6)"
  paper-foreground: "oklch(0.233 0.038 350.4)"
  paper-muted: "oklch(0.928 0.017 3.6)"
  paper-border: "oklch(0.878 0.022 3.6)"
  night: "oklch(0.233 0.038 350.4)"
  night-foreground: "oklch(0.968 0.017 3.6)"
  night-muted: "oklch(0.313 0.038 350.4)"
  night-border: "oklch(0.363 0.038 350.4)"
  sun: "oklch(0.599 0.177 6.3)"
  sun-foreground: "oklch(0.968 0.017 3.6)"
  sun-muted: "oklch(0.749 0.097 6.3)"
  sun-border: "oklch(0.499 0.167 6.3)"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontWeight: 200-900
    letterSpacing: "0.04em (labels) / normal (headlines, uppercase)"
  body:
    fontFamily: "Literata, serif"
    fontWeight: 200-900
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "18px"
  full: "9999px"
spacing:
  section-y: "6rem"
  section-y-lg: "8rem"
  grid-gap: "1rem"
components:
  cta-pill-primary:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-foreground}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  cta-pill-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.night}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  cta-circle-light:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-foreground}"
    rounded: "{rounded.full}"
    size: "112px"
  cta-circle-dark:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.sun-foreground}"
    rounded: "{rounded.full}"
    size: "112px"
  card-platform:
    backgroundColor: "{colors.paper-muted}"
    textColor: "{colors.paper-foreground}"
    rounded: "{rounded.2xl}"
    padding: "36px 24px"
---

# Design System: Bunny Skip

## Overview

**Creative North Star: "The Mechanism, Not the Mood"**

Bunny Skip's system carries NEO MIRAI's design *grammar* — full-bleed painted-world hero, alternating light/dark panels, one saturated single-color manifesto block, a recurring circular sun/moon disc — translated onto Bunny Skip's own subject rather than its literal Japan-specific dressing. The page's job is to demonstrate a mechanism (a rule matches, a button gets clicked, the change persists) rather than sell a mood: it refuses the icon-grid feature list in favor of a page that shows the match/click/sync loop itself, then proves seven-platform reach and a zero-network trust story in the visitor's own terms.

Blush-cream paper and deep wine-plum night panels alternate section by section; the rose-pink field is spent all at once, on a single full-bleed manifesto block, so its rarity carries the page's one moment of maximum saturation. The circular disc — sun or moon depending on context — recurs as a compositional device behind marks and CTAs, never as folklore illustration.

**Key Characteristics:**
- Warm, not neutral: every "black" and "white" in the system carries the same warm rose hue family (~350–6° in OKLCH), never true gray or blue-black.
- One accent, spent deliberately: rose-pink is a full-section color and a CTA/focus accent, never a decorative sprinkle.
- Geometric display type in all-caps against a humanist serif for body — a technical/warm contrast, not a single-voice system.
- Motion and reveal are additive only: every section's real content renders with no JavaScript and no motion preference; scroll-reveal is a pure enhancement layered on top, never the mechanism that makes content exist.

## Colors

Three token families — paper, night, sun — each with a foreground, a muted surface, and a border step, all defined in oklch() and consumed as CSS custom properties (`src/index.css`), never hex, so hue and chroma stay linked as the ground shifts.

### Primary
- **Rose Pink** (`oklch(0.599 0.177 6.3)`): the one accent — converted from the product's own `#d1466f`. Owns the full-bleed privacy-manifesto section at full saturation, and is the focus-ring/hover color across CTAs, links, and interactive borders elsewhere. Never used as a body-text color at low opacity — accent color earns its keep by being loud where it appears and absent elsewhere.

### Neutral
- **Blush Paper** (`oklch(0.968 0.017 3.6)`): the light-panel ground (Hero base under the illustration, Platforms, Feature Tiles, Install) — converted from the product's `#fff0f3`.
- **Deep Wine Night** (`oklch(0.233 0.038 350.4)`): the dark-panel ground (How It Works, Footer) and the ink used for silhouettes within the Hero illustration (skyline, bunny) — converted from the product's `#2b1620`; identical value doubles as Blush Paper's own foreground ink, so light and dark panels are literal inversions of the same two colors.
- **Blush Off-White** (`oklch(0.968 0.017 3.6)`): text/foreground on night panels — same value as Blush Paper.
- **Paper Muted** (`oklch(0.928 0.017 3.6)`) / **Night Muted** (`oklch(0.313 0.038 350.4)`): secondary surfaces — card backgrounds, muted section fills — one step off each ground.
- **Paper Border** (`oklch(0.878 0.022 3.6)`) / **Night Border** (`oklch(0.363 0.038 350.4)`): hairline dividers and card borders on each ground.
- **Card Highlight** (`oklch(0.979 0.017 76.1)`): a near-white warm-cream surface — converted from the product's `#fff7ec` — used for `--card`/`--popover`, a shade brighter than Blush Paper itself.

### Named Rules
**The Warm-Only Rule.** No color in the system drops to true gray (chroma 0) or shifts toward blue — every neutral, including "black" and "white," carries the same ~350–6° rose hue family as the accent (the Card Highlight is the one deliberate exception, borrowed from the product's own warm-cream highlight). A gray or blue-black value anywhere in this system is a defect, not a variant.

**The One Field Rule.** Rose-pink fills a whole section (the manifesto block) or nothing at all — it is never a card fill, a background tint, or a large decorative field elsewhere. Its other uses are line-weight: focus rings, hover borders, small accent chips, and CTA fills at button scale.

## Typography

**Display Font:** Unbounded (variable, weight 200–900), with `sans-serif` fallback
**Body Font:** Literata (variable, weight 200–900, roman + italic), with `serif` fallback

**Character:** A geometric, technical display face carries every heading and label in uppercase — engineered rather than decorative at large sizes — set against Literata's warm, bookish serif for taglines, body copy, and quotes. The pairing is the OWN-WORLD promise made literal: mechanism (display) and trust (body) as two different voices on the same page.

### Hierarchy
- **Display** (font-display, fluid `13vw`-scale, uppercase): the Hero `<h1>` only — three stacked lines, the page's single largest text.
- **Headline** (font-display, `text-4xl`–`text-5xl`, `font-semibold`, uppercase): section `<h2>`s (How It Works, Reaches Seven Platforms, Built to Stay Honest, the manifesto headline, Install, Footer wordmark treatment).
- **Body** (font-body, `text-lg`, `leading-relaxed`): section intros and supporting paragraphs, set at ~65–75ch measure.
- **Label** (font-display, `text-xs`–`text-sm`, uppercase, `tracking-[0.04em]`–`[0.06em]`): CTA button text, platform-card tags ("Ships with seed rules"), install-card eyebrow metadata.

### Named Rules
**The All-Caps Display Rule.** Unbounded only ever appears uppercase, in headings and labels — it never sets a sentence-case paragraph. Literata carries every sentence-case passage on the page.

## Layout

Single-column, section-stacked page, no persistent sidebar or app-chrome. A `max-w-7xl` container (`px-6` mobile, `sm:px-10` desktop) centers content within each full-bleed section band. Section vertical rhythm is consistent — `py-24` mobile, `sm:py-32` desktop — with more space above a heading than below it. Panels alternate light/dark by section (paper → night → paper → paper → sun → paper → night), so the rhythm is compositional, not just spacing — a dark or saturated band punctuates a run of light ones rather than repeating on a fixed interval.

Within a section, content that used to run as a borderless flow (icon+text columns, divided halves) now renders as an explicit CSS Grid of bounded cards — see **Theme-Block Grid** below. Every such grid uses a flat `gap-4` gutter (no `gap-x`/`gap-y` split) and steps column count responsively — 2 columns mobile → 3 at `sm` → 4 at `lg` for the platform grid, 1 → 3 for feature tiles and how-it-works steps, 1 → 2 for install and manifesto facts — with the seeded/Netflix card spanning two columns *and* two rows as a deliberate bento-style emphasis break (`sm:row-span-2`) in an otherwise even grid.

### Named Rules
**The Theme-Block Grid.** Any section presenting three or more like items (feature tiles, how-it-works steps, install tiers, manifesto facts) renders them as bounded `rounded-2xl` card blocks in a CSS Grid, each carrying one of the section's available ground tones as its own background — never as borderless text/icon columns. On a paper section, blocks alternate `bg-card` (light) and `bg-night`/`bg-night-muted` (dark) to reintroduce the page's light/dark panel-alternation at card granularity; on the night section, blocks use `bg-night-muted`; on the sun section, blocks use a translucent `bg-sun-foreground/[0.06]` overlay tinted from the section's own ground, never a separate fill. Rose-pink (`sun`) itself still never fills a block — the One Field Rule below is unchanged. **Platforms is the one deliberate exception:** its seven cards drop the bounded background/border entirely (badge + label + caption on the bare section ground) — a lighter, icon-forward grid language borrowed on purpose for that one section, never generalized to the others.

**Scene Composition.** Hero and How It Works each compose as a single two-column scene rather than stacked, centered blocks: a text column (headline/steps → body → CTA) paired with a visual column (illustration or diagram) that floats rather than sits in a bordered box, `lg:grid-cols-[~1fr_~1fr]` with the visual column reordered above the text on mobile. Reserved for sections built around one dominant visual (an illustration, a diagram) — Platforms and Install keep their existing centered-intro-then-grid shape, since their content is inherently plural (many platforms, two install paths), not a single scene.

## Elevation & Depth

Flat by default — no directional `box-shadow` vocabulary in the system. Depth and focus are conveyed instead through soft, blurred, color-tinted radial glows (`blur-2xl` fields at low opacity, e.g. `bg-sun/10`) positioned behind marks and cards, which read as ambient light from the sun-disc motif rather than as material elevation. State changes (hover, focus) shift border color and glow opacity, not shadow depth.

### Named Rules
**The Glow-Not-Shadow Rule.** Where a conventional system would reach for a drop shadow to lift an element, this system reaches for a blurred, sun-tinted radial field instead — depth reads as backlight, consistent with the sun/moon disc motif, never as a directional light source implying a physical shelf.

## Shapes

Two form languages, deliberately paired: **full-round** for every interactive control (pill CTAs at `rounded-full`, circular CTA discs at `rounded-full` fixed `112px`), and **soft-rounded rectangles** for content containers (`rounded-2xl`, 18px, on platform/feature cards). Nothing in the system uses a sharp 0-radius corner or an asymmetric/cut corner. The circular form additionally recurs as the signature sun/moon disc — glow fields, ring outlines, and the circular CTAs all share one geometry family, tying the interactive layer to the illustrative motif.

## Components

### Buttons (CTAs)
Never a stock shadcn `Button` — the site defines its own `CtaLink` (pill) and `CtaCircle` (disc) primitives in `src/components/Cta.tsx`, each carrying an inline SVG directional glyph (never a Unicode arrow character).
- **Shape:** `CtaLink` is a full pill (`rounded-full`, `px-6 py-3`); `CtaCircle` is a fixed `112px` circle.
- **Primary (`CtaLink` primary):** night fill, night-foreground text, sun focus ring.
- **Secondary (`CtaLink` secondary):** transparent fill, night border/text, fills night on hover.
- **Invert variants:** sun-filled or paper-outlined versions for use on dark/saturated grounds (Footer, Manifesto).
- **Circle tones:** `light` tone (night fill, used on light card backgrounds — e.g. the Chrome Web Store install card) uses a **night** focus ring, not sun, because sun-on-paper focus contrast fails AA; `dark` tone (sun fill, used on dark card backgrounds — the GitHub source card) uses a sun ring.
- **Hover / Focus:** border/fill inversion on hover (night↔sun↔paper depending on variant); every focus-visible state carries a real `ring-3` or `ring-2` — never a color-only text change.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (18px).
- **Background:** `bg-card` (one step off the section's ground — paper-muted family on light sections). Emphasis/theme-block cards within a light section instead take the opposite ground (`bg-night`/`bg-night-muted`) to read as a dark panel inside a light grid — see the Theme-Block Grid rule under Layout.
- **Shadow Strategy:** none; see Elevation & Depth — a blurred sun-tinted glow field substitutes for shadow, positioned behind the card content and revealed further on hover.
- **Border:** 1px `border-paper-border` at rest, shifts to `border-sun-border` on hover; dark theme-block cards use `border-night`/`border-night-border` instead.
- **Internal Padding:** generous — `p-7`–`p-10` depending on card size.

### Navigation
Wordmark + text links, uppercase font-display labels. Both the primary nav and the footer nav render as siblings of `<main>` (not nested inside it), preserving their `banner`/`contentinfo` landmark roles. Focus-visible state is a real ring (`ring-2 ring-sun ring-offset-2`), matching the CTA focus pattern rather than a text-color-only substitute.

### Sun/Moon Disc (signature motif)
The primary recurring non-content graphic device: a soft-edged circular glow, reused behind the Hero illustration, as a watermark in the Manifesto section, behind each `PlatformMark`, and as the geometry of every `CtaCircle`. It carries no folklore narrative (no rabbit-in-the-moon illustration) — it is treated purely as light and geometry.

### Flow Motif (secondary background device)
A soft organic band of layered wave curves (`src/assets/illustrations/flow-motif.svg`), the disc's non-circular counterpart — used sparingly as a low-opacity (`opacity-50`–`70`, `mix-blend-multiply`) ambient background layer behind the Feature Tiles section. It is a background texture, never a foreground shape and never a whole-section color field — the One Field Rule still governs how much rose-pink it's allowed to carry. The Hero instead uses a dedicated "Dusty Rose" gradient + grain background (`.hero-gradient` in `src/index.css`): a diagonal blush-to-rose linear gradient, a blurred radial highlight multiplied on top, and a subtle feTurbulence noise overlay.

## Do's and Don'ts

### Do:
- **Do** keep every "black," "white," and gray-adjacent value inside the warm paper/night hue family (~55–80°) — no true gray, no blue-black.
- **Do** spend rose-pink as a whole-section field or as a thin accent (rings, borders, small chips) — nothing in between.
- **Do** pair Unbounded-uppercase with Literata-sentence-case; never set a full sentence in the display face.
- **Do** ship real, current content by default in CSS — motion (`.reveal`) is something JavaScript opts elements into, never something CSS hides by default and JavaScript is trusted to rescue.
- **Do** give every focus-visible state a real ring or outline sized and colored to pass contrast against its actual background — a color-only text change is not a focus indicator.

### Don't:
- **Don't** use a directional `box-shadow` for elevation — reach for a blurred, tinted glow field instead.
- **Don't** use a sharp or asymmetric corner anywhere — every shape in the system is either full-round or a soft `2xl` rectangle.
- **Don't** substitute a Unicode glyph (→, ↓, etc.) for an icon — every directional or brand mark in the system is an authored inline SVG.
- **Don't** nest `<nav>`/`<footer>` landmark elements inside `<main>` — they render as siblings so their landmark roles survive.
