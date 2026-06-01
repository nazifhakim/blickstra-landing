import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
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
            <p className="text-sm leading-relaxed mb-4">
              Strategic Tender Intelligence<br />for Malaysian Contractors
            </p>
            <p className="text-xs text-zinc-600">hello@blickstra.my</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              {[['#features','Features'],['#portals','Portals'],['#pricing','Pricing'],['#faq','FAQ']].map(([h,l]) => (
                <li key={h}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {[['#','About'],['#','Contact'],['#','Changelog']].map(([h,l]) => (
                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {[['#','Privacy Policy'],['#','Terms of Service'],['#','PDPA Notice']].map(([h,l]) => (
                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© 2026 Blickstra. All rights reserved. · Kuala Lumpur, Malaysia</p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>10 portals live</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
