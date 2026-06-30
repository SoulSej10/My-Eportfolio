'use client'

import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: "center" | "left"
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 sm:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <h2 className="section-heading mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
