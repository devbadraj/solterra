"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function FloatingIsland() {
  const islandRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const island = islandRef.current
    if (!island) return

    let position = 0
    let direction = 1
    const speed = 0.3
    const maxOffset = 15

    const animate = () => {
      if (!island) return

      position += speed * direction

      if (position >= maxOffset) {
        direction = -1
      } else if (position <= -maxOffset) {
        direction = 1
      }

      island.style.transform = `translateY(${position}px)`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div ref={islandRef} className="relative transition-transform duration-1000 ease-in-out">
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-amber-900/10 rounded-full blur-xl"></div>
      <Image
        src="/floating-island.png"
        alt="Floating Island"
        width={500}
        height={400}
        className="w-full h-auto object-contain"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-20 h-20">
        <div className="absolute w-full h-full animate-pulse opacity-30 bg-amber-400 rounded-full blur-xl"></div>
        <Image
          src="/magical-artifact.png"
          alt="Magical Artifact"
          width={80}
          height={80}
          className="w-full h-auto object-contain animate-pulse"
        />
      </div>
    </div>
  )
}
