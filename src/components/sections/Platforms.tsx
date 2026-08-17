import { Reveal } from "@/components/Reveal"
import { PlatformMark } from "@/components/marks/PlatformMark"
import { PLATFORMS } from "@/lib/platforms"
import { cn } from "@/lib/utils"

function Platforms() {
  return (
    <section id="platforms" className="bg-paper py-24 text-paper-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold uppercase sm:text-5xl">
            Reaches seven platforms
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-paper-foreground/70">
            One extension, one mechanism, run wherever you actually watch.
            Netflix ships ready to go; every other platform learns its rule
            the first time you point the element picker at its button.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PLATFORMS.map((platform, i) => (
            <Reveal
              as="li"
              delayMs={i * 60}
              key={platform.name}
              className={cn(
                "group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-paper-border bg-card px-6 py-9 text-center transition-colors hover:border-sun-border",
                platform.seeded && "sm:col-span-2 sm:flex-row sm:justify-start sm:text-left"
              )}
            >
              <span
                aria-hidden="true"
                className="absolute -top-10 -right-10 size-28 rounded-full bg-sun/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-60"
              />
              <PlatformMark platform={platform} size="lg" tone="light" />
              <div className="relative">
                <p className="font-display text-base font-semibold tracking-tight uppercase">
                  {platform.name}
                </p>
                {platform.seeded ? (
                  <p className="mt-1 font-body text-sm text-sun-foreground">
                    <span className="inline-block rounded-full border border-sun-border bg-sun-muted/60 px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase">
                      Ships with seed rules
                    </span>
                  </p>
                ) : (
                  <p className="mt-1 font-body text-sm text-paper-foreground/55 italic">
                    learned via element picker
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Platforms }
