import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-32 text-center">
      <p className="text-pin-red font-extrabold text-6xl">404</p>
      <h1 className="text-2xl font-extrabold mt-4">Page not found</h1>
      <p className="text-pin-gray mt-2">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-3 rounded-full bg-pin-red text-white font-bold hover:bg-pin-red-dark transition-colors"
      >
        Back Home
      </Link>
    </div>
  )
}
