const steps = [
  {
    n: '01',
    icon: '🏢',
    title: 'Build Your Profile',
    desc: 'Upload your CIDB cert, company profile, and MOF registration. Our AI extracts your capabilities, CIDB grade, and Kod Bidang automatically.',
  },
  {
    n: '02',
    icon: '🤖',
    title: 'We Scan Everything',
    desc: 'Blickstra monitors 10 Malaysian government portals twice daily — JKR, MOH, TNB, KWSP, TenderDirect, and more — so you don\'t have to.',
  },
  {
    n: '03',
    icon: '📱',
    title: 'Get Matched & Alerted',
    desc: 'When a tender scores above your threshold, you get an instant Telegram alert with the title, estimated value, deadline, and AI match score.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">
            From profile to opportunity in 3 steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px border-t-2 border-dashed border-zinc-200 -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center text-2xl flex-shrink-0">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-black text-zinc-100 font-mono">{s.n}</span>
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-3">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
