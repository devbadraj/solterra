"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
}

export function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const elements = elementsRef.current
    if (!section || !elements) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      // Check if section is in viewport
      if (scrollPosition + viewportHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const relativeScroll = (scrollPosition + viewportHeight - sectionTop) / (sectionHeight + viewportHeight)
        elements.style.transform = `translateY(${relativeScroll * -50}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={elementsRef} className="transition-transform duration-300 ease-out">
        {children}
      </div>
    </div>
  )
}
