import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref. When the element
 * scrolls into view it gets the `is-visible` class, which index.css uses
 * to fade + slide the element in. Respects prefers-reduced-motion via CSS.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
