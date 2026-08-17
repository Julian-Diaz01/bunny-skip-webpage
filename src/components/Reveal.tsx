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
  const { ref, isPending } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      {...props}
      className={cn("reveal", isPending && "reveal-pending", className)}
      style={
        delayMs
          ? { transitionDelay: `${delayMs}ms`, ...props.style }
          : props.style
      }
    >
      {children}
    </Tag>
  )
}

export { Reveal }
