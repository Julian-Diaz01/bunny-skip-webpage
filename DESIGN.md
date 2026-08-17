---
name: Bunny Skip
description: A marketing landing page proving the mechanism, not the mood — rules-as-data over cream paper, near-black panels, and a sun-orange manifesto block.
colors:
  paper: "oklch(0.97 0.02 75)"
  paper-foreground: "oklch(0.19 0.015 55)"
  paper-muted: "oklch(0.93 0.02 78)"
  paper-border: "oklch(0.88 0.02 75)"
  night: "oklch(0.19 0.015 55)"
  night-foreground: "oklch(0.96 0.01 80)"
  night-muted: "oklch(0.27 0.015 55)"
  night-border: "oklch(0.32 0.015 55)"
  sun: "oklch(0.7 0.2 48)"
  sun-foreground: "oklch(0.16 0.02 50)"
  sun-muted: "oklch(0.85 0.1 55)"
  sun-border: "oklch(0.6 0.19 45)"
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

Warm cream paper and near-black night panels alternate section by section; the sun-orange field is spent all at once, on a single full-bleed manifesto block, so its rarity carries the page's one moment of maximum saturation. The circular disc — sun or moon depending on context — recurs as a compositional device behind marks and CTAs, never as folklore illustration.

**Key Characteristics:**
- Warm, not neutral: every "black" and "white" in the system carries the same warm hue family (~55–80° in OKLCH), never true gray or blue-black.
- One accent, spent deliberately: sun-orange is a full-section color and a CTA/focus accent, never a decorative sprinkle.
- Geometric display type in all-caps against a humanist serif for body — a technical/warm contrast, not a single-voice system.
- Motion and reveal are additive only: every section's real content renders with no JavaScript and no motion preference; scroll-reveal is a pure enhancement layered on top, never the mechanism that makes content exist.

## Colors

Three token families — paper, night, sun — each with a foreground, a muted surface, and a border step, all defined in oklch() and consumed as CSS custom properties (`src/index.css`), never hex, so hue and chroma stay linked as the ground shifts.

### Primary
- **Sun Orange** (`oklch(0.7 0.2 48)`): the one accent. Owns the full-bleed privacy-manifesto section at full saturation, and is the focus-ring/hover color across CTAs, links, and interactive borders elsewhere. Never used as a body-text color at low opacity — accent color earns its keep by being loud where it appears and absent elsewhere.

### Neutral
- **Warm Cream Paper** (`oklch(0.97 0.02 75)`): the light-panel ground (Hero base under the illustration, Platforms, Feature Tiles, Install).
- **Warm Near-Black Night** (`oklch(0.19 0.015 55)`): the dark-panel ground (How It Works, Footer, and the Hero illustration's own background) — warm-tinted, not blue-black; identical value doubles as Warm Cream Paper's own foreground ink, so light and dark panels are literal inversions of the same two colors.
- **Warm Off-White** (`oklch(0.96 0.01 80)`): text/foreground on night panels.
- **Paper Muted** (`oklch(0.93 0.02 78)`) / **Night Muted** (`oklch(0.27 0.015 55)`): secondary surfaces — card backgrounds, muted section fills — one step off each ground.
- **Paper Border** (`oklch(0.88 0.02 75)`) / **Night Border** (`oklch(0.32 0.015 55)`): hairline dividers and card borders on each ground.

### Named Rules
**The Warm-Only Rule.** No color in the system drops to true gray (chroma 0) or shifts toward blue — every neutral, including "black" and "white," carries the same ~55–80° hue family as the sun accent. A gray or blue-black value anywhere in this system is a defect, not a variant.

**The One Field Rule.** Sun-orange fills a whole section (the manifesto block) or nothing at all — it is never a card fill, a background tint, or a large decorative field elsewhere. Its other uses are line-weight: focus rings, hover borders, small accent chips, and CTA fills at button scale.

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

Single-column, section-stacked page, no persistent sidebar or app-chrome. A `max-w-7xl` container (`px-6` mobile, `sm:px-10` desktop) centers content within each full-bleed section band. Section vertical rhythm is consistent — `py-24` mobile, `sm:py-32` desktop — with more space above a heading than below it. Grids (the seven-platform strip, feature tiles) use `gap-4` and step column count responsively: 2 columns mobile → 3 at `sm` → 4 at `lg` for the platform grid, with the seeded/Netflix card spanning two columns as a deliberate emphasis break in an otherwise even grid. Panels alternate light/dark by section (paper → night → paper → paper → sun → paper → night), so the rhythm is compositional, not just spacing — a dark or saturated band punctuates a run of light ones rather than repeating on a fixed interval.

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
- **Background:** `bg-card` (one step off the section's ground — paper-muted family on light sections).
- **Shadow Strategy:** none; see Elevation & Depth — a blurred sun-tinted glow field substitutes for shadow, positioned behind the card content and revealed further on hover.
- **Border:** 1px `border-paper-border` at rest, shifts to `border-sun-border` on hover.
- **Internal Padding:** generous — `px-6 py-9` on platform cards.

### Navigation
Wordmark + text links, uppercase font-display labels. Both the primary nav and the footer nav render as siblings of `<main>` (not nested inside it), preserving their `banner`/`contentinfo` landmark roles. Focus-visible state is a real ring (`ring-2 ring-sun ring-offset-2`), matching the CTA focus pattern rather than a text-color-only substitute.

### Sun/Moon Disc (signature motif)
The one recurring non-content graphic device: a soft-edged circular glow, reused behind the Hero illustration, as a watermark in the Manifesto section, behind each `PlatformMark`, and as the geometry of every `CtaCircle`. It carries no folklore narrative (no rabbit-in-the-moon illustration) — it is treated purely as light and geometry.

## Do's and Don'ts

### Do:
- **Do** keep every "black," "white," and gray-adjacent value inside the warm paper/night hue family (~55–80°) — no true gray, no blue-black.
- **Do** spend sun-orange as a whole-section field or as a thin accent (rings, borders, small chips) — nothing in between.
- **Do** pair Unbounded-uppercase with Literata-sentence-case; never set a full sentence in the display face.
- **Do** ship real, current content by default in CSS — motion (`.reveal`) is something JavaScript opts elements into, never something CSS hides by default and JavaScript is trusted to rescue.
- **Do** give every focus-visible state a real ring or outline sized and colored to pass contrast against its actual background — a color-only text change is not a focus indicator.

### Don't:
- **Don't** use a directional `box-shadow` for elevation — reach for a blurred, tinted glow field instead.
- **Don't** use a sharp or asymmetric corner anywhere — every shape in the system is either full-round or a soft `2xl` rectangle.
- **Don't** substitute a Unicode glyph (→, ↓, etc.) for an icon — every directional or brand mark in the system is an authored inline SVG.
- **Don't** nest `<nav>`/`<footer>` landmark elements inside `<main>` — they render as siblings so their landmark roles survive.
