'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white px-6 md:px-16 lg:px-36 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-92 h-116 sm:w-130 sm:h-[40rem] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/JessAnthonyTahilProfilePic.jpg"
              alt="Jess Anthony Tahil - Full Stack Developer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I&apos;m <span className="text-blue-600">Jess Anthony M. Tahil</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md">
            Aspiring Full Stack Developer & IT Graduate passionate about creating user-friendly digital experiences.
          </p>

          <a
            href="/files/Tahil,%20Jess%20Anthony%20M.%20-%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  )
}
