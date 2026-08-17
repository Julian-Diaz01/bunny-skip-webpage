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
    <section id="install" className="bg-paper py-24 text-paper-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold uppercase sm:text-5xl">
            Install
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-paper-foreground/70">
            Install from the Chrome Web Store, or read every line first — the
            source is the same code either way.
          </p>
        </Reveal>

        <Reveal
          delayMs={60}
          className="mt-12 grid gap-5 sm:grid-cols-2"
        >
          {PROOF_SHOTS.map((shot) => (
            <figure
              key={shot.src}
              className="overflow-hidden rounded-2xl border border-paper-border bg-card"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="border-t border-paper-border px-5 py-3 font-body text-sm text-paper-foreground/70">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-between gap-8 rounded-3xl border border-paper-border bg-card p-8 sm:p-10">
            <div>
              <img
                src={icon128}
                alt="Bunny Skip extension icon"
                width={56}
                height={56}
                className="rounded-xl"
              />
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight uppercase">
                Chrome Web Store
              </h3>
              <p className="mt-2 font-body leading-relaxed text-paper-foreground/70">
                The published listing. One click, kept up to date
                automatically like any other extension.
              </p>
              <p className="mt-4 font-body text-xs text-paper-foreground/70 break-all">
                {CHROME_STORE_ID}
              </p>
            </div>
            <CtaCircle href={CHROME_STORE_URL} tone="light">
              Install
              <br />
              now
            </CtaCircle>
          </Reveal>

          <Reveal
            delayMs={100}
            className="flex flex-col justify-between gap-8 rounded-3xl border border-night bg-night p-8 text-paper sm:p-10"
          >
            <div>
              <span className="inline-flex size-14 items-center justify-center rounded-xl bg-paper/10">
                <GithubMark className="size-7" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight uppercase">
                GitHub source
              </h3>
              <p className="mt-2 font-body leading-relaxed text-paper/70">
                MIT licensed. Read the content script, the storage schema,
                every rule — before you decide to trust it on a page that
                asks for host permissions.
              </p>
              <p className="mt-4 font-body text-xs text-paper/65">
                Julian-Diaz01/bunny-skip-extension
              </p>
            </div>
            <CtaCircle href={GITHUB_URL} tone="dark">
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
