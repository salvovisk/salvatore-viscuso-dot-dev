import { useEffect, type RefObject } from 'react'

interface UseRevealOptions {
  threshold?: number
}

export function useReveal(ref: RefObject<HTMLElement | null>, { threshold = 0.15 }: UseRevealOptions = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold])
}
