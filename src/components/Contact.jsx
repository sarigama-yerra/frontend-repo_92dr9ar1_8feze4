import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      service: form.get('service') || undefined,
      message: form.get('message')
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">Request a Quote</h2>
            <p className="mt-4 text-gray-700">Tell us about your artwork and framing needs. We’ll respond within one business day.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="rounded-2xl border border-gray-200 bg-white p-4">Archival pigment prints</div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4">Museum & UV glass</div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4">Conservation mounting</div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4">Custom mouldings</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Service</label>
                <select name="service" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900">
                  <option value="">Select a service</option>
                  <option>Fine Art Printing</option>
                  <option>Custom Framing</option>
                  <option>Both</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" required rows="5" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <button
              disabled={status==='loading'}
              className="mt-6 inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm hover:bg-black disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Send Request'}
            </button>
            {status === 'success' && (
              <p className="mt-3 text-sm text-green-600">Thanks! We received your request.</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
