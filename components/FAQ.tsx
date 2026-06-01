'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/language-context'

const t = {
  en: {
    label: 'FAQ',
    heading: 'Frequently Asked Questions',
    faqs: [
      { q: 'How many portals does Blickstra monitor?', a: 'We monitor 10 Malaysian government portals including JKR, MOH, TNB, KWSP, TenderDirect BLIS, UTM, UTeM, Prasarana, BNM and MyProcurement (MOF). New portals are added regularly.' },
      { q: 'How does AI scoring work?', a: 'We analyse your company profile (CIDB grade, Kod Bidang, capabilities) and score each tender 0–100. Score 70+ = strong match. Every score includes a plain-English explanation.' },
      { q: 'Is my company data safe?', a: "Yes. All data is encrypted and never shared with third parties. We comply with Malaysia's PDPA. Each company's data is fully isolated." },
      { q: 'Can I change my plan at any time?', a: 'Yes, upgrade or downgrade at any time with no penalty. All plans are billed monthly.' },
      { q: 'How often are portals monitored?', a: 'Twice daily — 8:30 AM and 2:30 PM KL time. You always get up-to-date information within 1 hour of a tender being published.' },
      { q: 'Are there long-term contracts?', a: 'No. All plans are monthly. Cancel at any time with no fees.' },
    ],
  },
  bm: {
    label: 'Soalan Lazim',
    heading: 'Soalan Lazim',
    faqs: [
      { q: 'Berapa banyak portal yang Blickstra pantau?', a: 'Kami memantau 10 portal kerajaan Malaysia termasuk JKR, MOH, TNB, KWSP, TenderDirect BLIS, UTM, UTeM, Prasarana, BNM dan MyProcurement (MOF). Portal baru ditambah secara berkala.' },
      { q: 'Bagaimana AI scoring berfungsi?', a: 'Kami menganalisis profil syarikat anda (gred CIDB, Kod Bidang, kemampuan) dan menilai setiap tender dengan skor 0–100. Skor 70+ = perlawanan kuat. Setiap skor disertai penjelasan mudah.' },
      { q: 'Adakah data syarikat saya selamat?', a: 'Ya. Semua data disulitkan dan tidak dikongsi dengan pihak ketiga. Kami mematuhi PDPA Malaysia. Setiap syarikat mempunyai data yang diasingkan sepenuhnya.' },
      { q: 'Boleh saya tukar pakej pada bila-bila masa?', a: 'Ya, naik taraf atau turun taraf pada bila-bila masa tanpa penalti. Semua pelan adalah bayaran bulanan.' },
      { q: 'Berapa kerap portal dipantau?', a: 'Dua kali sehari — 8:30 pagi dan 2:30 petang waktu KL. Anda sentiasa mendapat maklumat terkini dalam masa kurang 1 jam selepas tender diterbitkan.' },
      { q: 'Adakah terdapat kontrak jangka panjang?', a: 'Tidak. Semua pelan adalah bulanan. Batal pada bila-bila masa tanpa sebarang bayaran.' },
    ],
  },
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between py-5 text-left gap-4">
        <p className="font-medium text-zinc-900 text-sm">{q}</p>
        <ChevronDown className={cn('w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-sm text-zinc-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section id="faq" className="py-20 md:py-28 px-6 bg-zinc-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">{s.label}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">{s.heading}</h2>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-200 px-8 divide-y divide-zinc-100">
          {s.faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  )
}
