'use client'

import { useLang } from '@/lib/language-context'

const t = {
  en: {
    label: 'Security & Trust',
    heading: 'Your data security is our priority',
    items: [
      { icon: '🔒', title: 'Data Encryption', desc: 'All company documents and tender data encrypted with industry-standard protocols. Your data stays private.' },
      { icon: '🏛️', title: 'Malaysian Compliance', desc: 'Built for the Malaysian regulatory environment. PDPA-compliant data handling. Hosted in Singapore (AWS).' },
      { icon: '👤', title: 'Private by Default', desc: 'Your company profile and uploaded documents are only visible to you. No data sharing between companies.' },
      { icon: '🤖', title: 'Transparent AI', desc: 'Every match score comes with a plain-English explanation. Know exactly why a tender was recommended.' },
    ],
  },
  bm: {
    label: 'Keselamatan & Kepercayaan',
    heading: 'Keselamatan data anda adalah keutamaan kami',
    items: [
      { icon: '🔒', title: 'Penyulitan Data', desc: 'Semua dokumen syarikat dan data tender disulitkan dengan protokol standard industri. Data anda kekal peribadi.' },
      { icon: '🏛️', title: 'Pematuhan Malaysia', desc: 'Dibina untuk persekitaran kawal selia Malaysia. Pengendalian data mematuhi PDPA. Dihoskan di Singapura (AWS).' },
      { icon: '👤', title: 'Peribadi Secara Lalai', desc: 'Profil syarikat dan dokumen yang dimuat naik hanya kelihatan kepada anda. Tiada perkongsian data antara syarikat.' },
      { icon: '🤖', title: 'AI Telus', desc: 'Setiap skor padanan disertai penjelasan mudah. Tahu dengan tepat mengapa tender disyorkan.' },
    ],
  },
}

export function Security() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">{s.label}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-2">{s.heading}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {s.items.map(item => (
            <div key={item.title} className="text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-sm font-medium text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
