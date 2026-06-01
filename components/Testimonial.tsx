'use client'

import { useLang } from '@/lib/language-context'

const t = {
  en: {
    label: 'What Our Users Say',
    quote: '"Blickstra helped TRMS Engineering identify tender opportunities we would never find manually. The AI scoring system saves us more than 15 hours a week."',
  },
  bm: {
    label: 'Apa Kata Pengguna Kami',
    quote: '"Blickstra membantu TRMS Engineering mengenal pasti peluang tender yang kami tidak akan jumpa secara manual. Sistem AI scoring menjimatkan masa kami lebih 15 jam seminggu."',
  },
}

export function Testimonial() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section className="py-20 md:py-28 px-6 bg-zinc-50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-10">{s.label}</p>
        <div className="bg-white rounded-2xl border border-zinc-200 p-10 shadow-sm relative">
          <div className="absolute -top-4 left-10 text-5xl text-emerald-400 font-serif leading-none">&ldquo;</div>
          <blockquote className="text-lg md:text-xl text-zinc-700 leading-relaxed mb-6 font-medium">
            {s.quote}
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-sm">NH</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-zinc-900">Nazif Hakim</div>
              <div className="text-sm text-zinc-400">TRMS Engineering Sdn Bhd</div>
              <div className="text-xs text-zinc-400">CIDB G7 · Class A Electrical · Kuala Lumpur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
