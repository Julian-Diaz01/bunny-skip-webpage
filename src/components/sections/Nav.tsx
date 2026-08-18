import { useEffect, useState, type SVGProps } from "react"

import icon48 from "@/assets/extension/icons/icon48.png"
import { CtaLink } from "@/components/Cta"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#platforms", label: "Platforms" },
  { href: "#privacy", label: "Privacy" },
  { href: "#install", label: "Install" },
]

function MenuGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.5 4.5h11" />
      <path d="M2.5 8h11" />
      <path d="M2.5 11.5h11" />
    </svg>
  )
}

function CloseGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.5 3.5 12.5 12.5" />
      <path d="M12.5 3.5 3.5 12.5" />
    </svg>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel")
    if (!sentinel || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-[220ms] ease-out",
        scrolled || menuOpen
          ? "border-paper-border/60 bg-paper"
          : "border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[72rem] items-center justify-between px-6 sm:h-[3.25rem] sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-sm font-display text-sm font-semibold tracking-[0.08em] text-paper-foreground uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <img
            src={icon48}
            alt=""
            width={28}
            height={28}
            className="rounded-md"
          />
          Bunny Skip
        </a>
        <div className="flex items-center">
          <ul className="hidden items-center gap-8 font-body text-[0.8125rem] text-paper-foreground/75 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="rounded-sm transition-colors hover:text-sun-border focus-visible:text-sun-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaLink
            href="#install"
            variant="secondary"
            external={false}
            className="ml-6 hidden px-4 py-2 text-xs sm:inline-flex"
          >
            Install
          </CtaLink>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-4 flex size-9 items-center justify-center rounded-sm text-paper-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:hidden"
          >
            {menuOpen ? (
              <CloseGlyph className="size-5" />
            ) : (
              <MenuGlyph className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav-panel"
          className="border-t border-paper-border/60 bg-paper px-6 pt-2 pb-6 md:hidden"
        >
          <ul className="flex flex-col gap-1 font-body text-base text-paper-foreground/85">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="block rounded-sm py-2.5 transition-colors hover:text-sun-border focus-visible:text-sun-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaLink
            href="#install"
            variant="secondary"
            external={false}
            className="mt-4 w-full justify-center px-4 py-2.5 text-xs"
            onClick={() => setMenuOpen(false)}
          >
            Install
          </CtaLink>
        </div>
      )}
    </header>
  )
}

export { Nav }
