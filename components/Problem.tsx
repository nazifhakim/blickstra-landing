const without = [
  { time: '6 hrs', task: 'Manually check 10 portals' },
  { time: '4 hrs', task: 'Filter irrelevant tenders' },
  { time: '3 hrs', task: 'Read each tender document' },
  { time: '4 hrs', task: 'Track deadlines in spreadsheet' },
  { time: '3 hrs', task: 'Miss high-value opportunities' },
]
const with_ = [
  { time: '0 min', task: 'AI monitors all portals' },
  { time: '15 min', task: 'Review your matched tenders' },
  { time: '10 min', task: 'Check AI scores & rationale' },
  { time: '5 min', task: 'Deadline alerts sent automatically' },
  { time: '0 min', task: 'Never miss an opportunity again' },
]

export function Problem() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Save 20+ hours per week<br />on tender hunting
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
          {/* Without */}
          <div className="rounded-2xl border-2 border-red-100 bg-red-50/40 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">😩</span>
              <h3 className="font-bold text-zinc-900">Without Blickstra</h3>
            </div>
            <div className="space-y-3">
              {without.map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-14 text-right text-sm font-bold text-red-500 font-mono flex-shrink-0">{r.time}</span>
                  <div className="flex-1 h-px bg-red-200" />
                  <span className="text-sm text-zinc-600 flex-[2]">{r.task}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-red-200">
              <span className="text-sm font-bold text-red-600">TOTAL: 20+ hours/week</span>
            </div>
          </div>

          {/* With */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🚀</span>
              <h3 className="font-bold text-zinc-900">With Blickstra</h3>
            </div>
            <div className="space-y-3">
              {with_.map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-14 text-right text-sm font-bold text-emerald-600 font-mono flex-shrink-0">{r.time}</span>
                  <div className="flex-1 h-px bg-emerald-200" />
                  <span className="text-sm text-zinc-600 flex-[2]">{r.task}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-emerald-200">
              <span className="text-sm font-bold text-emerald-600">TOTAL: ~30 minutes/week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
