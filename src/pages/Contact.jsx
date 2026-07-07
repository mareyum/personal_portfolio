import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's start a project"
        subtitle="Tell me a bit about your brand and what you're looking for — I reply within a couple of days."
        className="mb-12"
      />

      {sent ? (
        <div className="text-center rounded-2xl border border-neutral-200 p-10">
          <h2 className="font-bold text-xl">Thanks — message sent.</h2>
          <p className="text-pin-gray mt-2">
            This is a placeholder confirmation. Wire this form up to your
            email service or form backend of choice.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pin-red"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pin-red"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5" htmlFor="project">
              Project type
            </label>
            <select
              id="project"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pin-red"
            >
              <option>Brand Identity</option>
              <option>Logo Design</option>
              <option>Packaging</option>
              <option>Social Media</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pin-red resize-none"
              placeholder="Tell me about your brand and timeline..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-pin-red text-white font-bold hover:bg-pin-red-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
