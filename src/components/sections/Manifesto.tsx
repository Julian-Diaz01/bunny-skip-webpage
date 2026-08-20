import { ArrowRightGlyph } from "@/components/Cta"
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
      className="relative flex min-h-svh scroll-mt-24 flex-col justify-center overflow-hidden bg-sun-deep py-14 text-sun-foreground sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-10">
        <Reveal className="relative mx-auto max-w-[52rem] text-center">
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.02em] uppercase">
            No backend.
            <br />
            No telemetry.
            <br />
            No eval.
          </h2>
          <p className="mx-auto mt-6 max-w-[38ch] font-body text-lg leading-[1.5] italic sm:text-xl">
            A tool that runs on every streaming page you open earns its
            trust in specifics, not a footnote — so here they are, in full.
          </p>
          <a
            href={PRIVACY_POLICY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm font-display text-sm font-semibold tracking-[0.04em] text-sun-foreground uppercase underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-sun-deep"
          >
            Read the privacy policy
            <ArrowRightGlyph className="size-3.5" />
          </a>
        </Reveal>

        <Reveal
          delayMs={140}
          className="mt-8 grid grid-cols-1 gap-4 text-left sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FACTS.map((fact) => (
            <div
              key={fact.title}
              className="rounded-2xl border border-sun-foreground/20 bg-sun-foreground/[0.06] p-6"
            >
              <h3 className="font-display text-sm font-semibold tracking-[0.06em] uppercase">
                {fact.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed">
                {fact.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export { Manifesto }
