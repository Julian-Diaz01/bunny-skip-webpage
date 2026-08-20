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
      className="flex min-h-svh scroll-mt-24 flex-col justify-center bg-night py-16 text-paper sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-10">
        <Reveal className="max-w-[36rem] text-left">
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.0] font-semibold tracking-[-0.015em] uppercase">
            How it works
          </h2>
          <p className="mt-4 font-body text-lg leading-[1.55] text-paper/70 italic sm:text-xl">
            One mechanism, run the same way on every supported platform.
          </p>
        </Reveal>

        <div className="mt-6 grid items-center gap-8 sm:mt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <ol className="order-2 grid grid-cols-1 gap-2 text-left sm:grid-cols-3 lg:order-1 lg:grid-cols-1">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                delayMs={i * 70}
                key={step.n}
                className="rounded-2xl border border-night-border bg-night-muted/60 p-4 transition-colors duration-200 hover:border-sun/40 sm:p-5"
              >
                <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-sun-muted uppercase sm:text-xs">
                  {step.n}
                </p>
                <h3 className="mt-2 font-display text-lg leading-[1.15] font-semibold tracking-[-0.01em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-[1.45] text-paper/70">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delayMs={140}
            className="relative order-1 mx-auto w-full max-w-[26rem] lg:order-2 lg:mx-0 lg:ml-auto lg:max-w-[24rem]"
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
