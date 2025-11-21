import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-gray-900 text-xl">
          Atelier Lux
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors">
            Request a Quote
          </a>
        </nav>
        <button aria-label="Open Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/90">
          <div className="px-6 py-4 grid gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-800"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm w-max">
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
