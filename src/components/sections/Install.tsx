import screenshotAddRule from "@/assets/extension/store-assets/screenshot-3-add-rule.png"
import screenshotThisSite from "@/assets/extension/store-assets/screenshot-1-this-site.png"
import { Reveal } from "@/components/Reveal"

const PROOF_SHOTS = [
  {
    src: screenshotThisSite,
    alt: "Real screenshot of the Bunny Skip popup open on a streaming page, showing the saved rule for the current site.",
    caption: "The popup, open on a streaming page you're already watching.",
  },
  {
    src: screenshotAddRule,
    alt: "Real screenshot of the Bunny Skip element picker mid-selection, capturing a new skip-button rule.",
    caption: "Adding a rule by pointing the element picker at the button.",
  },
]

function Install() {
  return (
    <section
      id="install"
      className="flex min-h-svh scroll-mt-24 flex-col justify-center bg-paper py-20 text-paper-foreground sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.0] font-semibold tracking-[-0.015em] uppercase">
            Install Bunny Skip
          </h2>
          <p className="mt-6 font-body text-lg leading-[1.55] text-paper-foreground/70 sm:text-xl">
            Install from the Chrome Web Store, or read every line first — the
            source is the same code either way.
          </p>
        </Reveal>

        <Reveal
          delayMs={140}
          className="relative mx-auto mt-10 grid w-full max-w-[56rem] gap-6 sm:mt-14 sm:grid-cols-2"
        >
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/10 blur-2xl"
          />
          {PROOF_SHOTS.map((shot) => (
            <figure key={shot.src}>
              <div className="overflow-hidden rounded-2xl border border-paper-border">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-center font-body text-sm leading-relaxed text-paper-foreground/60">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export { Install }
