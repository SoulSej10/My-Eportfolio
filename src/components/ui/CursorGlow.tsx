'use client'

import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const glowRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', () => setVisible(false))

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', () => setVisible(false))
    }
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !glowRef.current) return

    const animate = () => {
      const el = glowRef.current
      if (!el) return

      el.style.transform = `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationRef.current!)
  }, [position])

  if (!visible) return null

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[9999] w-64 h-64 rounded-full bg-gradient-to-r from-primary/15 via-accent-2/10 to-primary/15 blur-3xl mix-blend-plus"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        transition: 'opacity 0.3s ease',
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  )
}