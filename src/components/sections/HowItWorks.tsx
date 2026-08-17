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
    <section id="how-it-works" className="bg-night py-24 text-paper sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-[1fr_1fr] lg:gap-8">
        <Reveal>
          <h2 className="max-w-md font-display text-4xl leading-[1.05] font-semibold uppercase sm:text-5xl">
            How it works
          </h2>
          <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-paper/70 italic">
            One mechanism, run the same way on every supported platform.
          </p>

          <ol className="relative mt-14 max-w-md">
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[15px] w-px bg-paper/15"
            />
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className={
                  i === STEPS.length - 1
                    ? "relative pl-12"
                    : "relative pb-10 pl-12"
                }
              >
                <span className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-full border border-sun/50 bg-night font-display text-xs font-semibold text-sun">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-semibold uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 font-body leading-relaxed text-paper/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal
          delayMs={120}
          className="rounded-2xl border border-paper/10 bg-night-muted/40 p-6 sm:p-10"
        >
          <BlueprintDiagram />
        </Reveal>
      </div>
    </section>
  )
}

export { HowItWorks }
