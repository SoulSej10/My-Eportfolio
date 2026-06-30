'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            className="text-xl sm:text-2xl font-bold tracking-tight"
          >
            <span className="gradient-text">{'{'}Sej{'}'}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              )
            })}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-xl bg-surface-2 hover:bg-card-hover border border-border transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-surface-2 hover:bg-card-hover border border-border transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-surface-2 hover:bg-card-hover border border-border transition-all duration-300 text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface-2'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
