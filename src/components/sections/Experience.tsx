'use client'

import { Briefcase, GraduationCap, Award, Code2, Star } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { experience } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const typeConfig = {
  internship: { icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Internship' },
  freelance: { icon: Star, color: 'text-amber-500', bg: 'bg-amber-500/10', label: 'Freelance' },
  education: { icon: GraduationCap, color: 'text-green-500', bg: 'bg-green-500/10', label: 'Education' },
  project: { icon: Code2, color: 'text-purple-500', bg: 'bg-purple-500/10', label: 'Project' },
  certification: { icon: Award, color: 'text-rose-500', bg: 'bg-rose-500/10', label: 'Certification' },
}

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Experience & Milestones"
          subtitle="My journey in tech — from education to professional experience"
        />

        <div
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent-2/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const config = typeConfig[item.type]
              const Icon = config.icon
              const isLeft = i % 2 === 0

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className={`hidden sm:block flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`inline-block transition-all duration-500 delay-${i * 100} ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isLeft ? '-translate-x-8' : 'translate-x-8')
                      }`}
                    >
                      <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                    </div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-xl ${config.bg} border-2 border-background flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${config.color}`} />
                    </div>
                  </div>

                  <div className={`flex-1 ml-12 sm:ml-0 ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                    <div
                      className={`card p-5 transition-all duration-500 delay-${i * 100} ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <div className="sm:hidden mb-2">
                        <span className="text-xs font-medium text-muted-foreground">{item.period}</span>
                      </div>
                      <Badge variant="primary" className="mb-2">{config.label}</Badge>
                      <h3 className="font-semibold text-base">{item.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                      <div className={`flex flex-wrap gap-1.5 mt-3 ${isLeft ? 'sm:justify-end' : ''}`}>
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
