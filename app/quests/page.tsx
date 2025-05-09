'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Scroll, Map, Search, Wallet } from 'lucide-react';
import { SimpleQuestMap } from '@/components/simple-quest-map';
import { LocationCard } from '@/components/location-card';
import { FloatingElements } from '@/components/floating-elements';

export default function QuestsPage() {
  return (
    <div className="min-h-screen">
      <FloatingElements />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-amber-200/50 bg-amber-50/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/solterra-logo.png"
              alt="Solterra"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-medievalSharp text-2xl font-bold text-amber-900">
              Solterra
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="/quests"
              className="font-medievalSharp border-b-2 border-amber-700 text-amber-900 hover:text-amber-700"
            >
              Quests
            </Link>
            <Link
              href="/passport"
              className="font-medievalSharp text-amber-900 hover:text-amber-700"
            >
              Passport
            </Link>
          </nav>
          <Button
            variant="outline"
            className="font-medievalSharp border-amber-700 text-amber-700 hover:bg-amber-100"
          >
            <Wallet className="mr-2 h-4 w-4" /> 0x1a2...3b4c
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col items-start justify-between md:flex-row">
          <div>
            <h1 className="font-medievalSharp text-3xl font-bold text-amber-900">
              Quest Map
            </h1>
            <p className="mt-2 text-amber-800">
              Discover magical locations and earn rewards on your journey
            </p>
          </div>
          <div className="mt-4 flex gap-4 md:mt-0">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-amber-700" />
              <input
                type="text"
                placeholder="Search locations..."
                className="rounded-md border border-amber-200 bg-amber-50 py-2 pr-4 pl-10 text-amber-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
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
            <div className="h-[500px] overflow-hidden rounded-lg border-2 border-amber-200 bg-amber-100/50">
              <SimpleQuestMap />
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="flex flex-wrap justify-center gap-6">
              <LocationCard
                id={1}
                name="Mystic Garden"
                location="Rare Evo, Las Vegas"
                reward="50 SOL + NFT"
                rarity="Common"
                elevation="320 m"
                imageSrc="/garden.jpeg?height=500&width=300"
                onClick={() => {}}
              />
              <LocationCard
                id={2}
                name="Ancient Temple"
                location="Consensus 2025, Toronto"
                reward="100 SOL + Rare NFT"
                rarity="Rare"
                elevation="850 m"
                imageSrc="/temple.jpeg?height=500&width=300"
                onClick={() => {}}
              />
              <LocationCard
                id={3}
                name="Dragon's Peak"
                location="Token 2049, Dubai"
                reward="200 SOL + Legendary NFT"
                rarity="Legendary"
                elevation="1,250 m"
                imageSrc="/dragon.jpeg?height=500&width=300"
                onClick={() => {}}
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
