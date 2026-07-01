'use client'

import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function GlassCard({ children, className, style }: GlassCardProps) {
  return (
    <div
      style={style}
      className={cn(
        "relative rounded-2xl p-6",
        "bg-card border border-card-border",
        "transition-all duration-300 hover:border-primary-muted/50 hover:shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}
