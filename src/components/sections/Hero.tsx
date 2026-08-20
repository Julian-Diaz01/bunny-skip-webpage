import heroBunnySkip from "@/assets/illustrations/hero-bunny-skip.svg"
import { AuraGrain } from "@/components/AuraGrain"
import { BunnySkipLoop } from "@/components/BunnySkipLoop"
import { CtaLink } from "@/components/Cta"
import { ExtensionMark } from "@/components/icons/ExtensionMark"
import { GithubMark } from "@/components/icons/GithubMark"
import { CHROME_STORE_URL, GITHUB_URL } from "@/lib/links"
import {LaptopBrowserMock} from "@/components/LaptopBrowserMock.tsx";

function Hero() {
  return (
    <section
      id="top"
      className="aura-bg flex flex-col text-paper-foreground scroll-mt-24"
    >
      <div className="aura-layer-1" aria-hidden="true" />
      <div className="aura-layer-2" aria-hidden="true" />
      <AuraGrain />
      <BunnySkipLoop />

      <div
        id="nav-sentinel"
        aria-hidden="true"
        className="absolute top-6 h-px w-full"
      />

      <div className="aura-content mx-auto flex w-full max-w-[72rem] flex-1 flex-col justify-center px-6 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="max-w-[17ch] font-display text-[clamp(1.875rem,3.6vw,3rem)] leading-[1.08] font-semibold tracking-[-0.01em] uppercase">
              Skip the intro.
              <br />
              Skip the recap.
              <br />
              <span className="text-sun-deep">
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

            <LaptopBrowserMock className="relative z-10 w-full" />

            <img
              src={heroBunnySkip}
              alt="Illustration of the Bunny Skip mascot mid-leap toward a glowing skip-forward pill button haloed by the site's sun/moon disc motif."
              className="absolute -top-[25%] -right-[10%] z-1 w-[30%] sm:w-[32%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
