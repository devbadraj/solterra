'use client';

import { FloatingElements } from '@/components/floating-elements';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Location from '@/sections/Location';
import CallToAction from '@/sections/CallToAction';
import Footer from '@/sections/Footer';

export default function LandingPage() {
  return (
    <main className="relative bg-amber-900/50">
      <span
        className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: `url(/grain.webp)` }}
      />
      <FloatingElements />
      <Header />
      <Hero />
      <Features />
      <Location />
      <CallToAction />
      <Footer />
    </main>
  );
}
