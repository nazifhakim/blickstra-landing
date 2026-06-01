'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Berapa banyak portal yang Blickstra pantau?',
    qEn: 'How many portals does Blickstra monitor?',
    a: 'Kami memantau 10 portal kerajaan Malaysia termasuk JKR, MOH, TNB, KWSP, TenderDirect BLIS, UTM, UTeM, Prasarana, BNM dan MyProcurement (MOF). Portal baru ditambah secara berkala.',
    aEn: 'We monitor 10 Malaysian government portals including JKR, MOH, TNB, KWSP, TenderDirect BLIS, UTM, UTeM, Prasarana, BNM and MyProcurement (MOF). New portals are added regularly.',
  },
  {
    q: 'Bagaimana AI scoring berfungsi?',
    qEn: 'How does AI scoring work?',
    a: 'Kami menganalisis profil syarikat anda (gred CIDB, Kod Bidang, kemampuan) dan menilai setiap tender dengan skor 0–100. Skor 70+ = perlawanan kuat. Setiap skor disertai penjelasan dalam Bahasa Inggeris.',
    aEn: 'We analyse your company profile (CIDB grade, Kod Bidang, capabilities) and score each tender 0–100. Score 70+ = strong match. Every score includes a plain-English explanation.',
  },
  {
    q: 'Adakah data syarikat saya selamat?',
    qEn: 'Is my company data safe?',
    a: 'Ya. Semua data disulitkan dan tidak dikongsi dengan pihak ketiga. Kami mematuhi PDPA Malaysia. Setiap syarikat mempunyai data yang diasingkan sepenuhnya.',
    aEn: 'Yes. All data is encrypted and never shared with third parties. We comply with Malaysia\'s PDPA. Each company\'s data is fully isolated.',
  },
  {
    q: 'Boleh saya tukar pakej pada bila-bila masa?',
    qEn: 'Can I change my plan at any time?',
    a: 'Ya, naik taraf atau turun taraf pada bila-bila masa tanpa penalti. Semua pelan adalah bayaran bulanan.',
    aEn: 'Yes, upgrade or downgrade at any time with no penalty. All plans are billed monthly.',
  },
  {
    q: 'Berapa kerap portal dipantau?',
    qEn: 'How often are portals monitored?',
    a: 'Dua kali sehari — 8:30 pagi dan 2:30 petang waktu KL. Anda sentiasa mendapat maklumat terkini dalam masa kurang 1 jam selepas tender diterbitkan.',
    aEn: 'Twice daily — 8:30 AM and 2:30 PM KL time. You always get up-to-date information within 1 hour of a tender being published.',
  },
  {
    q: 'Adakah terdapat kontrak jangka panjang?',
    qEn: 'Are there long-term contracts?',
    a: 'Tidak. Semua pelan adalah bulanan. Batal pada bila-bila masa tanpa sebarang bayaran.',
    aEn: 'No. All plans are monthly. Cancel at any time with no fees.',
  },
]

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 text-left gap-4"
      >
        <div>
          <p className="font-semibold text-zinc-900 text-sm">{faq.q}</p>
          <p className="text-xs text-zinc-400 mt-0.5">{faq.qEn}</p>
        </div>
        <ChevronDown className={cn('w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="pb-5 -mt-1 space-y-1.5">
          <p className="text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
          <p className="text-xs text-zinc-400 leading-relaxed italic">{faq.aEn}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 px-6 bg-zinc-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Soalan Lazim</h2>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-200 px-8 divide-y divide-zinc-100">
          {faqs.map(faq => <FAQItem key={faq.q} faq={faq} />)}
        </div>
      </div>
    </section>
  )
}
