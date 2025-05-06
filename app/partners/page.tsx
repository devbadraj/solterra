import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Users,
  BarChart,
  PlusCircle,
  Settings,
  CheckCircle,
  Clock,
  Wallet,
  Trophy,
  Sparkles,
} from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-amber-50 bg-[url('/parchment-texture.png')] bg-repeat">
      <FloatingElements />

      {/* Header */}
      <header className="border-b border-amber-200/50 bg-amber-50/80 backdrop-blur-sm">
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
            <Link href="/passport" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              Passport
            </Link>
            <Link
              href="/partners"
              className="font-medievalsharp text-amber-900 hover:text-amber-700 border-b-2 border-amber-700"
            >
              Partners
            </Link>
            <Link href="/about" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="font-medievalsharp border-amber-700 text-amber-700 hover:bg-amber-100">
              <Wallet className="mr-2 h-4 w-4" /> 0x1a2...3b4c
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="font-medievalsharp text-3xl md:text-4xl font-bold text-amber-900">Merchant Dashboard</h1>
            <p className="text-amber-800 mt-2">Manage your quests, rewards, and track adventurer check-ins</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="outline" className="border-amber-200 text-amber-700">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Button>
            <Button className="font-medievalsharp bg-amber-700 hover:bg-amber-800 text-amber-50">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Quest
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="bg-amber-50 border border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-amber-100 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">12</div>
                  <div className="text-amber-700">Active Quests</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-amber-100 rounded-full p-3">
                  <Users className="h-6 w-6 text-amber-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">247</div>
                  <div className="text-amber-700">Check-ins</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-amber-100 rounded-full p-3">
                  <Trophy className="h-6 w-6 text-amber-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">85</div>
                  <div className="text-amber-700">Rewards Claimed</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-amber-100 rounded-full p-3">
                  <BarChart className="h-6 w-6 text-amber-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">32%</div>
                  <div className="text-amber-700">Conversion Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="quests" className="w-full">
          <TabsList className="bg-amber-100 border border-amber-200 mb-6">
            <TabsTrigger
              value="quests"
              className="font-medievalsharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <MapPin className="mr-2 h-4 w-4" /> Quests
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="font-medievalsharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <Trophy className="mr-2 h-4 w-4" /> Rewards
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="font-medievalsharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <BarChart className="mr-2 h-4 w-4" /> Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quests" className="mt-0">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <h2 className="font-medievalsharp text-2xl font-bold text-amber-900">Active Quests</h2>
                <Button className="font-medievalsharp bg-amber-700 hover:bg-amber-800 text-amber-50">
                  <PlusCircle className="mr-2 h-4 w-4" /> New Quest
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-200">
                      <th className="text-left py-3 px-4 font-medievalsharp text-amber-900">Quest Name</th>
                      <th className="text-left py-3 px-4 font-medievalsharp text-amber-900">Location</th>
                      <th className="text-left py-3 px-4 font-medievalsharp text-amber-900">Reward</th>
                      <th className="text-left py-3 px-4 font-medievalsharp text-amber-900">Check-ins</th>
                      <th className="text-left py-3 px-4 font-medievalsharp text-amber-900">Status</th>
                      <th className="text-left py-3 px-4 font-medievalsharp text-amber-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((i) => (
                      <tr key={i} className="border-b border-amber-200 hover:bg-amber-100/30">
                        <td className="py-3 px-4 text-amber-900">Mystic Garden Quest {i}</td>
                        <td className="py-3 px-4 text-amber-900">Enchanted Forest</td>
                        <td className="py-3 px-4 text-amber-900">50 SOL + NFT</td>
                        <td className="py-3 px-4 text-amber-900">{i * 12}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              i % 2 === 0 ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {i % 2 === 0 ? (
                              <>
                                <CheckCircle className="mr-1 h-3 w-3" /> Active
                              </>
                            ) : (
                              <>
                                <Clock className="mr-1 h-3 w-3" /> Scheduled
                              </>
                            )}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="h-8 border-amber-200 text-amber-700">
                              Edit
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 border-amber-200 text-amber-700">
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rewards" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-amber-50 border border-amber-200">
                <CardHeader>
                  <CardTitle className="font-medievalsharp text-xl text-amber-900">NFT Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 border border-amber-200 rounded-lg hover:bg-amber-100/30"
                      >
                        <Image
                          src={`/nft-${i}.png`}
                          alt={`NFT ${i}`}
                          width={60}
                          height={60}
                          className="rounded-md w-12 h-12 object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medievalsharp text-amber-900">Enchanted Relic #{i}</h4>
                          <p className="text-sm text-amber-700">Claimed: {i * 10} times</p>
                        </div>
                        <Button size="sm" variant="outline" className="h-8 border-amber-200 text-amber-700">
                          Edit
                        </Button>
                      </div>
                    ))}
                    <Button className="w-full font-medievalsharp bg-amber-700 hover:bg-amber-800 text-amber-50">
                      <PlusCircle className="mr-2 h-4 w-4" /> Add NFT Reward
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border border-amber-200">
                <CardHeader>
                  <CardTitle className="font-medievalsharp text-xl text-amber-900">Token Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 border border-amber-200 rounded-lg hover:bg-amber-100/30"
                      >
                        <div className="bg-amber-100 rounded-full p-2 w-12 h-12 flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-amber-700" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medievalsharp text-amber-900">{i * 25} SOL Tokens</h4>
                          <p className="text-sm text-amber-700">Distributed: {i * 500} SOL</p>
                        </div>
                        <Button size="sm" variant="outline" className="h-8 border-amber-200 text-amber-700">
                          Edit
                        </Button>
                      </div>
                    ))}
                    <Button className="w-full font-medievalsharp bg-amber-700 hover:bg-amber-800 text-amber-50">
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Token Reward
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-0">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-amber-50 border border-amber-200 md:col-span-2">
                <CardHeader>
                  <CardTitle className="font-medievalsharp text-xl text-amber-900">Check-ins Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-amber-100/50 rounded-lg border border-amber-200 flex items-center justify-center">
                    <p className="text-amber-700 font-medievalsharp">Analytics Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border border-amber-200">
                <CardHeader>
                  <CardTitle className="font-medievalsharp text-xl text-amber-900">Top Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between p-2 border-b border-amber-200">
                        <div className="flex items-center gap-2">
                          <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center font-medievalsharp text-amber-900">
                            {i}
                          </div>
                          <span className="text-amber-900">Mystic Garden {i}</span>
                        </div>
                        <span className="text-amber-700">{100 - i * 15} check-ins</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
