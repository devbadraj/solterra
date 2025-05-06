import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2, Calendar, MapPin, Wallet } from "lucide-react"
import { SimplePassport } from "@/components/simple-passport"

export default function PassportPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="border-b border-amber-200">
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
            <Link href="/quests" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              Quests
            </Link>
            <Link
              href="/passport"
              className="font-medievalsharp text-amber-900 hover:text-amber-700 border-b-2 border-amber-700"
            >
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
            <h1 className="font-medievalsharp text-3xl font-bold text-amber-900">Digital Passport</h1>
            <p className="text-amber-800 mt-2">Your collection of magical stamps and badges from your adventures</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="outline" className="border-amber-200 text-amber-700">
              <Share2 className="mr-2 h-4 w-4" /> Share Passport
            </Button>
          </div>
        </div>

        <div className="bg-amber-100/30 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-6 items-center">
            <div className="bg-amber-100 border-2 border-amber-200 rounded-full overflow-hidden p-2 mx-auto">
              <Image
                src="/baddy-icon.png?height=180&width=180"
                alt="Avatar"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="font-medievalsharp text-2xl font-bold text-amber-900">Adventurer Dev Badraj</h2>
                <Badge className="bg-amber-700 text-amber-50 font-medievalsharp">Explorer</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                  <div className="text-amber-900 font-bold text-xl">12</div>
                  <div className="text-amber-700 text-sm">Locations</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                  <div className="text-amber-900 font-bold text-xl">5</div>
                  <div className="text-amber-700 text-sm">NFTs</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                  <div className="text-amber-900 font-bold text-xl">150</div>
                  <div className="text-amber-700 text-sm">SOL Earned</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
                  <div className="text-amber-900 font-bold text-xl">3</div>
                  <div className="text-amber-700 text-sm">Quests Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="stamps" className="w-full">
          <TabsList className="bg-amber-100 border border-amber-200 mb-6">
            <TabsTrigger
              value="stamps"
              className="font-medievalsharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              Stamps
            </TabsTrigger>
            <TabsTrigger
              value="nfts"
              className="font-medievalsharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              NFT Collection
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stamps" className="mt-0">
            <SimplePassport />
          </TabsContent>

          <TabsContent value="nfts" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-amber-50 border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`NFT ${i}`}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-amber-700 text-amber-50 font-medievalsharp">
                        {i % 3 === 0 ? "Legendary" : i % 2 === 0 ? "Rare" : "Common"}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medievalsharp text-lg font-bold text-amber-900 mb-1">Enchanted Relic #{i}</h3>
                    <div className="flex items-center text-amber-700 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" /> Acquired: May {i + 10}, 2025
                    </div>
                    <p className="text-amber-800 text-sm mb-3">
                      A mystical artifact discovered during your journey through the ancient forest.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-amber-700 text-sm">
                        <MapPin className="h-4 w-4 mr-1" /> Mystic Garden
                      </div>
                      <Button size="sm" variant="outline" className="border-amber-700 text-amber-700">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
