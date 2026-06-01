'use client'

import Image from 'next/image'
import { useLang } from '@/lib/language-context'

const icons = [
  '/brand/icons/ic-profile.svg',
  '/brand/icons/ic-scan.svg',
  '/brand/icons/ic-alert.svg',
]

const t = {
  en: {
    label: 'How It Works',
    heading: 'From profile to opportunity in 3 steps',
    steps: [
      { n: '01', title: 'Build Your Profile', desc: 'Upload your CIDB cert, company profile, and MOF registration. Our AI extracts your capabilities, CIDB grade, and Kod Bidang automatically.' },
      { n: '02', title: 'We Scan Everything', desc: "Blickstra monitors 10 Malaysian government portals twice daily — JKR, MOH, TNB, KWSP, TenderDirect, and more — so you don't have to." },
      { n: '03', title: 'Get Matched & Alerted', desc: 'When a tender scores above your threshold, you get an instant Telegram alert with the title, estimated value, deadline, and AI match score.' },
    ],
  },
  bm: {
    label: 'Cara Kerjanya',
    heading: 'Dari profil ke peluang dalam 3 langkah',
    steps: [
      { n: '01', title: 'Bina Profil Anda', desc: 'Muat naik sijil CIDB, profil syarikat, dan pendaftaran MOF anda. AI kami mengekstrak keupayaan, gred CIDB, dan Kod Bidang anda secara automatik.' },
      { n: '02', title: 'Kami Pantau Semua', desc: 'Blickstra memantau 10 portal kerajaan Malaysia dua kali sehari — JKR, MOH, TNB, KWSP, TenderDirect, dan lagi — supaya anda tidak perlu.' },
      { n: '03', title: 'Dapat Padanan & Amaran', desc: 'Apabila tender mendapat skor melebihi had anda, anda menerima amaran Telegram segera dengan tajuk, nilai anggaran, tarikh akhir, dan skor padanan AI.' },
    ],
  },
}

export function HowItWorks() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">{s.label}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">{s.heading}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {s.steps.map((step, i) => (
            <div key={step.n} className="relative">
              {i < s.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px border-t-2 border-dashed border-zinc-200 -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={icons[i]} alt={step.title} width={56} height={56} className="rounded-2xl flex-shrink-0" />
                  <span className="text-3xl font-black text-zinc-100 font-mono">{step.n}</span>
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
