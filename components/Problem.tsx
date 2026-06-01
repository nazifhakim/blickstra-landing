'use client'

import Image from 'next/image'
import { useLang } from '@/lib/language-context'

const t = {
  en: {
    label: 'The Problem',
    heading: 'Save 20+ hours per week\non tender hunting',
    withoutTitle: 'Without Blickstra',
    withTitle: 'With Blickstra',
    withoutTotal: 'TOTAL: 20+ hours/week',
    withTotal: 'TOTAL: ~30 minutes/week',
    without: [
      { time: '6 hrs', task: 'Manually check 10 portals' },
      { time: '4 hrs', task: 'Filter irrelevant tenders' },
      { time: '3 hrs', task: 'Read each tender document' },
      { time: '4 hrs', task: 'Track deadlines in spreadsheet' },
      { time: '3 hrs', task: 'Miss high-value opportunities' },
    ],
    with: [
      { time: '0 min', task: 'AI monitors all portals' },
      { time: '15 min', task: 'Review your matched tenders' },
      { time: '10 min', task: 'Check AI scores & rationale' },
      { time: '5 min', task: 'Deadline alerts sent automatically' },
      { time: '0 min', task: 'Never miss an opportunity again' },
    ],
  },
  bm: {
    label: 'Masalah',
    heading: 'Jimat 20+ jam seminggu\ndalam carian tender',
    withoutTitle: 'Tanpa Blickstra',
    withTitle: 'Dengan Blickstra',
    withoutTotal: 'JUMLAH: 20+ jam/minggu',
    withTotal: 'JUMLAH: ~30 minit/minggu',
    without: [
      { time: '6 jam', task: 'Semak 10 portal secara manual' },
      { time: '4 jam', task: 'Tapis tender yang tidak relevan' },
      { time: '3 jam', task: 'Baca setiap dokumen tender' },
      { time: '4 jam', task: 'Jejak tarikh akhir dalam spreadsheet' },
      { time: '3 jam', task: 'Terlepas peluang bernilai tinggi' },
    ],
    with: [
      { time: '0 min', task: 'AI pantau semua portal' },
      { time: '15 min', task: 'Semak tender yang sepadan' },
      { time: '10 min', task: 'Periksa skor & alasan AI' },
      { time: '5 min', task: 'Amaran tarikh akhir dihantar auto' },
      { time: '0 min', task: 'Tidak lagi terlepas peluang' },
    ],
  },
}

export function Problem() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">{s.label}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight whitespace-pre-line">
            {s.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
          {/* Without */}
          <div className="rounded-2xl border-2 border-red-100 bg-red-50/40 p-6">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/brand/icons/ic-without.svg" alt="Without Blickstra" width={40} height={40} className="rounded-xl flex-shrink-0" />
              <h3 className="font-medium text-zinc-900">{s.withoutTitle}</h3>
            </div>
            <div className="space-y-3">
              {s.without.map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-14 text-right text-sm font-bold text-red-500 font-mono flex-shrink-0">{r.time}</span>
                  <div className="flex-1 h-px bg-red-200" />
                  <span className="text-sm text-zinc-600 flex-[2]">{r.task}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-red-200">
              <span className="text-sm font-bold text-red-600">{s.withoutTotal}</span>
            </div>
          </div>

          {/* With */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/brand/icons/ic-with.svg" alt="With Blickstra" width={40} height={40} className="rounded-xl flex-shrink-0" />
              <h3 className="font-medium text-zinc-900">{s.withTitle}</h3>
            </div>
            <div className="space-y-3">
              {s.with.map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-14 text-right text-sm font-bold text-emerald-600 font-mono flex-shrink-0">{r.time}</span>
                  <div className="flex-1 h-px bg-emerald-200" />
                  <span className="text-sm text-zinc-600 flex-[2]">{r.task}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-emerald-200">
              <span className="text-sm font-bold text-emerald-600">{s.withTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
