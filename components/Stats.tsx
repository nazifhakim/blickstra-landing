const stats = [
  { value: '10+', label: 'Government Portals', sub: 'Monitored 24/7' },
  { value: '2,500+', label: 'Tenders Tracked', sub: 'And growing daily' },
  { value: '< 1 hr', label: 'Alert Response Time', sub: 'From publish to your Telegram' },
  { value: '50,000+', label: 'Eligible Contractors', sub: 'CIDB registered in Malaysia' },
]

export function Stats() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50 py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-10">
          Dipercayai oleh kontraktor Malaysia · Trusted by Malaysian contractors
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-zinc-700 mb-0.5">{s.label}</div>
              <div className="text-xs text-zinc-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
