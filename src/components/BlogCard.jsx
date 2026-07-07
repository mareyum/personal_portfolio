import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow"
    >
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-pin-gray font-semibold">{date}</p>
        <h3 className="font-bold text-lg mt-1 leading-snug group-hover:text-pin-red transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-pin-gray mt-2 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  )
}
