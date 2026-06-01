import { Target, Zap, LayoutDashboard, FileSearch } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'AI Matching',
    titleBm: 'Padanan AI',
    desc: 'Upload your company profile once. Blickstra\'s AI scores every tender against your CIDB grade, MOF Kod Bidang, and capabilities. Only relevant tenders reach you.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Zap,
    title: 'Instant Telegram Alerts',
    titleBm: 'Amaran Telegram Segera',
    desc: 'Get notified the moment a matching tender is published. Not daily digests — real-time alerts straight to your Telegram when the score exceeds your threshold.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: LayoutDashboard,
    title: 'Smart Dashboard',
    titleBm: 'Papan Pemuka Pintar',
    desc: 'Track all opportunities in one place. Filter by portal, score, deadline, or category. Never lose track of a promising tender again.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FileSearch,
    title: 'Document Analysis',
    titleBm: 'Analisis Dokumen',
    desc: 'Upload your CIDB cert and company profile. Our AI auto-extracts your capabilities and recommends keywords — no manual setup needed.',
    color: 'bg-purple-50 text-purple-600',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Everything you need to win more contracts
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-2xl border border-zinc-200 p-7 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-0.5">{f.title}</h3>
              <p className="text-xs text-zinc-400 font-medium mb-3">{f.titleBm}</p>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
