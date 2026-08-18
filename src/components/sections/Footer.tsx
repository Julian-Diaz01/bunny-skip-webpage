import icon48 from "@/assets/extension/icons/icon48.png"
import { GithubMark } from "@/components/icons/GithubMark"
import {
  CHROME_STORE_URL,
  GITHUB_URL,
  LICENSE_URL,
  PRIVACY_POLICY_URL,
} from "@/lib/links"
import { PLATFORMS } from "@/lib/platforms"

const LINK_COLUMNS = [
  {
    heading: "Install",
    links: [{ href: CHROME_STORE_URL, label: "Chrome Web Store" }],
  },
  {
    heading: "Source",
    links: [
      { href: GITHUB_URL, label: "GitHub", icon: true },
      { href: LICENSE_URL, label: "MIT License" },
    ],
  },
  {
    heading: "Trust",
    links: [{ href: PRIVACY_POLICY_URL, label: "Privacy Policy" }],
  },
]

function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto max-w-[72rem] px-6 pt-24 pb-10 sm:px-8 lg:px-10">
        <div className="mb-16 flex items-center gap-3">
          <img
            src={icon48}
            alt=""
            width={32}
            height={32}
            className="rounded-md"
          />
          <div>
            <p className="font-display text-base font-semibold tracking-[0.06em] uppercase">
              Bunny Skip
            </p>
            <p className="mt-1 font-body text-sm text-paper/55 italic">
              Skips the button. Never the content.
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {LINK_COLUMNS.map((column) => (
              <div key={column.heading}>
                <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-paper/45 uppercase">
                  {column.heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-sm font-body text-sm text-paper/75 transition-colors hover:text-sun-muted focus-visible:text-sun-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-night"
                      >
                        {link.icon && (
                          <GithubMark className="size-3.5" aria-hidden="true" />
                        )}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-paper/45 uppercase">
                Supported
              </p>
              <ul className="mt-5 space-y-3">
                {PLATFORMS.map((platform) => (
                  <li
                    key={platform.name}
                    className="font-body text-sm text-paper/75"
                  >
                    {platform.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="mt-20 border-t border-paper/12 pt-8">
          <p className="font-body text-xs text-paper/60">
            Bunny Skip is an independent, open-source project. Not affiliated
            with or endorsed by any streaming platform.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
