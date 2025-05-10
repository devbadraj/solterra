'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Wallet, Map, Scroll, ArrowRight } from 'lucide-react';
import { ConnectWalletButton } from '@/components/connect-wallet-button';
import { FloatingElements } from '@/components/floating-elements';
import { ParallaxSection } from '@/components/parallax-section';
import { MagicButton } from '@/components/magic-button';
import { LocationCard } from '@/components/location-card';

export default function LandingPage() {
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
          <nav className="font-medievalSharp hidden items-center space-x-6 font-medium md:flex">
            <Link
              href="/quests"
              className="text-amber-900 hover:text-amber-700"
            >
              Quests
            </Link>
            <Link
              href="/passport"
              className="text-amber-900 hover:text-amber-700"
            >
              Passport
            </Link>
            <Link
              href="/partners"
              className="text-amber-900 hover:text-amber-700"
            >
              Partners
            </Link>
            <Link href="/about" className="text-amber-900 hover:text-amber-700">
              About
            </Link>
          </nav>
          <ConnectWalletButton />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-medievalSharp text-4xl leading-tight font-bold text-amber-900 md:text-6xl">
                Begin your Solterra Journey
              </h1>
              <p className="text-lg text-amber-800 md:text-xl">
                Explore real-world places. Earn magical digital rewards.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <MagicButton className="font-medievalSharp bg-amber-700 text-amber-50 hover:bg-amber-600">
                  Start Quest <ArrowRight className="ml-2 size-5" />
                </MagicButton>
                <MagicButton
                  variant="outline"
                  className="font-medievalSharp border-amber-700 text-amber-700 hover:bg-amber-600"
                >
                  View Passport <Scroll className="ml-2 size-5" />
                </MagicButton>
              </div>
            </div>
            <div className="relative">
              <div className="animate-pulse-glow absolute -inset-4 rounded-full bg-amber-500/10 blur-3xl"></div>
              <Image
                src="/floating-island.png"
                alt="Floating Island"
                width={500}
                height={400}
                draggable={false}
                className="animate-float relative z-10 h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-amber-100/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-medievalSharp mb-12 text-center text-3xl font-bold text-amber-900">
            Your Adventure Awaits
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-6 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Map className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-medievalSharp mb-2 text-xl font-bold text-amber-900">
                Magical Quests
              </h3>
              <p className="text-amber-800">
                Discover enchanted locations in the real world and embark on
                quests to earn rewards.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-6 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Scroll className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-medievalSharp mb-2 text-xl font-bold text-amber-900">
                Digital Passport
              </h3>
              <p className="text-amber-800">
                Collect magical stamps and badges in your passport as proof of
                your adventures.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-6 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Wallet className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-medievalSharp mb-2 text-xl font-bold text-amber-900">
                Mystical Rewards
              </h3>
              <p className="text-amber-800">
                Earn NFTs and SPL tokens with real utility as you complete your
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <ParallaxSection className="bg-gradient-to-b from-amber-50/50 to-amber-100/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-medievalSharp mb-6 text-center text-3xl font-bold text-amber-900">
            Magical Locations
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-amber-800">
            Discover these enchanted places in the real world and collect unique
            rewards on your journey
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
      <section className="relative overflow-hidden bg-amber-800 py-16 text-amber-50">
        <div className="absolute inset-0 bg-[url('/parchment-texture.png')] opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-medievalSharp mb-6 text-3xl font-bold">
            Ready to Begin Your Adventure?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Connect your wallet and start collecting magical rewards as you
            explore the world around you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagicButton className="font-medievalSharp bg-amber-50 text-amber-900 hover:bg-white">
              Connect Wallet <Wallet className="ml-2 size-5" />
            </MagicButton>
            <MagicButton
              variant="outline"
              className="font-medievalSharp border-amber-50 text-amber-50 hover:bg-amber-700/50"
            >
              Learn More <ArrowRight className="ml-2 size-5" />
            </MagicButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-amber-900 py-8 text-amber-200">
        <div className="absolute inset-0 bg-[url('/parchment-texture.png')] opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/solterra-logo.png"
                  alt="Solterra"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="font-medievalSharp text-xl font-bold text-amber-100">
                  Solterra
                </span>
              </Link>
            </div>
            <div className="flex gap-6">
              <Link
                href="/quests"
                className="text-amber-300 hover:text-amber-100"
              >
                Quests
              </Link>
              <Link
                href="/passport"
                className="text-amber-300 hover:text-amber-100"
              >
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
  );
}
