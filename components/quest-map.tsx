"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, ZoomOut, MapPin, Trophy, X } from "lucide-react"

export function QuestMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  const locations = [
    { id: 1, x: 25, y: 30, name: "Mystic Garden", reward: "50 SOL + NFT", rarity: "Common" },
    { id: 2, x: 45, y: 20, name: "Ancient Temple", reward: "100 SOL + Rare NFT", rarity: "Rare" },
    { id: 3, x: 65, y: 40, name: "Crystal Cave", reward: "75 SOL + NFT", rarity: "Common" },
    { id: 4, x: 35, y: 60, name: "Enchanted Forest", reward: "200 SOL + Legendary NFT", rarity: "Legendary" },
    { id: 5, x: 75, y: 70, name: "Dragon's Peak", reward: "150 SOL + Rare NFT", rarity: "Rare" },
  ]

  const handleZoomIn = () => {
    if (zoomLevel < 1.5) setZoomLevel(zoomLevel + 0.1)
  }

  const handleZoomOut = () => {
    if (zoomLevel > 0.8) setZoomLevel(zoomLevel - 0.1)
  }

  return (
    <div className="relative w-full h-full bg-amber-100/30 overflow-hidden">
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
          onClick={handleZoomIn}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
          onClick={handleZoomOut}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        <Image src="/world.jpg" alt="Fantasy Map" fill className="object-cover" />

        {locations.map((location) => (
          <div
            key={location.id}
            className="absolute cursor-pointer"
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onClick={() => setSelectedLocation(location.id)}
          >
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-8 h-8 bg-amber-500/30 rounded-full animate-ping"></div>
              <div className="relative z-10 w-6 h-6 bg-amber-700 rounded-full flex items-center justify-center border-2 border-amber-200 shadow-md">
                <MapPin className="h-4 w-4 text-amber-100" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 bg-amber-50 border-2 border-amber-200 rounded-lg p-4 shadow-lg">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-amber-700 hover:bg-amber-100"
            onClick={() => setSelectedLocation(null)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex gap-4 items-start">
            <div className="bg-amber-100 rounded-lg overflow-hidden w-20 h-20 flex-shrink-0">
              <Image
                src={`/location-${selectedLocation}.png`}
                alt={locations.find((l) => l.id === selectedLocation)?.name || ""}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medievalsharp text-lg font-bold text-amber-900">
                  {locations.find((l) => l.id === selectedLocation)?.name}
                </h3>
                <Badge
                  className={`
                  ${
                    selectedLocation % 3 === 0
                      ? "bg-amber-700"
                      : selectedLocation % 2 === 0
                        ? "bg-purple-700"
                        : "bg-green-700"
                  } 
                  text-amber-50 font-medievalsharp
                `}
                >
                  {locations.find((l) => l.id === selectedLocation)?.rarity}
                </Badge>
              </div>
              <p className="text-amber-800 text-sm mb-3">
                Discover ancient runes and magical artifacts in this enchanted location.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-amber-700 text-sm">
                  <Trophy className="h-4 w-4 mr-1" />
                  {locations.find((l) => l.id === selectedLocation)?.reward}
                </div>
                <Button size="sm" className="font-medievalsharp bg-amber-700 hover:bg-amber-800 text-amber-50">
                  Start Quest
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
