export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526313199968-70e399ffe597?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504198266285-165a04b8a5b0?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483193722442-5422d99849f4?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop'
  ]

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">Recent Work</h2>
          <p className="text-sm text-gray-600 max-w-md">A small selection of frames and prints we’ve crafted recently for clients.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <img src={src} alt="Framed artwork" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
