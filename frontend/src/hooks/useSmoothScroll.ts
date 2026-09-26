import { useCallback } from 'react'

const FALLBACK_HEADER_OFFSET = 64

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    // Measure the real header instead of hardcoding: it shrinks from h-16 to
    // h-14 once the page is scrolled, so a fixed offset is always wrong by
    // 8-24px depending on scroll position.
    const header = document.querySelector('header')
    const headerOffset = header?.offsetHeight ?? FALLBACK_HEADER_OFFSET

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }, [])

  return scrollToSection
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}
