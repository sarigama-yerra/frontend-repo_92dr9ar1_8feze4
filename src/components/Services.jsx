import { Frame, Image, Sparkles, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Image,
    title: 'Fine Art Printing',
    desc: 'Archival pigment printing up to 60" wide on Hahnemühle, Canson and other premium stocks.'
  },
  {
    icon: Frame,
    title: 'Custom Picture Framing',
    desc: 'Handcrafted mouldings, museum glass, acid‑free mounts and conservation methods.'
  },
  {
    icon: ShieldCheck,
    title: 'Conservation & Mounting',
    desc: 'Dry mounting, float mounting, UV conservation, hinging and anti‑static options.'
  },
  {
    icon: Sparkles,
    title: 'Retouch & Artwork Prep',
    desc: 'Colour‑managed workflow, soft‑proofing and expert retouching on request.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">Services</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-gray-400">Get a quote</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
