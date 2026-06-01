'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/language-context'

const navLinks = [
  { href: '#features', en: 'Features', bm: 'Ciri-ciri' },
  { href: '#portals', en: 'Portals', bm: 'Portal' },
  { href: '#pricing', en: 'Pricing', bm: 'Harga' },
  { href: '#faq', en: 'FAQ', bm: 'Soalan' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggle } = useLang()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const ctaLabel = lang === 'en' ? 'Get Started Free →' : 'Mula Percuma →'
  const loginLabel = lang === 'en' ? 'Login' : 'Log Masuk'

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/blickstra-mark.svg" alt="Blickstra" width={28} height={28} className="rounded-md" />
          <span className="font-medium text-zinc-900 tracking-tight">Blickstra</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
              {lang === 'en' ? l.en : l.bm}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-0.5 bg-zinc-100 rounded-md p-0.5 text-xs font-medium"
            aria-label="Toggle language"
          >
            <span className={cn('px-2.5 py-1 rounded transition-colors', lang === 'en' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-400 hover:text-zinc-600')}>EN</span>
            <span className={cn('px-2.5 py-1 rounded transition-colors', lang === 'bm' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-400 hover:text-zinc-600')}>BM</span>
          </button>

          <Link href="https://app.blickstra.com/auth/login"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            {loginLabel}
          </Link>
          <Link href="https://app.blickstra.com/auth/signup"
            className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-zinc-900 text-sm font-medium rounded-md transition-colors">
            {ctaLabel}
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
              {lang === 'en' ? l.en : l.bm}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            {/* Language toggle — mobile */}
            <button
              onClick={toggle}
              className="flex items-center justify-center gap-0.5 bg-zinc-100 rounded-md p-0.5 text-xs font-medium self-start"
            >
              <span className={cn('px-3 py-1.5 rounded transition-colors', lang === 'en' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-400')}>EN</span>
              <span className={cn('px-3 py-1.5 rounded transition-colors', lang === 'bm' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-400')}>BM</span>
            </button>
            <Link href="https://app.blickstra.com/auth/login"
              className="text-center py-2 border border-zinc-200 rounded-md text-sm font-medium text-zinc-700">
              {loginLabel}
            </Link>
            <Link href="https://app.blickstra.com/auth/signup"
              className="text-center py-2.5 bg-emerald-400 text-zinc-900 rounded-md text-sm font-medium">
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
