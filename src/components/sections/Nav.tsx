import icon48 from "@/assets/extension/icons/icon48.png"

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#platforms", label: "Platforms" },
  { href: "#privacy", label: "Privacy" },
  { href: "#install", label: "Install" },
]

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-[0.08em] text-paper uppercase"
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
        <ul className="hidden items-center gap-8 font-body text-sm text-paper/80 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="transition-colors hover:text-sun focus-visible:text-sun focus-visible:outline-none"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export { Nav }
