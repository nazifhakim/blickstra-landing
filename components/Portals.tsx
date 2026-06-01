const portals = [
  { name: 'JKR Malaysia', count: '200+', status: 'live' },
  { name: 'Ministry of Health', count: '53+', status: 'live' },
  { name: 'TenderDirect BLIS', count: '185+', status: 'live' },
  { name: 'Tenaga Nasional Berhad', count: '77+', status: 'live' },
  { name: 'KWSP / EPF', count: '8+', status: 'live' },
  { name: 'UTM ePerolehan', count: '13+', status: 'live' },
  { name: 'UTeM Tender Portal', count: '6+', status: 'live' },
  { name: 'Prasarana Malaysia', count: '2+', status: 'live' },
  { name: 'MyProcurement (MOF)', count: '1,155+', status: 'live' },
  { name: 'BNM eTender', count: '—', status: 'soon' },
  { name: 'ePerolehan', count: '—', status: 'soon' },
  { name: 'Sennego.com', count: '—', status: 'soon' },
]

export function Portals() {
  return (
    <section id="portals" className="py-20 md:py-28 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Coverage</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">
            10 government portals. One platform.
          </h2>
          <p className="text-zinc-400">We watch these so you don&apos;t have to.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {portals.map(p => (
            <div key={p.name}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                {p.status === 'live' ? (
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    LIVE
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    SOON
                  </span>
                )}
                {p.count !== '—' && (
                  <span className="text-xs font-mono text-zinc-400">{p.count}</span>
                )}
              </div>
              <p className="text-sm font-medium text-zinc-200 leading-tight">{p.name}</p>
              {p.count !== '—' && (
                <p className="text-[10px] text-zinc-600 mt-0.5">active tenders</p>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-500 mt-6">+ More portals added regularly</p>
      </div>
    </section>
  )
}
