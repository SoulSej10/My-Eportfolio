'use client'

import Image from 'next/image'

const techs = [
  { name: 'React', icon: '/images/react.svg' },
  { name: 'Next.js', icon: '/images/nextjs.svg' },
  { name: 'TypeScript', icon: '/images/typescript.svg' },
  { name: 'JavaScript', icon: '/images/javascript-svgrepo-com.svg' },
  { name: 'Tailwind CSS', icon: '/images/tailwind-svgrepo-com.svg' },
  { name: 'HTML5', icon: '/images/html-5-svgrepo-com.svg' },
  { name: 'CSS3', icon: '/images/css-3-svgrepo-com.svg' },
  { name: 'ASP.NET', icon: '/images/aspnet-svgrepo-com.svg' },
  { name: '.NET', icon: '/images/dotnet-svgrepo-com.svg' },
  { name: 'Django', icon: '/images/django-icon-svgrepo-com.svg' },
  { name: 'Python', icon: '/images/python-svgrepo-com.svg' },
  { name: 'Flutter', icon: '/images/flutter-svgrepo-com.svg' },
  { name: 'SQL', icon: '/images/sql-database-generic-svgrepo-com.svg' },
  { name: 'MongoDB', icon: '/images/mongodb-svgrepo-com.svg' },
  { name: 'Firebase', icon: '/images/firebase-svgrepo-com.svg' },
  { name: 'Git', icon: '/images/git-svgrepo-com.svg' },
]

export default function TechMarquee() {
  const loop = [...techs, ...techs]

  return (
    <section
      aria-label="Technologies I work with"
      className="relative py-10 border-y border-border/60 bg-surface/50 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10"
        style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10"
        style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
      />

      <div className="flex w-max animate-marquee gap-12 sm:gap-16">
        {loop.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0">
              <Image src={tech.icon} alt="" fill sizes="28px" className="object-contain" />
            </div>
            <span className="text-sm sm:text-base font-medium text-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
