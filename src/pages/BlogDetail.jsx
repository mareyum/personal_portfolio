import { Link, useParams } from 'react-router-dom'
import { getPostBySlug, posts } from '../data/blog'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-2xl font-extrabold">Post not found</h1>
        <Link
          to="/blog"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-pin-red text-white font-bold"
        >
          Back to Blog
        </Link>
      </div>
    )
  }

  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <Link to="/blog" className="text-sm font-semibold text-pin-gray hover:text-pin-red">
        ← Back to Blog
      </Link>

      <p className="text-sm text-pin-gray font-semibold mt-6">{date}</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
        {post.title}
      </h1>

      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-2xl mt-8 object-cover max-h-96"
      />

      <div className="mt-8 space-y-5">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-pin-gray leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <h2 className="font-bold text-lg mb-6">More posts</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <p className="font-semibold text-sm p-4">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
