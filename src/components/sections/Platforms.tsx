import screenshotOtherSites from "@/assets/extension/store-assets/screenshot-2-other-sites.png"
import { Reveal } from "@/components/Reveal"
import { PlatformMark } from "@/components/marks/PlatformMark"
import { PLATFORMS } from "@/lib/platforms"
import { cn } from "@/lib/utils"

function Platforms() {
  return (
    <section
      id="platforms"
      className="flex min-h-svh scroll-mt-24 flex-col justify-center bg-paper py-16 text-paper-foreground sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.0] font-semibold tracking-[-0.015em] uppercase">
            Reaches seven platforms
          </h2>
          <p className="mt-4 font-body text-lg leading-[1.55] text-paper-foreground/70 sm:text-xl">
            Netflix ships ready to go; every other platform learns its rule
            the first time you point the element picker at its button.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <Reveal
            delayMs={140}
            className="relative mx-auto w-full max-w-[22rem] lg:max-w-none"
          >
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/10 blur-2xl"
            />
            <img
              src={screenshotOtherSites}
              alt="Real screenshot of the Bunny Skip popup showing its saved rules on a streaming platform outside Netflix's seed set."
              className="h-auto w-full rounded-2xl border border-paper-border"
              loading="lazy"
            />
            <figcaption className="mt-3 text-center font-body text-xs leading-relaxed text-paper-foreground/60 sm:text-sm">
              The popup's saved rules, on a platform outside Netflix's seed set.
            </figcaption>
          </Reveal>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {PLATFORMS.map((platform, i) => (
              <Reveal
                as="li"
                delayMs={Math.min(i, 5) * 70}
                key={platform.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <PlatformMark platform={platform} size="lg" tone="light" />
                <div>
                  <p
                    className={cn(
                      "font-display text-sm font-semibold tracking-[-0.01em] uppercase",
                      platform.seeded && "text-sun-border"
                    )}
                  >
                    {platform.name}
                  </p>
                  {platform.seeded ? (
                    <p className="mt-1.5">
                      <span className="inline-block rounded-full border border-sun/50 bg-sun/15 px-2 py-0.5 font-display text-[0.5625rem] font-semibold tracking-[0.08em] text-sun-muted uppercase">
                        Seed rules
                      </span>
                    </p>
                  ) : (
                    <p className="mt-1 font-body text-[0.6875rem] text-paper-foreground/60 italic">
                      learned via picker
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Platforms }
