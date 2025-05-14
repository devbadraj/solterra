import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  MapPin,
  Users,
  BarChart,
  PlusCircle,
  Settings,
  CheckCircle,
  Clock,
  Trophy,
  Sparkles,
} from 'lucide-react';
import { FloatingElements } from '@/components/floating-elements';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-red-900/40">
      <FloatingElements />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col items-start justify-between md:flex-row">
          <div>
            <h1 className="font-medievalSharp text-3xl font-bold text-gray-200 md:text-4xl">
              Merchant Dashboard
            </h1>
            <p className="mt-2 text-grey-300">
              Manage your quests, rewards, and track adventurer check-ins
            </p>
          </div>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Button
              variant="outline"
              className="border-amber-200 text-amber-700"
            >
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Button>
            <Button className="font-medievalSharp bg-amber-700 text-amber-50 hover:bg-amber-800">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Quest
            </Button>
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card className="border border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-amber-100 p-3">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">12</div>
                  <div className="text-amber-700">Active Quests</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-amber-100 p-3">
                  <Users className="h-6 w-6 text-amber-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">247</div>
                  <div className="text-amber-700">Check-ins</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-amber-100 p-3">
                  <Trophy className="h-6 w-6 text-amber-700" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">85</div>
                  <div className="text-amber-700">Rewards Claimed</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-amber-100 p-3">
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
          <TabsList className="mb-6 border border-amber-200 bg-amber-100">
            <TabsTrigger
              value="quests"
              className="font-medievalSharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <MapPin className="mr-2 h-4 w-4" /> Quests
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="font-medievalSharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <Trophy className="mr-2 h-4 w-4" /> Rewards
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="font-medievalSharp data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
            >
              <BarChart className="mr-2 h-4 w-4" /> Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quests" className="mt-0">
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-6">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row">
                <h2 className="font-medievalSharp text-2xl font-bold text-amber-900">
                  Active Quests
                </h2>
                <Button className="font-medievalSharp bg-amber-700 text-amber-50 hover:bg-amber-800">
                  <PlusCircle className="mr-2 h-4 w-4" /> New Quest
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-200">
                      <th className="font-medievalSharp px-4 py-3 text-left text-amber-900">
                        Quest Name
                      </th>
                      <th className="font-medievalSharp px-4 py-3 text-left text-amber-900">
                        Location
                      </th>
                      <th className="font-medievalSharp px-4 py-3 text-left text-amber-900">
                        Reward
                      </th>
                      <th className="font-medievalSharp px-4 py-3 text-left text-amber-900">
                        Check-ins
                      </th>
                      <th className="font-medievalSharp px-4 py-3 text-left text-amber-900">
                        Status
                      </th>
                      <th className="font-medievalSharp px-4 py-3 text-left text-amber-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((i) => (
                      <tr
                        key={i}
                        className="border-b border-amber-200 hover:bg-amber-100/30"
                      >
                        <td className="px-4 py-3 text-amber-900">
                          Mystic Garden Quest {i}
                        </td>
                        <td className="px-4 py-3 text-amber-900">
                          Enchanted Forest
                        </td>
                        <td className="px-4 py-3 text-amber-900">
                          50 SOL + NFT
                        </td>
                        <td className="px-4 py-3 text-amber-900">{i * 12}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              i % 2 === 0
                                ? 'bg-green-100 text-green-800'
                                : 'bg-amber-100 text-amber-800'
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
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 border-amber-200 text-amber-700"
                            >
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 border-amber-200 text-amber-700"
                            >
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
              <Card className="border border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="font-medievalSharp text-xl text-amber-900">
                    NFT Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-lg border border-amber-200 p-3 hover:bg-amber-100/30"
                      >
                        <Image
                          src={`/nft-${i}.png`}
                          alt={`NFT ${i}`}
                          width={60}
                          height={60}
                          className="h-12 w-12 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medievalSharp text-amber-900">
                            Enchanted Relic #{i}
                          </h4>
                          <p className="text-sm text-amber-700">
                            Claimed: {i * 10} times
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 border-amber-200 text-amber-700"
                        >
                          Edit
                        </Button>
                      </div>
                    ))}
                    <Button className="font-medievalSharp w-full bg-amber-700 text-amber-50 hover:bg-amber-800">
                      <PlusCircle className="mr-2 h-4 w-4" /> Add NFT Reward
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="font-medievalSharp text-xl text-amber-900">
                    Token Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-lg border border-amber-200 p-3 hover:bg-amber-100/30"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 p-2">
                          <Sparkles className="h-6 w-6 text-amber-700" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medievalSharp text-amber-900">
                            {i * 25} SOL Tokens
                          </h4>
                          <p className="text-sm text-amber-700">
                            Distributed: {i * 500} SOL
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 border-amber-200 text-amber-700"
                        >
                          Edit
                        </Button>
                      </div>
                    ))}
                    <Button className="font-medievalSharp w-full bg-amber-700 text-amber-50 hover:bg-amber-800">
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Token Reward
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-0">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border border-amber-200 bg-amber-50 md:col-span-2">
                <CardHeader>
                  <CardTitle className="font-medievalSharp text-xl text-amber-900">
                    Check-ins Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex h-80 items-center justify-center rounded-lg border border-amber-200 bg-amber-100/50">
                    <p className="font-medievalSharp text-amber-700">
                      Analytics Chart Placeholder
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="font-medievalSharp text-xl text-amber-900">
                    Top Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between border-b border-amber-200 p-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="font-medievalSharp flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                            {i}
                          </div>
                          <span className="text-amber-900">
                            Mystic Garden {i}
                          </span>
                        </div>
                        <span className="text-amber-700">
                          {100 - i * 15} check-ins
                        </span>
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
  );
}
