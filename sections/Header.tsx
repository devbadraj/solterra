'use client';

import NavBar from '@/components/homePage/NavigationBar';
import { IconGavel } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll/modules';
import { Fragment } from 'react';
import { navItems } from '@/constants/header';
import { twMerge } from 'tailwind-merge';
import { ConnectWalletButton } from '@/components/connect-wallet-button';
import ThemeToggle from '@/components/ThemeSwitcher';
import Image from 'next/image';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <section className="border-b border-white/30 bg-black/50">
      <div className="container flex items-center justify-between p-2">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black">
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
          <p className="text-white font-medievalSharp font-semibold tracking-wide ">
            Solterra
          </p>
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            className="relative size-10 rounded-lg border-2 border-white/30"
            onClick={() => setIsMobileNavOpen((curr) => !curr)}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={twMerge(
                  'h-0.5 w-4 -translate-y-1 bg-gray-100 transition duration-300',
                  isMobileNavOpen && 'translate-y-0 rotate-45',
                )}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={twMerge(
                  'h-0.5 w-4 translate-y-1 bg-gray-100 transition duration-300',
                  isMobileNavOpen && 'translate-y-0 -rotate-45',
                )}
              />
            </div>
          </button>
          {isMobileNavOpen && (
            <div className="fixed top-18 right-0 bottom-0 left-0 z-30 overflow-hidden bg-gray-950">
              <div className="container h-full">
                <nav className="flex h-full flex-col items-center justify-center gap-4 py-8">
                  <Fragment>
                    {navItems.map(({ name, href }) => (
                      <Scroll
                        key={name}
                        to={href}
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="cursor-pointer opacity-60 transition-opacity duration-500 hover:opacity-90"
                        onClick={() => setIsMobileNavOpen((curr) => !curr)}
                      >
                        {name}
                      </Scroll>
                    ))}
                  </Fragment>
                  <ConnectWalletButton />
                </nav>
              </div>
            </div>
          )}
        </div>
        <nav className="hidden items-center gap-5 font-medium lg:flex">
          <NavBar className='text-red-100'/>
        </nav>
        <ConnectWalletButton />
      </div>
    </section>
  );
}
