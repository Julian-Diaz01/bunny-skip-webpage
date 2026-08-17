import heroIllustration from "@/assets/illustrations/hero-bunny-skyline.svg"
import { CtaLink } from "@/components/Cta"
import { ExtensionMark } from "@/components/icons/ExtensionMark"
import { GithubMark } from "@/components/icons/GithubMark"
import { PlatformMark } from "@/components/marks/PlatformMark"
import { Nav } from "@/components/sections/Nav"
import { CHROME_STORE_URL, GITHUB_URL } from "@/lib/links"
import { PLATFORMS } from "@/lib/platforms"

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-paper"
    >
      <img
        src={heroIllustration}
        alt="A bunny mid-leap over a skyline built from streaming-platform UI chrome — a play glyph, a progress-bar tower, a rounded &quot;Skip Intro&quot; pill — backlit by the site's sun/moon disc. Original synthetic illustration, not a real product screen."
        className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
        style={{ transform: "scale(1.32) translate(9%, -4%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 110% at 18% 100%, var(--color-night) 0%, color-mix(in oklch, var(--color-night) 82%, transparent) 32%, color-mix(in oklch, var(--color-night) 35%, transparent) 55%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-night via-night/15 to-transparent"
      />

      <Nav />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-16 pt-40 sm:px-10 sm:pb-20">
        <h1 className="max-w-3xl font-display text-[13vw] leading-[0.95] font-semibold tracking-tight uppercase sm:text-6xl md:text-7xl lg:text-[4.75rem]">
          Skip the intro.
          <br />
          Skip the recap.
          <br />
          <span className="text-sun">Never click next episode.</span>
        </h1>

        <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-paper/85 sm:text-xl">
          Bunny Skip watches for the button and clicks it for you, across
          seven streaming platforms. Match rules are stored as data you can
          read, not code you have to trust — and nothing ever phones home.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaLink
            href={CHROME_STORE_URL}
            variant="invert"
            icon={<ExtensionMark className="size-4" />}
          >
            Chrome Web Store
          </CtaLink>
          <CtaLink
            href={GITHUB_URL}
            variant="invert-outline"
            icon={<GithubMark className="size-4" />}
          >
            View source
          </CtaLink>
        </div>

        <ul className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-paper/15 pt-7">
          {PLATFORMS.map((platform) => (
            <li key={platform.name} className="flex items-center gap-2.5">
              <PlatformMark platform={platform} size="sm" tone="dark" />
              <span className="font-body text-sm text-paper/70">
                {platform.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Hero }
