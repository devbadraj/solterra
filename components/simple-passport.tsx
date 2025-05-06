import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function SimplePassport() {
  const stamps = [
    { id: 1, name: "Mystic Garden", date: "May 12, 2025", rarity: "Common" },
    { id: 2, name: "Ancient Temple", date: "May 15, 2025", rarity: "Rare" },
    { id: 3, name: "Crystal Cave", date: "May 18, 2025", rarity: "Common" },
    { id: 4, name: "Enchanted Forest", date: "May 22, 2025", rarity: "Legendary" },
  ]

  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="font-medievalsharp text-2xl font-bold text-amber-900">Your Passport</h3>
        <p className="text-amber-700">Your magical journey continues</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {stamps.map((stamp) => (
          <div key={stamp.id} className="bg-amber-100/50 border-2 border-amber-200 rounded-lg p-4 relative">
            <div className="absolute -right-3 -top-3 rotate-12">
              <div className="relative">
                <Image
                  src={`/placeholder.svg?height=80&width=80`}
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
              <Button variant="outline" size="sm" className="border-amber-700 text-amber-700 hover:bg-amber-100">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
