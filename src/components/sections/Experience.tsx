'use client'

import { Briefcase, GraduationCap, Award, Code2, Star, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { experience } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const typeConfig = {
  internship: { icon: Briefcase, color: 'text-blue-600 dark:text-blue-400', border: 'border-l-blue-500', label: 'Internship' },
  freelance: { icon: Star, color: 'text-amber-600 dark:text-amber-400', border: 'border-l-amber-500', label: 'Freelance' },
  education: { icon: GraduationCap, color: 'text-emerald-600 dark:text-emerald-400', border: 'border-l-emerald-500', label: 'Education' },
  project: { icon: Code2, color: 'text-violet-600 dark:text-violet-400', border: 'border-l-violet-500', label: 'Project' },
  certification: { icon: Award, color: 'text-rose-600 dark:text-rose-400', border: 'border-l-rose-500', label: 'Certification' },
}

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Experience & Milestones"
          subtitle="My journey in tech — from education to professional experience"
        />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {experience.map((item, i) => {
            const config = typeConfig[item.type]
            const Icon = config.icon

            return (
              <div
                key={item.id}
                className={`card !rounded-xl border-l-[3px] ${config.border} p-5 transition-all duration-300 hover:bg-card-hover`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-surface-2 ${config.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] leading-tight">{item.role}</h3>
                      <p className="text-xs text-muted-foreground">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground/90 leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{config.label}</span>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
