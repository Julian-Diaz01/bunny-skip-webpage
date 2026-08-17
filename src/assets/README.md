# Assets

Inventory of every file under `src/assets/`, with provenance, for the agent that builds the landing page.

## Sourced (real, from `github.com/Julian-Diaz01/bunny-skip-extension`, `master` branch)

All six fetched via `raw.githubusercontent.com` and verified as valid PNGs (correct `\x89PNG` magic bytes, non-trivial size). The extension repo's `main` branch does not exist (404) — `master` is the real default branch and was used for every file below.

| Path | Source | Size |
| --- | --- | --- |
| `src/assets/extension/icons/icon16.png` | `icons/icon16.png` | 667 B |
| `src/assets/extension/icons/icon48.png` | `icons/icon48.png` | 2.3 KB |
| `src/assets/extension/icons/icon128.png` | `icons/icon128.png` | 6.9 KB |
| `src/assets/extension/store-assets/screenshot-1-this-site.png` | `store-assets/screenshot-1-this-site.png` | 422 KB |
| `src/assets/extension/store-assets/screenshot-2-other-sites.png` | `store-assets/screenshot-2-other-sites.png` | 333 KB |
| `src/assets/extension/store-assets/screenshot-3-add-rule.png` | `store-assets/screenshot-3-add-rule.png` | 424 KB |

These are real product artifacts. Use them as-is; do not recolor, crop into fabricated states, or use them to imply any feature the extension doesn't have (in particular: never depict ad-skipping).

## Original — hand-authored SVG (not real product screenshots)

No image-generation tool was available this session (no `OPENAI_API_KEY`, no `IMPECCABLE_IMAGE_GEN_FAKE`, and the only image-gen MCP tool present, `mcp__Sanity__generate_image`, is bound to a Sanity CMS project this repo doesn't use). Per the brief's explicit "AI-generated raster vs. crafted SVG/vector" open decision, these were produced as hand-authored original vector art instead. Each file carries its provenance as a leading XML comment inside the SVG itself (no separate `.provenance.md` needed since the format supports inline comments).

All five share one palette: `paper` `#F6EEDD` (warm cream ground), `night` `#15110D`/`#120E0B` (near-black panels), `sun` `#FF6A2A` with `sun-2` `#FFA157` / `sun-3` `#FFD9A0` (vivid sun-orange accent + glow) — the same hue family the CSS token scaffold wires as `paper`/`night`/`sun`.

| Path | Depicts | Notes |
| --- | --- | --- |
| `src/assets/illustrations/hero-bunny-skyline.svg` | Full-bleed hero: bunny mid-leap over a skyline built from invented UI-chrome shapes (play-button spires, progress-bar towers with a scrubber knob, a rounded "SKIP INTRO" pill building), backlit by the sun/moon disc. 1600×900 viewBox. | Synthetic/original — no real product screen, no real streaming platform logo or UI, no ad-skipping depicted. |
| `src/assets/illustrations/feature-rules-as-data.svg` | Feature tile for "Rules as data": a dark card of labeled rows with pill toggles. 400×400 viewBox. | Abstract data-row iconography, not a UI screenshot. |
| `src/assets/illustrations/feature-zero-telemetry.svg` | Feature tile for "Zero telemetry": a shield with broadcast arcs struck through and dissolving data dots. 400×400 viewBox. | Abstract iconography, not a UI screenshot. |
| `src/assets/illustrations/feature-element-picker.svg` | Feature tile for "Element picker": a crosshair cursor selecting a generic pill button inside a dashed selection box with corner handles. 400×400 viewBox. | Abstract iconography, not a UI screenshot. |
| `src/assets/illustrations/sun-disc-motif.svg` | Standalone signature motif: the circular sun/moon disc as glow + concentric rings, no folklore narrative. 400×400 viewBox. | Reusable compositional device — behind headers, CTAs, card marks, etc. |

## Directory layout

```
src/assets/
├── README.md                                  (this file)
├── extension/
│   ├── icons/
│   │   ├── icon16.png                          sourced/real
│   │   ├── icon48.png                          sourced/real
│   │   └── icon128.png                         sourced/real
│   └── store-assets/
│       ├── screenshot-1-this-site.png          sourced/real
│       ├── screenshot-2-other-sites.png        sourced/real
│       └── screenshot-3-add-rule.png           sourced/real
└── illustrations/
    ├── hero-bunny-skyline.svg                  original, hand-authored SVG
    ├── feature-rules-as-data.svg               original, hand-authored SVG
    ├── feature-zero-telemetry.svg              original, hand-authored SVG
    ├── feature-element-picker.svg              original, hand-authored SVG
    └── sun-disc-motif.svg                      original, hand-authored SVG
```
