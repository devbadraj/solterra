'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trophy, X } from 'lucide-react';

export function SimpleQuestMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      x: 25,
      y: 30,
      name: 'Mystic Garden',
      reward: 'Common NFT',
      rarity: 'Common',
    },
    {
      id: 2,
      x: 45,
      y: 20,
      name: 'Ancient Temple',
      reward: 'Rare NFT',
      rarity: 'Rare',
    },
    {
      id: 3,
      x: 65,
      y: 40,
      name: 'Crystal Cave',
      reward: 'Common NFT',
      rarity: 'Common',
    },
    {
      id: 4,
      x: 35,
      y: 60,
      name: 'Enchanted Forest',
      reward: 'Legendary NFT',
      rarity: 'Legendary',
    },
    {
      id: 5,
      x: 75,
      y: 70,
      name: "Dragon's Peak",
      reward: '150 SOL + Rare NFT',
      rarity: 'Rare',
    },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-amber-200 bg-amber-100/30">
      <div className="relative h-full w-full">
        <Image
          src="/world.jpg"
          alt="Fantasy Map"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />

        {locations.map((location) => (
          <div
            key={location.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onClick={() => setSelectedLocation(location.id)}
          >
            <div className="relative">
              <div className="absolute -top-2 -left-2 h-8 w-8 animate-ping rounded-full bg-amber-500/30"></div>
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-200 bg-amber-700 shadow-md hover:bg-amber-600 transition-colors">
                <MapPin className="h-5 w-5 text-amber-100" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedLocation && (
        <div className="absolute right-4 bottom-4 left-4 md:left-auto md:w-80 rounded-lg border-2 border-amber-200 bg-amber-50/95 backdrop-blur-sm p-4 shadow-lg">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-amber-700 hover:bg-amber-100"
            onClick={() => setSelectedLocation(null)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <h3 className="font-medievalSharp text-lg font-bold text-amber-900">
                  {locations.find((l) => l.id === selectedLocation)?.name}
                </h3>
                <Badge
                  className={` ${
                    selectedLocation % 3 === 0
                      ? 'bg-amber-700'
                      : selectedLocation % 2 === 0
                        ? 'bg-purple-700'
                        : 'bg-green-700'
                  } font-medievalSharp text-amber-50`}
                >
                  {locations.find((l) => l.id === selectedLocation)?.rarity}
                </Badge>
              </div>
              <p className="mb-3 text-sm text-amber-800">
                Discover ancient runes and magical artifacts in this enchanted
                location.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-amber-700">
                  <Trophy className="mr-1 h-4 w-4" />
                  {locations.find((l) => l.id === selectedLocation)?.reward}
                </div>
                <Button
                  size="sm"
                  className="font-medievalSharp bg-amber-700 text-amber-50 hover:bg-amber-800"
                >
                  Start Quest
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
