import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solterra - Web3 Adventure Game",
  description: "Explore real-world places. Earn magical digital rewards.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" />
      </head>
      <body className={`${inter.className} bg-[#f4d03f]/10`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="texture absolute inset-0 pointer-events-none z-[-1]" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
