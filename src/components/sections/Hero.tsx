'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowDown, FileText, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/lib/data'
import ParticleBackground from '@/components/effects/ParticleBackground'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      section.style.setProperty('--mouse-x', `${x * 30}px`)
      section.style.setProperty('--mouse-y', `${y * 30}px`)
    }

    section.addEventListener('mousemove', handleMouseMove)
    return () => section.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
        style={{ transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
        style={{ transform: 'translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))' }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for opportunities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="block text-foreground">Hi, I&apos;m</span>
                <span className="block gradient-text mt-2">{personalInfo.name}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {personalInfo.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="gradient"
                size="lg"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#projects"
              >
                <ExternalLink className="w-4 h-4" />
                View Projects
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Open to Work
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                IT Graduate 2024
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent-2/30 to-primary/30 rounded-3xl blur-2xl opacity-60 animate-pulse-glow" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/images/JessAnthonyTahilProfilePic.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 24rem"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  )
}
