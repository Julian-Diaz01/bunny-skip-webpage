import * as React from "react"

import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

function Reveal({
  as: Tag = "div",
  delayMs = 0,
  className,
  children,
  ...props
}: {
  as?: React.ElementType
  delayMs?: number
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { Reveal }
