import { BlueprintDiagram } from "@/components/diagrams/BlueprintDiagram"
import { Reveal } from "@/components/Reveal"

const STEPS = [
  {
    n: "01",
    title: "A rule matches",
    body: "Every skip button — Netflix's, Hulu's, Paramount+'s — is stored as a plain selector string, not hardcoded per-site JavaScript. When the page matches a saved rule, Bunny Skip finds the element.",
  },
  {
    n: "02",
    title: "It clicks once",
    body: "The matched button gets exactly the click a viewer would give it — nothing more. No ads, paywalls, or DRM content are ever touched; the mechanism only ever reaches the button you picked.",
  },
  {
    n: "03",
    title: "It stays live",
    body: "Edit a rule in the popup and chrome.storage.onChanged pushes the change straight into the running content script. A broken selector gets re-picked, not redeployed — no code change, no reload.",
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-night py-32 text-paper sm:py-48 lg:py-64"
    >
      <div className="mx-auto max-w-[72rem] px-6 sm:px-8 lg:px-10">
        <Reveal className="max-w-[36rem] text-left">
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.0] font-semibold tracking-[-0.015em] uppercase">
            How it works
          </h2>
          <p className="mt-6 font-body text-lg leading-[1.55] text-paper/70 italic sm:text-xl">
            One mechanism, run the same way on every supported platform.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-14 sm:mt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <ol className="order-2 grid grid-cols-1 gap-4 text-left lg:order-1">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                delayMs={i * 70}
                key={step.n}
                className="rounded-2xl border border-night-border bg-night-muted/60 p-7 transition-colors duration-200 hover:border-sun/40 sm:p-8"
              >
                <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-sun-muted uppercase sm:text-xs">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-[1.375rem] leading-[1.15] font-semibold tracking-[-0.01em] uppercase sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[38ch] font-body text-base leading-[1.7] text-paper/70 sm:text-[1.0625rem]">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delayMs={140}
            className="relative order-1 mx-auto w-full max-w-[30rem] lg:order-2 lg:max-w-none"
          >
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/10 blur-2xl"
            />
            <BlueprintDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export { HowItWorks }
