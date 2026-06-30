'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let mouseX = -9999
    let mouseY = -9999
    let prefersReducedMotion = false

    const checkReducedMotion = () => {
      prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const density = prefersReducedMotion ? 0 : 0.00003
      const count = Math.max(15, Math.floor(canvas.width * canvas.height * density))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.25 + 0.08,
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (prefersReducedMotion) {
        animationId = requestAnimationFrame(animate)
        return
      }

      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.2, 0,
        canvas.width * 0.2, canvas.height * 0.2, Math.max(canvas.width, canvas.height) * 0.8
      )
      gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.03)')
      gradient1.addColorStop(1, 'rgba(99, 102, 241, 0)')

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.8, 0,
        canvas.width * 0.8, canvas.height * 0.8, Math.max(canvas.width, canvas.height) * 0.8
      )
      gradient2.addColorStop(0, 'rgba(167, 139, 250, 0.02)')
      gradient2.addColorStop(1, 'rgba(167, 139, 250, 0)')

      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 180

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 0.08
          p.vx -= (dx / dist) * force
          p.vy -= (dy / dist) * force
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx2 = p2.x - p.x
          const dy2 = p2.y - p.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (dist2 < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.03 * (1 - dist2 / 100)})`
            ctx.lineWidth = 0.4
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    checkReducedMotion()
    resize()
    createParticles()
    animate()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReducedMotion)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', checkReducedMotion)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  )
}