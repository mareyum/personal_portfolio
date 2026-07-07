import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-full bg-pin-red text-white grid place-items-center font-extrabold">
              J
            </span>
            <span className="font-extrabold">Jordan Reese</span>
          </div>
          <p className="text-sm text-pin-gray max-w-xs">
            Brand identity & visual strategy for founders who want their
            brand to feel as considered as their product.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-3">Site</h3>
          <ul className="space-y-2 text-sm text-pin-gray">
            <li><Link className="hover:text-pin-red" to="/about">About</Link></li>
            <li><Link className="hover:text-pin-red" to="/projects">Projects</Link></li>
            <li><Link className="hover:text-pin-red" to="/resume">Resume</Link></li>
            <li><Link className="hover:text-pin-red" to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-3">Get in touch</h3>
          <ul className="space-y-2 text-sm text-pin-gray">
            <li><Link className="hover:text-pin-red" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-pin-red" to="/testimonials">Testimonials</Link></li>
            <li>hello@jordanreese.design</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-pin-gray pb-8">
        © {new Date().getFullYear()} Jordan Reese. All rights reserved.
      </div>
    </footer>
  )
}
