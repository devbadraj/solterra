import type { Metadata } from 'next';
import { Funnel_Sans, MedievalSharp } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const funnelSans = Funnel_Sans({
  variable: '--font-funnel-sans',
  weight: 'variable',
  subsets: ['latin'],
});

const medievalSharp = MedievalSharp({
  variable: '--font-medieval-sharp',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Solterra - Web3 Adventure Game',
  description: 'Explore real-world places. Earn magical digital rewards.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.className} ${medievalSharp.variable} bg-[#f4d03f]/10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="texture pointer-events-none absolute inset-0 z-[-1]" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
