import { useEffect, useRef, useState } from "react"

/**
 * Scroll-triggered reveal. Content is visible by default — the `.reveal`
 * utility in index.css never sets `opacity: 0` on its own, so a visitor
 * without JS, with `prefers-reduced-motion: reduce`, or viewing a
 * pre-hydration/static render always sees real content, never a blank
 * panel.
 *
 * Motion is an opt-in enhancement this hook applies itself: once mounted,
 * if IntersectionObserver is available and the element isn't already in
 * the viewport, it adds the `reveal-pending` class (hides + offsets it)
 * and removes that class the moment the element scrolls into view. CSS is
 * never the one reaching for `opacity: 0` — JS is the only thing that can
 * put an element in the pending state, and it only does so for elements
 * about to be animated in.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") return

    const rect = node.getBoundingClientRect()
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0
    if (alreadyInView) return

    setIsPending(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPending(false)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: "0px 0px -12% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isPending }
}
