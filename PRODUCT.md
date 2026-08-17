# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Tailwind + shadcn/ui

## Users

Potential customers/leads: people who stream video on Netflix, Prime Video, Disney+, Hulu, Max, Apple TV+, or Paramount+ and are annoyed by "Skip Intro" / "Skip Recap" / "Next Episode" prompts they have to click manually. They arrive at this page evaluating whether to install the Bunny Skip Chrome extension, and need enough evidence (what it does, what it doesn't do, that it's safe/private) to decide.

## Product Purpose

This repo is the marketing landing page for **Bunny Skip**, a Chrome extension (source: https://github.com/Julian-Diaz01/bunny-skip-extension). The extension itself already exists and is published; this page's job is to explain it and convert visitors into installs. Success = a visitor understands what the extension does and clicks through to install (Chrome Web Store) or inspect the source (GitHub).

## Positioning

Bunny Skip automatically clicks "Skip Intro," "Skip Recap," and "Next Episode" buttons across seven major streaming platforms. Its differentiating mechanism: match rules are stored as **data** (selectors/strings), never as hardcoded per-site JavaScript, so a broken rule is fixed by re-picking the button in the popup UI — no code changes required. It also makes zero network calls, has no backend, no telemetry/analytics, and never touches ads, paywalls, or DRM content — a trust story that's real (see Evidence) and should be surfaced, not buried in a privacy policy link.

## Operating Context

- The extension is live and installable now: Chrome Web Store listing at `https://chromewebstore.google.com/detail/fidpamnbdamkmianclaiokdoginbjbbh`, and source at `https://github.com/Julian-Diaz01/bunny-skip-extension` (MIT licensed).
- The primary install CTA on this landing page must link to **both** the Chrome Web Store listing and the GitHub repo.
- Supported platforms today: Netflix, Prime Video, Disney+, Hulu, Max, Apple TV+, Paramount+. Netflix ships with seed rules out of the box; other platforms require the user to capture rules once via the in-extension element picker.
- This repo builds only the landing page — no application functionality lives here.

## Capabilities and Constraints

- Static/marketing site only; no auth, no backend, no user accounts.
- Every functional claim on the page must trace back to the extension's actual README/privacy policy (see Evidence) — no invented capabilities.
- Do not depict ad-skipping as a feature; it is explicitly out of scope for the extension (see Future Work in its README) and could read as a ToS-violation claim if implied.

## Brand Commitments

- Product name: **Bunny Skip**.
- Real extension icon assets exist at `icons/icon16.png`, `icons/icon48.png`, `icons/icon128.png` in the extension repo — use these, don't invent a new logo.

## Evidence on Hand

All sourced from `github.com/Julian-Diaz01/bunny-skip-extension`:

- Extension icons: `icons/icon16.png`, `icons/icon48.png`, `icons/icon128.png`.
- Real product screenshots: `store-assets/screenshot-1-this-site.png`, `screenshot-2-other-sites.png`, `screenshot-3-add-rule.png`.
- Promo images: `store-assets/promo-marquee-1400x560.png`, `store-assets/promo-small-440x280.png`.
- `README.md` and `PRIVACY_POLICY.md` — source-of-truth copy for functional and privacy claims.
- MIT `LICENSE`.
- Chrome Web Store listing (published, id `fidpamnbdamkmianclaiokdoginbjbbh`).

**Absences future work must not fabricate:** no testimonials, press mentions, or user reviews exist yet. The repo currently has 0 GitHub stars — do not cite popularity, review counts, or star counts as social proof.

## Product Principles

1. **Evidence over invention.** Every claim on the page must trace to the extension's real README, privacy policy, or store assets — never fabricated stats, testimonials, or reviews.
2. **Dual CTA, always.** Offer both the Chrome Web Store install and the GitHub source together, respecting visitors who want to audit an extension with host permissions before installing.
3. **Privacy is a headline feature, not a footnote.** "No telemetry, no backend, no eval" is a genuine differentiator for a tool that runs on every streaming page — surface it prominently rather than linking it away.
4. **Function over any single platform.** The identity is "skip intro/recap/credits everywhere," across seven platforms — don't let the design over-index on one streaming brand.
5. **Single-purpose page.** This is one landing page whose job is understand-then-install, not a docs site, dashboard, or multi-page product site.
