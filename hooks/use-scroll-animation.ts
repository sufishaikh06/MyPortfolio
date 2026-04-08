"use client"

import { useEffect, useRef, useState, RefObject } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

// Overload 1: called with just options — returns { ref, isVisible }
export function useScrollAnimation(options?: UseScrollAnimationOptions): { ref: RefObject<HTMLElement | null>; isVisible: boolean }
// Overload 2: called with an external ref + options — returns just isVisible
export function useScrollAnimation(ref: RefObject<HTMLElement | null>, options?: UseScrollAnimationOptions): boolean

export function useScrollAnimation(
  refOrOptions?: RefObject<HTMLElement | null> | UseScrollAnimationOptions,
  maybeOptions?: UseScrollAnimationOptions
): { ref: RefObject<HTMLElement | null>; isVisible: boolean } | boolean {
  const isRefMode = refOrOptions != null && 'current' in (refOrOptions as RefObject<HTMLElement | null>)

  const externalRef = isRefMode ? (refOrOptions as RefObject<HTMLElement | null>) : null
  const options: UseScrollAnimationOptions = isRefMode
    ? (maybeOptions ?? {})
    : ((refOrOptions as UseScrollAnimationOptions) ?? {})

  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options

  const internalRef = useRef<HTMLDivElement>(null)
  const ref = externalRef ?? (internalRef as RefObject<HTMLElement | null>)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, ref])

  if (isRefMode) {
    return isVisible
  }

  return { ref: internalRef as RefObject<HTMLElement | null>, isVisible }
}
