'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { IconCaretRightFilled, IconEPassport } from '@tabler/icons-react';
import Image from 'next/image';

export default function Hero() {
  const router = useRouter();
  return (
    <section
      id="about"
      className="relative container overflow-hidden py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-medievalSharp text-4xl leading-tight font-bold text-gray-100 md:text-6xl">
              Begin your Solterra Journey
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Explore real-world places. Earn magical digital rewards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button onClick={() => router.push('/home/quests')}>
                <span>Start Quest</span>&nbsp;
                <IconCaretRightFilled className="ml-2 size-5" />
              </Button>
              <Button variant="outline" onClick={() => router.push('/home/passport')}>
                <span>View Passport</span>&nbsp;
                <IconEPassport className="ml-2 size-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="animate-pulse-glow absolute -inset-4 rounded-full bg-red-100/5 blur-3xl"></div>
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
  );
}
