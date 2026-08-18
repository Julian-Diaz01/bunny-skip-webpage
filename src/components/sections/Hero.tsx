import flowMotif from "@/assets/illustrations/flow-motif.svg"
import screenshotThisSite from "@/assets/extension/store-assets/screenshot-1-this-site.png"
import screenshotAddRule from "@/assets/extension/store-assets/screenshot-3-add-rule.png"
import heroAtmosphereStars from "@/assets/illustrations/hero-atmosphere-stars.svg"
import heroBunnySkip from "@/assets/illustrations/hero-bunny-skip.svg"
import sunDiscMotif from "@/assets/illustrations/sun-disc-motif.svg"
import { CtaLink } from "@/components/Cta"
import { ExtensionMark } from "@/components/icons/ExtensionMark"
import { GithubMark } from "@/components/icons/GithubMark"
import { CHROME_STORE_URL, GITHUB_URL } from "@/lib/links"

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper text-paper-foreground scroll-mt-24"
    >
      <img
        src={flowMotif}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] w-full opacity-70 mix-blend-multiply"
      />

      <div
        id="nav-sentinel"
        aria-hidden="true"
        className="absolute top-6 h-px w-full"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[72rem] flex-1 flex-col justify-center px-6 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="max-w-[17ch] font-display text-[clamp(1.875rem,3.6vw,3rem)] leading-[1.08] font-semibold tracking-[-0.01em] uppercase">
              Skip the intro.
              <br />
              Skip the recap.
              <br />
              <span className="text-sun">
                Never click
                <br />
                next episode.
              </span>
            </h1>

            <p className="mt-6 max-w-[42ch] font-body text-lg leading-[1.55] text-paper-foreground/70 sm:text-xl">
              Bunny Skip watches for the button and clicks it for you —
              across seven streaming platforms, with nothing ever phoning
              home.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <CtaLink
                href={CHROME_STORE_URL}
                variant="primary"
                icon={<ExtensionMark className="size-4" />}
                className="whitespace-nowrap"
              >
                Chrome Web Store
              </CtaLink>
              <CtaLink
                href={GITHUB_URL}
                variant="secondary"
                icon={<GithubMark className="size-4" />}
                className="whitespace-nowrap"
              >
                View source
              </CtaLink>
            </div>

            <p className="mt-6 font-body text-sm text-paper-foreground/60">
              Works on Netflix, Prime Video, Disney+, Hulu, Max, Apple TV+,
              and Paramount+.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-[25rem]">
            {/* ambient bloom bleeding past the panel edges, onto the paper ground — Glow-Not-Shadow depth, not a shadow */}
            <span
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-sun/15 blur-2xl sm:-inset-10"
            />
            <span
              aria-hidden="true"
              className="absolute -inset-2 rounded-[2rem] bg-sun-muted/20 blur-xl"
            />

            {/* the dark atmospheric scene: a framed night-sky panel floating on the light Hero ground */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-night-border bg-night">
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 72% 8%, var(--color-night-muted) 0%, var(--color-night) 55%, var(--color-night) 100%)",
                }}
              />
              <img
                src={heroAtmosphereStars}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 size-full opacity-70 mix-blend-screen"
              />

              {/* the signature disc, standing in for a glowing moon low over the scene */}
              <span
                aria-hidden="true"
                className="absolute -top-10 -right-10 size-36 rounded-full bg-sun/30 blur-2xl sm:size-44"
              />
              <img
                src={sunDiscMotif}
                alt=""
                aria-hidden="true"
                className="absolute -top-8 -right-8 w-32 opacity-90 sm:w-40"
              />

              {/* two real product screenshots, layered and angled like floating device panels */}
              <span
                aria-hidden="true"
                className="absolute top-[8%] right-[2%] h-[38%] w-[56%] rotate-[7deg] rounded-xl bg-sun/15 blur-xl"
              />
              <img
                src={screenshotAddRule}
                alt="Real screenshot of the Bunny Skip popup on the Add Rule screen, showing the point-and-click selector picker for creating a new skip rule."
                className="absolute top-[8%] right-[2%] w-[56%] rotate-[7deg] rounded-xl border border-night-border/70"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-[10%] left-[4%] h-[48%] w-[76%] -rotate-[5deg] rounded-xl bg-sun/20 blur-2xl"
              />
              <img
                src={screenshotThisSite}
                alt="Real screenshot of the Bunny Skip popup open on a streaming page, showing the saved rule for the current site."
                className="absolute bottom-[10%] left-[4%] w-[76%] -rotate-[5deg] rounded-xl border border-night-border/70"
              />
            </div>

            {/* the bunny mascot, leaping in front of the scene and breaking past the panel's edge */}
            <img
              src={heroBunnySkip}
              alt="Illustration of the Bunny Skip mascot mid-leap toward a glowing skip-forward pill button haloed by the site's sun/moon disc motif."
              className="absolute -bottom-6 left-1/2 w-32 -translate-x-1/2 sm:w-36 lg:-bottom-8 lg:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
