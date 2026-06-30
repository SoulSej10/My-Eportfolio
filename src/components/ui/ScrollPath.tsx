'use client'

import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export default function ScrollPath() {
  const activeSection = useActiveSection(sections)
  const [positions, setPositions] = useState<Record<string, { top: number; bottom: number }>>({})

  useEffect(() => {
    const updatePositions = () => {
      const newPositions: Record<string, { top: number; bottom: number }> = {}
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          newPositions[id] = {
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
          }
        }
      })
      setPositions(newPositions)
    }
    updatePositions()
    window.addEventListener('scroll', updatePositions, { passive: true })
    window.addEventListener('resize', updatePositions)
    return () => {
      window.removeEventListener('scroll', updatePositions)
      window.removeEventListener('resize', updatePositions)
    }
  }, [])

  const totalHeight = positions.contact?.bottom || 0
  const heroHeight = (positions.hero?.bottom || 0) - (positions.hero?.top || 0)
  const scrollStart = heroHeight

  return (
    <>
      <style jsx global>{`
        .scroll-path {
          position: fixed;
          right: 24px;
          top: 0;
          bottom: 0;
          width: 2px;
          z-index: 40;
          pointer-events: none;
        }
        .scroll-path__track {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            var(--border) 0%,
            var(--border) 100%
          );
        }
        .scroll-path__progress {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: var(--gradient-1);
          border-radius: 1px;
          transition: height 0.15s ease-out, top 0.15s ease-out;
        }
        .scroll-path__dots {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: calc(100vh * 0.1);
        }
        .scroll-path__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: var(--background);
          transition: all 0.3s ease;
          box-shadow: 0 0 0 2px var(--background);
        }
        .scroll-path__dot.active {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 0 12px var(--primary), 0 0 0 2px var(--background);
          transform: scale(1.2);
        }
        .scroll-path__label {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted-foreground);
          opacity: 0;
          white-space: nowrap;
          transition: opacity 0.2s, color 0.2s;
          pointer-events: none;
        }
        .scroll-path__dot:hover + .scroll-path__label,
        .scroll-path__dot.active + .scroll-path__label {
          opacity: 1;
          color: var(--foreground);
        }
        .scroll-path__dot.active + .scroll-path__label {
          color: var(--primary);
        }
      `}</style>

      <div className="scroll-path" style={{ height: totalHeight }}>
        <div className="scroll-path__track" />
        <div
          className="scroll-path__progress"
          style={{
            height: activeSection && positions[activeSection]
              ? `${((positions[activeSection].top - scrollStart) / (totalHeight - scrollStart)) * 100}%`
              : '0%',
            top: activeSection && positions[activeSection]
              ? `${(positions[activeSection].top / totalHeight) * 100}%`
              : '0%',
          }}
        />
        <div className="scroll-path__dots" style={{ height: totalHeight }}>
          {sections.slice(1).map((id) => {
            const pos = positions[id]
            const isActive = activeSection === id
            const topPercent = pos ? (pos.top / totalHeight) * 100 : 0
            return (
              <div
                key={id}
                className={`scroll-path__dot ${isActive ? 'active' : ''}`}
                style={{ marginTop: `${topPercent}%` }}
              >
                <span className="scroll-path__label">{id}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}