import icon48 from "@/assets/extension/icons/icon48.png"
import { GithubMark } from "@/components/icons/GithubMark"
import {
  CHROME_STORE_URL,
  GITHUB_URL,
  LICENSE_URL,
  PRIVACY_POLICY_URL,
} from "@/lib/links"

const LINKS = [
  { href: GITHUB_URL, label: "GitHub" },
  { href: CHROME_STORE_URL, label: "Chrome Web Store" },
  { href: PRIVACY_POLICY_URL, label: "Privacy Policy" },
  { href: LICENSE_URL, label: "MIT License" },
]

function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-10 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-3">
          <img src={icon48} alt="" width={32} height={32} className="rounded-md" />
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
          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm text-paper/70">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-sun focus-visible:text-sun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-night"
                >
                  {link.label === "GitHub" && (
                    <GithubMark className="size-3.5" aria-hidden="true" />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-paper/10 px-6 py-6 sm:px-10">
        <p className="font-body text-xs text-paper/60">
          Bunny Skip is an independent, open-source project. Not affiliated
          with or endorsed by any streaming platform.
        </p>
      </div>
    </footer>
  )
}

export { Footer }
