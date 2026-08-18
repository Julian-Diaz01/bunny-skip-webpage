import icon128 from "@/assets/extension/icons/icon128.png"
import screenshotAddRule from "@/assets/extension/store-assets/screenshot-3-add-rule.png"
import screenshotThisSite from "@/assets/extension/store-assets/screenshot-1-this-site.png"
import { CtaCircle } from "@/components/Cta"
import { Reveal } from "@/components/Reveal"
import { GithubMark } from "@/components/icons/GithubMark"
import { CHROME_STORE_ID, CHROME_STORE_URL, GITHUB_URL } from "@/lib/links"

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
      className="scroll-mt-24 bg-paper py-28 text-paper-foreground sm:py-40 lg:py-56"
    >
      <div className="mx-auto max-w-[72rem] px-6 sm:px-8 lg:px-10">
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
          className="relative mx-auto mt-16 grid w-full max-w-[64rem] gap-6 sm:mt-20 sm:grid-cols-2"
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

        <div className="mx-auto mt-24 grid max-w-[64rem] gap-4 sm:mt-32 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-paper-border bg-card p-8 text-center sm:p-10 sm:text-left">
            <img
              src={icon128}
              alt="Bunny Skip extension icon"
              width={56}
              height={56}
              className="mx-auto rounded-xl sm:mx-0"
            />
            <h3 className="mt-6 font-display text-[1.375rem] leading-[1.15] font-semibold tracking-[-0.01em] uppercase sm:text-2xl">
              Chrome Web Store
            </h3>
            <p className="mt-3 font-body text-base leading-[1.7] text-paper-foreground/70 sm:text-[1.0625rem]">
              The published listing. One click, kept up to date
              automatically like any other extension.
            </p>
            <p className="mt-4 font-body text-sm break-all text-paper-foreground/60">
              {CHROME_STORE_ID}
            </p>
            <CtaCircle
              href={CHROME_STORE_URL}
              tone="light"
              className="mx-auto mt-10 sm:mx-0"
            >
              Install
              <br />
              now
            </CtaCircle>
          </Reveal>

          <Reveal
            delayMs={100}
            className="rounded-2xl border border-night bg-night p-8 text-center text-paper sm:p-10 sm:text-left"
          >
            <span className="mx-auto inline-flex size-14 items-center justify-center rounded-xl border border-paper/25 text-paper sm:mx-0">
              <GithubMark className="size-7" />
            </span>
            <h3 className="mt-6 font-display text-[1.375rem] leading-[1.15] font-semibold tracking-[-0.01em] uppercase sm:text-2xl">
              GitHub source
            </h3>
            <p className="mt-3 font-body text-base leading-[1.7] text-paper/70 sm:text-[1.0625rem]">
              MIT licensed. Read the content script, the storage schema,
              every rule — before you decide to trust it on a page that
              asks for host permissions.
            </p>
            <p className="mt-4 font-body text-sm text-paper/60">
              Julian-Diaz01/bunny-skip-extension
            </p>
            <CtaCircle
              href={GITHUB_URL}
              tone="dark"
              className="mx-auto mt-10 sm:mx-0"
            >
              View
              <br />
              source
            </CtaCircle>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export { Install }
