export default function CategoryPills({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === cat
              ? 'bg-pin-red text-white'
              : 'bg-pin-gray-light text-pin-black hover:bg-neutral-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
