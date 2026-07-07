import { testimonials } from '../data/testimonials'
import TestimonialCard from '../components/TestimonialCard'
import SectionHeading from '../components/SectionHeading'

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say"
        subtitle="A few words from the founders and teams I've worked with."
        className="mb-12"
      />
      <div className="columns-1 sm:columns-2 gap-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </div>
  )
}
