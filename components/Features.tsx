'use client'

import Image from 'next/image'
import { useLang } from '@/lib/language-context'

const icons = [
  '/brand/icons/ic-ai-matching.svg',
  '/brand/icons/ic-telegram.svg',
  '/brand/icons/ic-dashboard.svg',
  '/brand/icons/ic-document-analysis.svg',
]

const t = {
  en: {
    label: 'Features',
    heading: 'Everything you need to win more contracts',
    features: [
      { title: 'AI Matching', desc: "Upload your company profile once. Blickstra's AI scores every tender against your CIDB grade, MOF Kod Bidang, and capabilities. Only relevant tenders reach you." },
      { title: 'Instant Telegram Alerts', desc: 'Get notified the moment a matching tender is published. Not daily digests — real-time alerts straight to your Telegram when the score exceeds your threshold.' },
      { title: 'Smart Dashboard', desc: 'Track all opportunities in one place. Filter by portal, score, deadline, or category. Never lose track of a promising tender again.' },
      { title: 'Document Analysis', desc: 'Upload your CIDB cert and company profile. Our AI auto-extracts your capabilities and recommends keywords — no manual setup needed.' },
    ],
  },
  bm: {
    label: 'Ciri-ciri',
    heading: 'Semua yang anda perlukan untuk memenangi lebih banyak kontrak',
    features: [
      { title: 'Padanan AI', desc: 'Muat naik profil syarikat anda sekali. AI Blickstra menilai setiap tender berbanding gred CIDB, Kod Bidang MOF, dan keupayaan anda. Hanya tender relevan sampai kepada anda.' },
      { title: 'Amaran Telegram Segera', desc: 'Terima pemberitahuan serta-merta apabila tender yang sepadan diterbitkan. Bukan digest harian — amaran masa nyata terus ke Telegram anda apabila skor melebihi had anda.' },
      { title: 'Papan Pemuka Pintar', desc: 'Jejak semua peluang di satu tempat. Tapis mengikut portal, skor, tarikh akhir, atau kategori. Jangan lagi terlepas tender yang menjanjikan.' },
      { title: 'Analisis Dokumen', desc: 'Muat naik sijil CIDB dan profil syarikat anda. AI kami mengekstrak keupayaan anda secara automatik dan mengesyorkan kata kunci — tiada persediaan manual diperlukan.' },
    ],
  },
}

export function Features() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">{s.label}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">{s.heading}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {s.features.map((f, i) => (
            <div key={f.title} className="bg-white rounded-2xl border border-zinc-200 p-7 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Image src={icons[i]} alt={f.title} width={56} height={56} className="rounded-xl" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">{f.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
