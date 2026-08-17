import { cn } from "@/lib/utils"
import type { Platform } from "@/lib/platforms"

/**
 * Authored platform badge — not a reproduction of any platform's real logo.
 * Every mark shares one system: a circular sun-disc glow (the site's
 * signature motif) behind a monogram set in the display face, in one
 * consistent stroke/ring weight, so the seven read as a family.
 */
function PlatformMark({
  platform,
  size = "md",
  tone = "light",
  className,
}: {
  platform: Platform
  size?: "sm" | "md" | "lg"
  tone?: "light" | "dark"
  className?: string
}) {
  const dims = {
    sm: "size-11 text-xs",
    md: "size-16 text-base",
    lg: "size-20 text-xl",
  }[size]

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full",
        dims,
        className
      )}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            tone === "light"
              ? "radial-gradient(circle at 50% 42%, var(--color-sun-muted) 0%, var(--color-paper-muted) 68%, transparent 100%)"
              : "radial-gradient(circle at 50% 42%, color-mix(in oklch, var(--color-sun) 55%, transparent) 0%, transparent 72%)",
        }}
      />
      <span
        className={cn(
          "absolute inset-0 rounded-full border",
          tone === "light" ? "border-sun-border/50" : "border-sun/40"
        )}
      />
      <span
        className={cn(
          "relative font-display leading-none font-semibold tracking-tight",
          tone === "light" ? "text-night" : "text-paper"
        )}
      >
        {platform.mark}
      </span>
    </span>
  )
}

export { PlatformMark }
