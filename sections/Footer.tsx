import NavBar from '@/components/homePage/NavigationBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative container border-t-2 py-8 text-amber-200">
      <div className="absolute inset-0 bg-[url('/parchment-texture.png')] opacity-5"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/solterra_logo.png"
                alt="logo.png"
                width={100}
                height={100}
                loading="eager"
                draggable={false}
                unoptimized
                className="size-10"
              />
              <span className="font-medievalSharp text-xl font-bold text-amber-100">
                Solterra
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <NavBar />
          </nav>
        </div>
        <div className="mt-6 text-center text-sm text-amber-400">
          <p>© {new Date().getFullYear()} Solterra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
