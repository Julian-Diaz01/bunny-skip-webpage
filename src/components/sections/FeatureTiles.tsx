import featureElementPicker from "@/assets/illustrations/feature-element-picker.svg"
import featureRulesAsData from "@/assets/illustrations/feature-rules-as-data.svg"
import featureZeroTelemetry from "@/assets/illustrations/feature-zero-telemetry.svg"
import flowMotif from "@/assets/illustrations/flow-motif.svg"
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
    <section className="relative overflow-hidden bg-paper py-28 text-paper-foreground sm:py-40 lg:py-56">
      <img
        src={flowMotif}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%] w-full -scale-y-100 opacity-50 mix-blend-multiply"
      />

      <div className="relative mx-auto max-w-[72rem] px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.0] font-semibold tracking-[-0.015em] uppercase">
            Built to stay honest
          </h2>
          <p className="mt-6 font-body text-lg leading-[1.55] text-paper-foreground/70 sm:text-xl">
            Three decisions carry the whole trust story.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal
              key={tile.title}
              delayMs={i * 70}
              className="group relative flex flex-col items-center rounded-2xl border border-paper-border bg-card p-8 text-center transition-colors duration-200 hover:border-sun-border sm:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-sun/0 blur-2xl transition-colors duration-200 group-hover:bg-sun/10"
              />
              <img
                src={tile.src}
                alt={tile.alt}
                className="w-full max-w-[16rem] rounded-xl"
                loading="lazy"
              />
              <h3 className="mt-8 font-display text-[1.375rem] leading-[1.15] font-semibold tracking-[-0.01em] uppercase sm:text-2xl">
                {tile.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[34ch] font-body text-base leading-[1.7] text-paper-foreground/70 sm:text-[1.0625rem]">
                {tile.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeatureTiles }
