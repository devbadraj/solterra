import type { Metadata } from 'next';
import { Funnel_Display, MedievalSharp } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider';

const funnelDisplay = Funnel_Display({
  variable: '--font-funnel-display',
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
        className={`${funnelDisplay.className} ${medievalSharp.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
