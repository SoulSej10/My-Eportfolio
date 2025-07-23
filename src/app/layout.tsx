import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can customize weights
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Jess' E-Portfolio",
  description: "Built with Next.js, React, Tailwind, and Shadcn UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main> {/* Add padding top to avoid nav overlap */}
      </body>
    </html>
  )
}
