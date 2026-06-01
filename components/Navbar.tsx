'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#portals', label: 'Portals' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-emerald-400 flex items-center justify-center">
            <span className="text-zinc-900 text-sm font-bold">B</span>
          </div>
          <span className="font-semibold text-zinc-900 tracking-tight">Blickstra</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://app.blickstra.com/auth/login"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Login
          </Link>
          <Link href="https://app.blickstra.com/auth/signup"
            className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-zinc-900 text-sm font-medium rounded-md transition-colors">
            Get Started Free →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-4">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-zinc-600 hover:text-zinc-900">
              {l.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link href="https://app.blickstra.com/auth/login"
              className="text-center py-2 border border-zinc-200 rounded-md text-sm font-medium text-zinc-700">
              Login
            </Link>
            <Link href="https://app.blickstra.com/auth/signup"
              className="text-center py-2.5 bg-emerald-400 text-zinc-900 rounded-md text-sm font-semibold">
              Get Started Free →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
