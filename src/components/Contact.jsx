import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('Message sent! I will get back to you soon.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input name="name" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input type="email" name="email" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Subject</label>
            <input name="subject" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
          </div>
          <div className="flex items-center gap-3">
            <button disabled={loading} className="px-5 py-2 rounded-lg bg-gray-900 text-white disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
