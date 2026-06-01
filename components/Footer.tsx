'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/language-context'

const t = {
  en: {
    tagline: 'Strategic Tender Intelligence\nfor Malaysian Contractors',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    productLinks: [['#features','Features'],['#portals','Portals'],['#pricing','Pricing'],['#faq','FAQ']],
    companyLinks: [['#','About'],['#','Contact'],['#','Changelog']],
    legalLinks: [['#','Privacy Policy'],['#','Terms of Service'],['#','PDPA Notice']],
    copyright: '© 2026 Blickstra. All rights reserved. · Kuala Lumpur, Malaysia',
    portals: '10 portals live',
  },
  bm: {
    tagline: 'Risikan Tender Strategik\nuntuk Kontraktor Malaysia',
    product: 'Produk',
    company: 'Syarikat',
    legal: 'Undang-undang',
    productLinks: [['#features','Ciri-ciri'],['#portals','Portal'],['#pricing','Harga'],['#faq','Soalan']],
    companyLinks: [['#','Tentang Kami'],['#','Hubungi'],['#','Perubahan']],
    legalLinks: [['#','Dasar Privasi'],['#','Terma Perkhidmatan'],['#','Notis PDPA']],
    copyright: '© 2026 Blickstra. Hak cipta terpelihara. · Kuala Lumpur, Malaysia',
    portals: '10 portal aktif',
  },
}

export function Footer() {
  const { lang } = useLang()
  const s = t[lang]

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/brand/blickstra-mark.svg" alt="Blickstra" width={28} height={28} className="rounded-md" />
              <span className="font-medium text-white">Blickstra</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 whitespace-pre-line">{s.tagline}</p>
            <p className="text-xs text-zinc-600">hello@blickstra.my</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">{s.product}</h4>
            <ul className="space-y-3 text-sm">
              {s.productLinks.map(([h, l]) => (
                <li key={h}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">{s.company}</h4>
            <ul className="space-y-3 text-sm">
              {s.companyLinks.map(([h, l]) => (
                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">{s.legal}</h4>
            <ul className="space-y-3 text-sm">
              {s.legalLinks.map(([h, l]) => (
                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>{s.copyright}</p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{s.portals}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
