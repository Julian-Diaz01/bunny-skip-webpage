import { useEffect, useRef, useState } from "react"

/**
 * Scroll-triggered reveal. Content is visible by default (the `.reveal`
 * utility in index.css only dims/offsets it under
 * `prefers-reduced-motion: no-preference`), so this hook is a pure
 * enhancement: it just flips a class once the element crosses the viewport,
 * and does nothing harmful if IntersectionObserver is unavailable.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
