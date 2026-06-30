'use client'

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
  style?: React.CSSProperties
}

export function GlassCard({ children, className, glow = false, hover = true, style }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !hover) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX((y - centerY) / 20)
    setRotateY((centerX - x) / 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: hover ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        transition: 'transform 0.1s ease-out',
      }}
      className={cn(
        "relative rounded-2xl p-6",
        "bg-card border border-card-border",
        "backdrop-blur-xl",
        "transition-all duration-300",
        hover && "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {glow && (
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent-2/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  )
}
