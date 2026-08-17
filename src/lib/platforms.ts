export type Platform = {
  name: string
  mark: string
  seeded?: boolean
}

// Supported platforms per PRODUCT.md. Netflix ships with seed rules out of
// the box; every other platform is reached by capturing a rule once with the
// in-extension element picker.
export const PLATFORMS: Platform[] = [
  { name: "Netflix", mark: "N", seeded: true },
  { name: "Prime Video", mark: "PV" },
  { name: "Disney+", mark: "D+" },
  { name: "Hulu", mark: "H" },
  { name: "Max", mark: "M" },
  { name: "Apple TV+", mark: "TV+" },
  { name: "Paramount+", mark: "P+" },
]
