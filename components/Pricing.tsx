'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { useLang } from '@/lib/language-context'

const t = {
  en: {
    label: 'Pricing',
    heading: "Start free. Upgrade when you're ready.",
    sub: 'No credit card required. No hidden fees.',
    footer: 'Annual billing saves 20% · Billed in MYR · SST included where applicable',
    plans: [
      { name: 'Scout', price: 'FREE', priceSub: 'Forever', popular: false, features: ['1 portal monitored', '5 alerts per month', 'Basic dashboard', 'Email alerts only', '1 company profile'], cta: 'Get Started Free', href: 'https://app.blickstra.com/auth/signup' },
      { name: 'Professional', price: 'RM149', priceSub: '/month', popular: true, features: ['All 10 portals', 'Unlimited alerts', 'AI scoring (0–100)', 'Telegram + email alerts', 'Smart dashboard', '1 company profile', 'PDF requirement analysis'], cta: 'Start Free Trial →', href: 'https://app.blickstra.com/auth/signup' },
      { name: 'Enterprise', price: 'RM399', priceSub: '/month', popular: false, features: ['All portals + custom', 'Unlimited alerts', 'AI scoring', 'All alert channels', 'Multi-user (up to 5)', 'API access', 'Priority support', 'Custom portal requests'], cta: 'Contact Sales', href: '#contact' },
    ],
  },
  bm: {
    label: 'Harga',
    heading: 'Mula percuma. Naik taraf bila bersedia.',
    sub: 'Tiada kad kredit diperlukan. Tiada caj tersembunyi.',
    footer: 'Bil tahunan jimat 20% · Dibilkan dalam MYR · SST termasuk di mana berkenaan',
    plans: [
      { name: 'Scout', price: 'PERCUMA', priceSub: 'Selamanya', popular: false, features: ['1 portal dipantau', '5 amaran sebulan', 'Papan pemuka asas', 'Amaran emel sahaja', '1 profil syarikat'], cta: 'Mula Percuma', href: 'https://app.blickstra.com/auth/signup' },
      { name: 'Profesional', price: 'RM149', priceSub: '/bulan', popular: true, features: ['Semua 10 portal', 'Amaran tanpa had', 'Skor AI (0–100)', 'Amaran Telegram + emel', 'Papan pemuka pintar', '1 profil syarikat', 'Analisis keperluan PDF'], cta: 'Mulakan Percubaan →', href: 'https://app.blickstra.com/auth/signup' },
      { name: 'Perusahaan', price: 'RM399', priceSub: '/bulan', popular: false, features: ['Semua portal + khas', 'Amaran tanpa had', 'Skor AI', 'Semua saluran amaran', 'Berbilang pengguna (sehingga 5)', 'Akses API', 'Sokongan keutamaan', 'Permintaan portal khas'], cta: 'Hubungi Jualan', href: '#contact' },
    ],
  },
}

export function Pricing() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section id="pricing" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">{s.label}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-2">{s.heading}</h2>
          <p className="text-zinc-400 text-sm">{s.sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {s.plans.map(p => (
            <div key={p.name} className={`rounded-2xl border-2 p-7 relative ${p.popular ? 'border-emerald-400 bg-zinc-950 shadow-xl shadow-emerald-400/10' : 'border-zinc-200 bg-white'}`}>
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-emerald-400 text-zinc-900 text-xs font-medium rounded-full">
                    {lang === 'en' ? 'MOST POPULAR' : 'PALING POPULAR'}
                  </span>
                </div>
              )}
              <div className="mb-5">
                <h3 className={`text-lg font-medium mb-5 ${p.popular ? 'text-white' : 'text-zinc-900'}`}>{p.name}</h3>
              </div>
              <div className="mb-6">
                <span className={`text-4xl font-black tracking-tight ${p.popular ? 'text-white' : 'text-zinc-900'}`}>{p.price}</span>
                <span className="text-zinc-400 text-sm ml-1">{p.priceSub}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${p.popular ? 'text-zinc-300' : 'text-zinc-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={p.href} className={`block text-center py-2.5 rounded-md text-sm font-medium transition-colors ${p.popular ? 'bg-emerald-400 hover:bg-emerald-300 text-zinc-900' : 'border-2 border-zinc-200 hover:border-zinc-400 text-zinc-700'}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-400 mt-6">{s.footer}</p>
      </div>
    </section>
  )
}
