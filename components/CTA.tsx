'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLang } from '@/lib/language-context'

const t = {
  en: {
    heading: 'Start winning more tenders today',
    sub: 'Join Malaysian contractors already using Blickstra to find and win government contracts automatically.',
    cta: 'Get Started Free',
    ctaSecondary: 'Contact Us',
    trust: ['Free forever plan', 'Setup in 5 minutes', 'Cancel anytime'],
  },
  bm: {
    heading: 'Mula memenangi lebih banyak tender hari ini',
    sub: 'Sertai kontraktor Malaysia yang sudah menggunakan Blickstra untuk mencari dan memenangi kontrak kerajaan secara automatik.',
    cta: 'Mula Percuma',
    ctaSecondary: 'Hubungi Kami',
    trust: ['Pelan percuma selamanya', 'Persediaan dalam 5 minit', 'Batal bila-bila masa'],
  },
}

export function CTA() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section className="py-20 md:py-28 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(62,207,142,0.08)_0%,_transparent_70%)]" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">{s.heading}</h2>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto mb-10">{s.sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="https://app.blickstra.com/auth/signup"
            className="flex items-center gap-2 px-7 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-zinc-900 font-medium rounded-md transition-colors text-base"
          >
            {s.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="px-7 py-3.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium rounded-md transition-colors text-base"
          >
            {s.ctaSecondary}
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-zinc-500">
          {s.trust.map(item => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
