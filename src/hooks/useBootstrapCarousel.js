import { useEffect, useRef } from 'react'
import { Carousel } from 'bootstrap'

/**
 * Bootstrap's own data-bs-ride="carousel" auto-play only ever triggers
 * once, on the browser's 'load' event. In a client-side-routed SPA that
 * only fires on the very first page load, so a carousel on a page you
 * navigate to later (or back to) never starts auto-cycling on its own.
 * This hook manually creates/starts the carousel every time its
 * component mounts, so auto-play works no matter how you arrived.
 */
export default function useBootstrapCarousel(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const instance = Carousel.getOrCreateInstance(ref.current, {
      interval: 5000,
      ride: 'carousel',
      wrap: true,
      pause: 'hover',
      ...options,
    })
    instance.cycle()

    return () => instance.dispose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
