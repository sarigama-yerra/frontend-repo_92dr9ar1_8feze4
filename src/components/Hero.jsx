export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(17,24,39,0.06),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <p className="uppercase tracking-[0.25em] text-xs text-gray-600 mb-6">Fine Art Printing • Bespoke Framing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
            Museum‑grade prints, tailored frames, impeccable finish.
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
            We help artists, photographers and collectors present their work at its absolute best.
            Archival pigment prints on premium stocks, handcrafted mouldings and gallery‑level glazing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm hover:bg-black transition-colors">Explore Services</a>
            <a href="#contact" className="rounded-full border border-gray-300 px-5 py-3 text-sm hover:border-gray-400">Request a Quote</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full ring-2 ring-white" />
            </div>
            <span>Trusted by artists and galleries worldwide</span>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519710884005-55fcea6c37f7?q=80&w=1800&auto=format&fit=crop"
              alt="Framed fine art print"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
