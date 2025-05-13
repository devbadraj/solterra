import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

export function SimplePassport() {
  const stamps = [
    { id: 1, name: 'Mystic Garden', date: 'May 12, 2025', rarity: 'Common' },
    { id: 2, name: 'Ancient Temple', date: 'May 15, 2025', rarity: 'Rare' },
    { id: 3, name: 'Crystal Cave', date: 'May 18, 2025', rarity: 'Common' },
    {
      id: 4,
      name: 'Enchanted Forest',
      date: 'May 22, 2025',
      rarity: 'Legendary',
    },
  ];

  return (
    <div className="rounded-lg border-2 border-amber-300 bg-amber-800 p-6 shadow-lg">
      <div className="mb-6 text-center">
        <h3 className="font-medievalSharp text-2xl font-bold text-gray-100">
          Your Passport
        </h3>
        <p className="text-gray-300">Your magical journey continues</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {stamps.map((stamp) => (
          <div
            key={stamp.id}
            className="relative rounded-lg border-2 border-amber-200 bg-amber-300/50 p-4"
          >
            <div className="absolute -top-3 -right-3 rotate-12">
              <div className="relative">
                <Image
                  src={`/placeholder.svg?height=80&width=80`}
                  alt={stamp.name}
                  width={80}
                  height={80}
                  className="size-20 object-contain"
                />
              </div>
            </div>

            <div className="mb-2">
              <Badge
                className={` ${
                  stamp.rarity === 'Legendary'
                    ? 'bg-purple-700'
                    : stamp.rarity === 'Rare'
                      ? 'bg-amber-700'
                      : 'bg-green-700'
                } font-medievalSharp text-amber-50`}
              >
                {stamp.rarity}
              </Badge>
            </div>

            <h4 className="font-medievalSharp mb-2 text-xl font-bold text-amber-100">
              {stamp.name}
            </h4>

            <div className="mb-2 flex items-center text-sm text-amber-50">
              <Calendar className="mr-1 size-5" /> {stamp.date}
            </div>

            <div className="flex items-center text-sm text-amber-50">
              <MapPin className="mr-1 size-5" /> Location visited
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
  );
}
