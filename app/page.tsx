"use client"

import Link from "next/link"
import Image from "next/image"
import { Wallet, Map, Scroll, ArrowRight } from "lucide-react"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { FloatingElements } from "@/components/floating-elements"
import { ParallaxSection } from "@/components/parallax-section"
import { MagicButton } from "@/components/magic-button"
import { LocationCard } from "@/components/location-card"

export default function LandingPage() {
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
            <Link href="/quests" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              Quests
            </Link>
            <Link href="/passport" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              Passport
            </Link>
            <Link href="/partners" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              Partners
            </Link>
            <Link href="/about" className="font-medievalsharp text-amber-900 hover:text-amber-700">
              About
            </Link>
          </nav>
          <ConnectWalletButton />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-medievalsharp text-4xl md:text-5xl font-bold text-amber-900 leading-tight">
                Begin your Solterra Journey
              </h1>
              <p className="text-lg md:text-xl text-amber-800">
                Explore real-world places. Earn magical digital rewards.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <MagicButton className="font-medievalsharp bg-amber-700 hover:bg-amber-600 text-amber-50">
                  Start Quest <ArrowRight className="ml-2 h-4 w-4" />
                </MagicButton>
                <MagicButton
                  variant="outline"
                  className="font-medievalsharp border-amber-700 text-amber-700 hover:bg-amber-100"
                >
                  View Passport <Scroll className="ml-2 h-4 w-4" />
                </MagicButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
              <Image
                src="/floating-island.png"
                alt="Floating Island"
                width={500}
                height={400}
                className="w-full h-auto object-contain relative z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-100/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-medievalsharp text-3xl font-bold text-center text-amber-900 mb-12">
            Your Adventure Awaits
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-medievalsharp text-xl font-bold text-amber-900 mb-2">Magical Quests</h3>
              <p className="text-amber-800">
                Discover enchanted locations in the real world and embark on quests to earn rewards.
              </p>
            </div>
            <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Scroll className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-medievalsharp text-xl font-bold text-amber-900 mb-2">Digital Passport</h3>
              <p className="text-amber-800">
                Collect magical stamps and badges in your passport as proof of your adventures.
              </p>
            </div>
            <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Wallet className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-medievalsharp text-xl font-bold text-amber-900 mb-2">Mystical Rewards</h3>
              <p className="text-amber-800">Earn NFTs and SPL tokens with real utility as you complete your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <ParallaxSection className="py-16 bg-gradient-to-b from-amber-50/50 to-amber-100/30">
        <div className="container mx-auto px-4">
          <h2 className="font-medievalsharp text-3xl font-bold text-center text-amber-900 mb-6">Magical Locations</h2>
          <p className="text-amber-800 text-center max-w-2xl mx-auto mb-12">
            Discover these enchanted places in the real world and collect unique rewards on your journey
          </p>

          <div className="flex flex-wrap justify-center gap-8">
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
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/parchment-texture.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-medievalsharp text-3xl font-bold mb-6">Ready to Begin Your Adventure?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Connect your wallet and start collecting magical rewards as you explore the world around you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagicButton className="font-medievalsharp bg-amber-50 hover:bg-white text-amber-900">
              Connect Wallet <Wallet className="ml-2 h-4 w-4" />
            </MagicButton>
            <MagicButton
              variant="outline"
              className="font-medievalsharp border-amber-50 text-amber-50 hover:bg-amber-700/50"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </MagicButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-8 relative">
        <div className="absolute inset-0 bg-[url('/parchment-texture.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/solterra-logo.png"
                  alt="Solterra"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="font-medievalsharp text-xl font-bold text-amber-100">Solterra</span>
              </Link>
            </div>
            <div className="flex gap-6">
              <Link href="/quests" className="text-amber-300 hover:text-amber-100">
                Quests
              </Link>
              <Link href="/passport" className="text-amber-300 hover:text-amber-100">
                Passport
              </Link>
              <Link href="#" className="text-amber-300 hover:text-amber-100">
                About
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-amber-400">
            <p>© {new Date().getFullYear()} Solterra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
