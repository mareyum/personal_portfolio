export default function TestimonialCard({ testimonial }) {
  return (
    <div className="break-inside-avoid mb-4 rounded-2xl border border-neutral-200 p-6 bg-white hover:shadow-lg transition-shadow">
      <p className="text-pin-black leading-relaxed">“{testimonial.quote}”</p>
      <div className="flex items-center gap-3 mt-5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-sm">{testimonial.name}</p>
          <p className="text-xs text-pin-gray">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
