"use client"

import { useEffect, useState } from "react"

type FloatingElement = {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  type: "leaf" | "dust" | "rune"
  rotation: number
  rotationSpeed: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Create random floating elements
    const newElements: FloatingElement[] = []
    const count = window.innerWidth < 768 ? 8 : 15

    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.4 + 0.1,
        type: ["leaf", "dust", "rune"][Math.floor(Math.random() * 3)] as "leaf" | "dust" | "rune",
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
      })
    }

    setElements(newElements)

    // Animation loop
    let animationFrameId: number
    let lastTime = 0

    const animate = (time: number) => {
      if (lastTime === 0) lastTime = time
      const delta = time - lastTime
      lastTime = time

      setElements((prevElements) =>
        prevElements.map((element) => {
          let newY = element.y + element.speed * (delta / 16)
          if (newY > 110) newY = -10

          return {
            ...element,
            y: newY,
            rotation: (element.rotation + element.rotationSpeed * (delta / 16)) % 360,
          }
        }),
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            transform: `rotate(${element.rotation}deg)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {element.type === "leaf" && <div className="w-full h-full bg-amber-700/30 rounded-full"></div>}
          {element.type === "dust" && <div className="w-full h-full bg-amber-200/40 rounded-full"></div>}
          {element.type === "rune" && <div className="w-full h-full bg-amber-500/20 rounded-md"></div>}
        </div>
      ))}
    </div>
  )
}
