import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import Navbar from "@/components/layout/Navbar"
import ScrollProgress from "@/components/ui/ScrollProgress"
import BackToTop from "@/components/ui/BackToTop"
import CursorGlow from "@/components/ui/CursorGlow"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jess Anthony Tahil | Full-Stack Developer",
  description:
    "Full-Stack Developer & IT Graduate passionate about building intuitive, performant digital experiences. Explore my portfolio, projects, and skills.",
  keywords: [
    "full-stack developer",
    "web developer",
    "react",
    "next.js",
    "portfolio",
    "jess anthony tahil",
  ],
  openGraph: {
    title: "Jess Anthony Tahil | Full-Stack Developer",
    description:
      "Full-Stack Developer & IT Graduate building polished, production-quality applications.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${newsreader.variable}`} suppressHydrationWarning>
<body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <ScrollProgress />
          <CursorGlow />
          <main className="min-h-screen">{children}</main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
