'use client'

import { useEffect, useState, useRef } from 'react'
import { personalInfo } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const element = counterRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [hasStarted, value])

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent-2/5 to-primary/5" />

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
