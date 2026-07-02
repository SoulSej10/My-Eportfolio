'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { projects } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

type Project = (typeof projects)[number]

function ProjectPreview({ project }: { project: Project }) {
  const images = project.images ?? []
  const [active, setActive] = useState(0)

  return (
    <div className="rounded-2xl overflow-hidden border border-border/50 bg-surface-2">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/50 bg-surface">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
        <span className="ml-3 px-2.5 py-0.5 rounded-md bg-surface-2 text-[11px] text-muted-foreground truncate">
          {project.link.replace('https://', '')}
        </span>
      </div>

      {images.length > 0 ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-video overflow-hidden"
        >
          <Image
            src={images[active]}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-sm font-medium text-white flex items-center gap-1">
              View live project <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-video bg-gradient-to-br from-primary/10 via-transparent to-accent-2/10"
        >
          <div className="absolute inset-0 opacity-20 animate-gradient" style={{ backgroundImage: 'var(--gradient-1)' }} />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {project.title}
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View live project <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </a>
      )}

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-2.5 border-t border-border/50 bg-surface">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActive(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === idx ? 'w-5 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Show screenshot ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  const featuredProjects = projects.filter((p) => p.isFeatured)
  const otherProjects = projects.filter((p) => !p.isFeatured)

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my best work — production applications built with modern technologies"
        />

        <div
          className={`space-y-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {featuredProjects.map((project, i) => (
            <GlassCard
              key={project.title}
              className="p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary">{project.category}</Badge>
                    <Badge variant="success">{project.status}</Badge>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="gradient"
                      size="md"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                      <ArrowUpRight className="w-3 h-3" />
                    </Button>
                    {project.github && (
                      <Button
                        variant="secondary"
                        size="md"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <ProjectPreview project={project} />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-20">
            <h3 className="text-xl font-semibold mb-8 text-center">
              More Projects
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <GlassCard key={project.title} className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary">{project.category}</Badge>
                    <Badge variant="success">{project.status}</Badge>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Button>
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </Button>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
