"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scroll, Map, Search, Wallet } from "lucide-react"
import { SimpleQuestMap } from "@/components/simple-quest-map"
import { LocationCard } from "@/components/location-card"
import { FloatingElements } from "@/components/floating-elements"

export default function QuestsPage() {
  return (
    <div className="min-h-screen">
      <FloatingElements />

      {/* Header */}
      <header className="border-b border-amber-200/50 bg-amber-50/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/solterra-logo.png"
              alt="Solterra"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-medievalsharp text-2xl font-bold text-amber-900">Solterra</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/quests"
              className="font-medievalsharp text-amber-900 hover:text-amber-700 border-b-2 border-amber-700"
            >
              Quests
            </Link>
            <Link href="/passport" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              Passport
            </Link>
          </nav>
          <Button variant="outline" className="font-medievalsharp border-amber-700 text-amber-700 hover:bg-amber-100">
            <Wallet className="mr-2 h-4 w-4" /> 0x1a2...3b4c
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="font-medievalsharp text-3xl font-bold text-amber-900">Quest Map</h1>
            <p className="text-amber-800 mt-2">Discover magical locations and earn rewards on your journey</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-700" />
              <input
                type="text"
                placeholder="Search locations..."
                className="pl-10 pr-4 py-2 rounded-md border border-amber-200 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="bg-amber-100 border border-amber-200 mb-6">
            <TabsTrigger
              value="map"
              className="font-medievalsharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <Map className="mr-2 h-4 w-4" /> Map View
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="font-medievalsharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <Scroll className="mr-2 h-4 w-4" /> List View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-0">
            <div className="bg-amber-100/50 border-2 border-amber-200 rounded-lg overflow-hidden h-[500px]">
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
  )
}
