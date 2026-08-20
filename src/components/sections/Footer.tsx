import * as React from "react"

import icon48 from "@/assets/extension/icons/icon48.png"
import { ExtensionMark } from "@/components/icons/ExtensionMark"
import { GithubMark } from "@/components/icons/GithubMark"
import { CHROME_STORE_URL, GITHUB_URL } from "@/lib/links"
import { cn } from "@/lib/utils"

const FOOTER_LINK_TONE = {
  invert:
    "border-sun bg-sun text-sun-foreground hover:bg-sun-muted hover:border-sun-muted focus-visible:ring-sun",
  outline:
    "border-paper/30 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-night focus-visible:ring-sun",
} as const

function FooterLink({
  href,
  tone,
  icon,
  children,
}: {
  href: string
  tone: keyof typeof FOOTER_LINK_TONE
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 font-display text-xs font-medium tracking-[0.03em] uppercase transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night focus-visible:outline-none",
        FOOTER_LINK_TONE[tone]
      )}
    >
      {icon}
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto max-w-[72rem] px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
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

          <div className="flex items-center gap-2">
            <FooterLink
              href={CHROME_STORE_URL}
              tone="invert"
              icon={<ExtensionMark className="size-3.5" />}
            >
              Chrome Web Store
            </FooterLink>
            <FooterLink
              href={GITHUB_URL}
              tone="outline"
              icon={<GithubMark className="size-3.5" />}
            >
              View source
            </FooterLink>
          </div>
        </div>

        <div className="mt-6 border-t border-paper/12 pt-4 text-center sm:text-left">
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
