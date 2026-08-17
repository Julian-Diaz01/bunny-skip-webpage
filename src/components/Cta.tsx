import * as React from "react"

import { cn } from "@/lib/utils"

const EXTERNAL_PROPS = { target: "_blank", rel: "noreferrer" } as const

type CtaVariant = "primary" | "secondary" | "invert" | "invert-outline"

const VARIANT_CLASS: Record<CtaVariant, string> = {
  primary:
    "bg-night text-night-foreground border-night hover:bg-night/85 focus-visible:ring-sun",
  secondary:
    "bg-transparent text-night border-night/70 hover:bg-night hover:text-night-foreground focus-visible:ring-sun",
  invert:
    "bg-sun text-sun-foreground border-sun hover:bg-sun-muted focus-visible:ring-paper",
  "invert-outline":
    "bg-transparent text-paper border-paper/60 hover:bg-paper hover:text-night focus-visible:ring-sun",
}

/** Pill CTA in the site's own vocabulary — never a stock shadcn Button. */
function CtaLink({
  href,
  variant = "primary",
  icon,
  external = true,
  className,
  children,
  ...props
}: {
  href: string
  variant?: CtaVariant
  icon?: React.ReactNode
  external?: boolean
  className?: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border px-6 py-3 font-display text-sm font-medium tracking-[0.04em] uppercase transition-all duration-200",
        "focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none",
        "active:translate-y-px",
        VARIANT_CLASS[variant],
        className
      )}
      {...(external ? EXTERNAL_PROPS : {})}
      {...props}
    >
      {icon}
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  )
}

/** Circular CTA used on the two install-tier cards, per the disc motif. */
function CtaCircle({
  href,
  tone = "light",
  className,
  children,
  ...props
}: {
  href: string
  tone?: "light" | "dark"
  className?: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex size-28 shrink-0 flex-col items-center justify-center gap-1 rounded-full border-2 text-center font-display text-[0.7rem] font-semibold tracking-[0.06em] uppercase transition-all duration-200",
        "focus-visible:ring-3 focus-visible:ring-sun focus-visible:outline-none",
        "active:translate-y-px",
        tone === "light"
          ? "border-night bg-night text-night-foreground hover:bg-sun hover:border-sun hover:text-sun-foreground"
          : "border-sun bg-sun text-sun-foreground hover:bg-paper hover:border-paper hover:text-night",
        className
      )}
      {...EXTERNAL_PROPS}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="text-base transition-transform duration-200 group-hover:translate-y-0.5">
        ↓
      </span>
    </a>
  )
}

export { CtaLink, CtaCircle }
