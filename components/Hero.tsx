'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLang } from '@/lib/language-context'

const t = {
  en: {
    badge: '10 government portals monitored 24/7',
    h1a: 'Strategic Tender Intelligence',
    h1b: 'for Malaysian Contractors',
    sub: 'Blickstra monitors JKR, MOH, TNB, KWSP and 7 more portals 24/7 — then alerts you only when tenders match your company profile.',
    cta: 'Get Started Free',
    ctaSecondary: 'See How It Works',
    trust: ['Free forever plan', 'No credit card', 'Setup in 5 minutes'],
  },
  bm: {
    badge: '10 portal kerajaan dipantau 24/7',
    h1a: 'Risikan Tender Strategik',
    h1b: 'untuk Kontraktor Malaysia',
    sub: 'Blickstra memantau JKR, MOH, TNB, KWSP dan 7 portal lagi 24/7 — kemudian memaklumkan anda hanya apabila tender sepadan dengan profil syarikat anda.',
    cta: 'Mula Percuma',
    ctaSecondary: 'Lihat Cara Kerjanya',
    trust: ['Pelan percuma selamanya', 'Tiada kad kredit', 'Persediaan dalam 5 minit'],
  },
}

export function Hero() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f480_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f480_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {s.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.08] mb-6">
          {s.h1a}<br />
          <span className="text-emerald-500">{s.h1b}</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {s.sub}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="https://app.blickstra.com/auth/signup"
            className="flex items-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-zinc-900 font-medium rounded-md transition-colors text-base shadow-sm"
          >
            {s.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#how-it-works"
            className="px-6 py-3 border border-zinc-200 hover:border-zinc-300 text-zinc-700 font-medium rounded-md transition-colors text-base"
          >
            {s.ctaSecondary}
          </Link>
        </div>

        {/* Trust line */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-400">
          {s.trust.map(item => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {item}
            </span>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 relative">
          <div className="rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden bg-zinc-950 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 mx-4 bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 font-mono">
                app.blickstra.com/dashboard
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  { label: 'TOTAL TENDERS', value: '2,547', color: 'text-white' },
                  { label: 'NEW TODAY', value: '12', color: 'text-emerald-400' },
                  { label: 'STRONG MATCHES', value: '4', color: 'text-emerald-400' },
                  { label: 'POSSIBLE', value: '9', color: 'text-amber-400' },
                  { label: 'PORTALS', value: '10/10', color: 'text-emerald-400' },
                  { label: 'LAST RUN', value: '2h ago', color: 'text-zinc-400' },
                ].map(s => (
                  <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-1">{s.label}</div>
                    <div className={`text-lg font-bold font-mono ${s.color}`}>{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { score: 92, title: 'PEMASANGAN SISTEM ELEKTRIK — KLINIK KESIHATAN BANDAR KLUANG', issuer: 'JKR Malaysia', match: 'Strong Match' },
                  { score: 78, title: 'PENYELENGGARAAN UPS SISTEM DI HOSPITAL KUALA LUMPUR', issuer: 'Ministry of Health', match: 'Strong Match' },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex items-start gap-3">
                    <div className="text-2xl font-bold font-mono text-emerald-400 w-10 flex-shrink-0">{item.score}</div>
                    <div className="min-w-0">
                      <div className="text-xs text-white font-medium truncate mb-1">{item.title}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-zinc-500">{item.issuer}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-emerald-400/10 text-emerald-400 rounded">⚡ {item.match}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-400/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  )
}
