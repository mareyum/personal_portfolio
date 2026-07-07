import { posts } from '../data/blog'
import BlogCard from '../components/BlogCard'
import SectionHeading from '../components/SectionHeading'

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Blog"
        title="Notes on branding"
        subtitle="Thoughts on identity, packaging, and building brands that last, written from the studio."
        className="mb-12"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
