'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Scroll, Map, Search } from 'lucide-react';
import { SimpleQuestMap } from '@/components/simple-quest-map';
import { LocationCard } from '@/components/location-card';
import { Input } from '@/components/ui/input';
import { GrainOverlay } from '@/components/grain-overlay';
import { useRouter } from 'next/navigation';

export default function QuestsPage() {
    const router = useRouter();
  
    const handleLocationClick = (id: number) => {
      router.push(`/home/quests?location=${id}`);
    };
  return (
    <>
    <GrainOverlay/>
    
    <div className="relative bg-red-900/40">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col items-start justify-between md:flex-row">
          <div>
            <h1 className="font-medievalSharp text-3xl font-bold text-gray-100 drop-shadow-glow">
              Quest Map
            </h1>
            <p className="mt-2 text-gray-300">
              Discover magical locations and earn rewards on your journey
            </p>
          </div>
          <div className="mt-4 flex gap-4 md:mt-0">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-amber-700" />
              <Input
                type="text"
                placeholder="Search locations..."
                className="rounded-md border"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="mb-6 border border-amber-200 bg-amber-100">
            <TabsTrigger
              value="map"
              className="font-medievalSharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <Map className="mr-2 h-4 w-4" /> Map View
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="font-medievalSharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <Scroll className="mr-2 h-4 w-4" /> List View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-0">
            <div className="h-[500px] overflow-hidden rounded-lg">
              <SimpleQuestMap />
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="flex flex-wrap justify-center gap-6">
              <LocationCard
                id={1}
                name="Mystic Garden"
                location="Rare Evo, Las Vegas"
                reward="Common NFT"
                rarity="Common"
                elevation="320 m"
                imageSrc="/garden.jpeg?height=500&width=300"
                onClick={() => handleLocationClick(1)}
              />
              <LocationCard
                id={2}
                name="Ancient Temple"
                location="Consensus 2025, Toronto"
                reward="Rare NFT"
                rarity="Rare"
                elevation="850 m"
                imageSrc="/temple.jpeg?height=500&width=300"
                onClick={() => handleLocationClick(2)}
              />
              <LocationCard
                id={3}
                name="Dragon's Peak"
                location="Token 2049, Dubai"
                reward="Legendary NFT"
                rarity="Legendary"
                elevation="1,250 m"
                imageSrc="/dragon.jpeg?height=500&width=300"
                onClick={() => handleLocationClick(3)}
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
    </>
  );
}
