import sunDiscMotif from "@/assets/illustrations/sun-disc-motif.svg"
import { Reveal } from "@/components/Reveal"
import { PRIVACY_POLICY_URL } from "@/lib/links"

const FACTS = [
  {
    title: "No backend",
    body: "There is no server to log into and nothing stored off your machine. The extension runs entirely inside your browser.",
  },
  {
    title: "No telemetry",
    body: "No analytics, no tracking pixels, no usage data sent anywhere. What the extension does on a page stays on that page.",
  },
  {
    title: "No eval",
    body: "Rules are matched as selector strings, never executed as code. A rule describes a button; it can't reach past it.",
  },
  {
    title: "Never touches ads or DRM",
    body: "The mechanism only ever reaches the skip button you picked — ads, paywalls, and DRM content are explicitly out of scope.",
  },
]

function Manifesto() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden bg-sun py-24 text-sun-foreground sm:py-32"
    >
      <img
        src={sunDiscMotif}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 -right-1/4 w-[70vw] max-w-3xl opacity-[0.12] mix-blend-multiply sm:-right-40 sm:top-1/2 sm:-translate-y-1/2"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <Reveal>
            <h2 className="font-display text-5xl leading-[0.95] font-semibold uppercase sm:text-6xl lg:text-7xl">
              No backend.
              <br />
              No telemetry.
              <br />
              No eval.
            </h2>
            <p className="mt-7 max-w-md font-body text-lg leading-relaxed italic opacity-85">
              A tool that runs on every streaming page you open earns its
              trust in specifics, not a footnote — so here they are, in full.
            </p>
            <a
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold tracking-[0.04em] uppercase underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Read the privacy policy
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <Reveal delayMs={120} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {FACTS.map((fact) => (
              <div key={fact.title} className="border-t-2 border-sun-foreground/25 pt-4">
                <h3 className="font-display text-base font-semibold tracking-tight uppercase">
                  {fact.title}
                </h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed opacity-80">
                  {fact.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export { Manifesto }
