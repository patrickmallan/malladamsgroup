import { useEffect, useState } from 'react'

/** Subtle parallax for hero layers; respects reduced motion via CSS elsewhere. */
export function useHeroParallax() {
  const [y, setY] = useState(0)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setY(window.scrollY * 0.11)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return y
}
