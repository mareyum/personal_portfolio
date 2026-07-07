export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      {eyebrow && (
        <span className="text-pin-red font-bold text-sm uppercase tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
        {title}
      </h2>
      {subtitle && <p className="text-pin-gray mt-3">{subtitle}</p>}
    </div>
  )
}
