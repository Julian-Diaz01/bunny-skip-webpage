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

All six share one palette — this row was previously stale (documented an orange/cream palette that was never wired into the app); the real values below match the current `paper`/`night`/`sun` CSS custom properties in `src/index.css` and `DESIGN.md`: `paper` (blush-cream ground) `#FFF0F3`/`#FCE9F1`, `night` (deep wine-plum panels) `#2B1620`, with darker card-fill steps `#161012`/`#1C0E15`/`#3C2A32`, `sun` (rose-pink accent) `#D1466F`/`#FE5F8C`, with tints `#FF7B9D`/`#FFC9D6`/`#FF91AC`/`#FFD8E1` and the bunny-specific pinks `#FF6F91`/`#e05274`/`#E24777` — all in the same ~350–6° warm-rose hue family, never true gray or blue-black.

| Path | Depicts | Notes |
| --- | --- | --- |
| `src/assets/illustrations/hero-bunny-skip.svg` | Hero illustration: the Bunny Skip mascot (same silhouette/pose as `logo.svg`) mid-leap along a dashed motion arc toward a glowing "skip forward" pill button haloed by the sun/moon disc motif. 400×400 viewBox. | Synthetic/original — no real product screen, no real streaming platform logo or UI, no ad-skipping depicted. |
| `src/assets/illustrations/hero-atmosphere-stars.svg` | Decorative starfield texture: a scattered field of small low-opacity blush-white dots, used as an ambient background layer inside the Hero's dark atmospheric scene panel. 400×500 viewBox. | Purely decorative texture, not a UI screenshot. |

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
    ├── hero-bunny-skip.svg                     original, hand-authored SVG
    ├── hero-bunny-skyline.svg                  original, hand-authored SVG (unused)
    ├── feature-rules-as-data.svg               original, hand-authored SVG
    ├── feature-zero-telemetry.svg              original, hand-authored SVG
    ├── feature-element-picker.svg              original, hand-authored SVG
    ├── sun-disc-motif.svg                      original, hand-authored SVG
    └── hero-atmosphere-stars.svg               original, hand-authored SVG
```
