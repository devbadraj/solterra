"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"

export function PassportBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const bookRef = useRef<HTMLDivElement>(null)
  const totalPages = 3

  const stamps = [
    [
      { id: 1, name: "Mystic Garden", date: "May 12, 2025", rarity: "Common" },
      { id: 2, name: "Ancient Temple", date: "May 15, 2025", rarity: "Rare" },
    ],
    [
      { id: 3, name: "Crystal Cave", date: "May 18, 2025", rarity: "Common" },
      { id: 4, name: "Enchanted Forest", date: "May 22, 2025", rarity: "Legendary" },
    ],
    [
      { id: 5, name: "Dragon's Peak", date: "May 25, 2025", rarity: "Rare" },
      { id: 6, name: "Wizard Tower", date: "May 28, 2025", rarity: "Common" },
    ],
  ]

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    const book = bookRef.current
    if (!book) return

    book.style.transform = `translateX(-${currentPage * 100}%)`
  }, [currentPage])

  return (
    <div className="relative w-full overflow-hidden bg-amber-100/30 rounded-lg border-2 border-amber-200 p-4 md:p-8">
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100 rounded-full h-10 w-10"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100 rounded-full h-10 w-10"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div
        ref={bookRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${totalPages * 100}%` }}
      >
        {stamps.map((pageStamps, pageIndex) => (
          <div key={pageIndex} className="w-full px-12" style={{ width: `${100 / totalPages}%` }}>
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 md:p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/parchment-texture.png')] bg-repeat opacity-30 pointer-events-none"></div>

              <div className="relative">
                <div className="text-center mb-6">
                  <h3 className="font-medievalsharp text-2xl font-bold text-amber-900">
                    Passport Page {pageIndex + 1}
                  </h3>
                  <p className="text-amber-700">Your magical journey continues</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {pageStamps.map((stamp) => (
                    <div key={stamp.id} className="bg-amber-100/50 border-2 border-amber-200 rounded-lg p-4 relative">
                      <div className="absolute -right-3 -top-3 rotate-12">
                        <div className="relative">
                          <Image
                            src={`/stamp-${stamp.id}.png`}
                            alt={stamp.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                      </div>

                      <div className="mb-2">
                        <Badge
                          className={`
                          ${
                            stamp.rarity === "Legendary"
                              ? "bg-purple-700"
                              : stamp.rarity === "Rare"
                                ? "bg-amber-700"
                                : "bg-green-700"
                          } 
                          text-amber-50 font-medievalsharp
                        `}
                        >
                          {stamp.rarity}
                        </Badge>
                      </div>

                      <h4 className="font-medievalsharp text-lg font-bold text-amber-900 mb-2">{stamp.name}</h4>

                      <div className="flex items-center text-amber-700 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1" /> {stamp.date}
                      </div>

                      <div className="flex items-center text-amber-700 text-sm">
                        <MapPin className="h-4 w-4 mr-1" /> Location visited
                      </div>

                      <div className="mt-4 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-amber-700 text-amber-700 hover:bg-amber-100"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`w-3 h-3 rounded-full p-0 ${currentPage === index ? "bg-amber-700" : "bg-amber-200"}`}
            onClick={() => setCurrentPage(index)}
          >
            <span className="sr-only">Page {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
