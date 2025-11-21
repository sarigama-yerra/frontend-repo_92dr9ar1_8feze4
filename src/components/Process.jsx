const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Share your artwork, sizes and preferences. We advise on paper stocks, mouldings and glazing.'
  },
  {
    num: '02',
    title: 'Proof & Prep',
    desc: 'Soft‑proofs or test strips for colour accuracy. Retouching and artwork prep if required.'
  },
  {
    num: '03',
    title: 'Craft',
    desc: 'Archival printing, precise mounting and handcrafted frames using conservation methods.'
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Careful packaging, delivery or gallery install. Your work, ready to hang and endure.'
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-10">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-gray-200 bg-white p-6">
              <span className="text-xs tracking-widest text-gray-500">{s.num}</span>
              <h3 className="mt-2 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
