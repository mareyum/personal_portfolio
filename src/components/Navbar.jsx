import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Testimonials' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center gap-2 px-4 sm:px-6 h-16">
        <NavLink
          to="/"
          className="flex items-center gap-2 pr-4 shrink-0"
        >
          <span className="w-9 h-9 rounded-full bg-pin-red text-white grid place-items-center font-extrabold text-lg">
            J
          </span>
          <span className="font-extrabold text-lg tracking-tight hidden sm:inline">
            Jordan Reese
          </span>
        </NavLink>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-pin-black text-white'
                    : 'text-pin-black hover:bg-pin-gray-light'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto shrink-0">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                isActive
                  ? 'bg-pin-red-dark text-white'
                  : 'bg-pin-red text-white hover:bg-pin-red-dark'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  )
}
