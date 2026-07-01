'use client'

import { Download, MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/GlassCard'
import { personalInfo } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="section-heading mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-3 space-y-6">
            <GlassCard className="space-y-4">
              {personalInfo.about.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <GlassCard>
              <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
              <div className="space-y-4">
                {personalInfo.quickFacts.map((fact, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      {i === 0 && <MapPin className="w-4 h-4 text-primary" />}
                      {i === 1 && <GraduationCap className="w-4 h-4 text-primary" />}
                      {i === 2 && <Briefcase className="w-4 h-4 text-primary" />}
                      {i === 3 && <Code2 className="w-4 h-4 text-primary" />}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{fact.label}</p>
                      <p className="font-medium text-sm">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold text-lg mb-4">Developer Philosophy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                &ldquo;I believe great software is built at the intersection of clean code,
                thoughtful design, and real user value. Every project is an opportunity
                to learn, improve, and create something meaningful.&rdquo;
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
