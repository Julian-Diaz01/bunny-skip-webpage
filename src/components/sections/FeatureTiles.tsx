import featureElementPicker from "@/assets/illustrations/feature-element-picker.svg"
import featureRulesAsData from "@/assets/illustrations/feature-rules-as-data.svg"
import featureZeroTelemetry from "@/assets/illustrations/feature-zero-telemetry.svg"
import { Reveal } from "@/components/Reveal"

const TILES = [
  {
    src: featureRulesAsData,
    alt: "Illustration of a stack of labeled data rows with pill toggles, representing a match rule stored as data.",
    title: "Rules are data",
    body: "Every skip target is a selector string in storage, not a line of per-site JavaScript. A broken rule gets re-picked, not patched and redeployed.",
  },
  {
    src: featureZeroTelemetry,
    alt: "Illustration of a shield with broadcast signal arcs struck through and dissolving into fading dots, representing zero telemetry.",
    title: "Zero telemetry",
    body: "No backend, no analytics, no network calls. What runs on the page is what you can read in the source — nothing is sent anywhere.",
  },
  {
    src: featureElementPicker,
    alt: "Illustration of a crosshair cursor selecting a pill-shaped button inside a dashed selection box, representing the element picker.",
    title: "Element picker",
    body: "Point at a button once and Bunny Skip captures it as a new rule. That's how support for a platform without seed rules gets added.",
  },
]

function FeatureTiles() {
  return (
    <section className="bg-paper py-24 text-paper-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold uppercase sm:text-5xl">
            Built to stay honest
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-paper-foreground/70">
            Three decisions carry the whole trust story.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal
              key={tile.title}
              delayMs={i * 90}
              className="flex flex-col overflow-hidden rounded-2xl border border-paper-border bg-night text-paper"
            >
              <div className="aspect-square w-full overflow-hidden bg-night">
                <img
                  src={tile.src}
                  alt={tile.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight uppercase">
                  {tile.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-paper/70">
                  {tile.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeatureTiles }
