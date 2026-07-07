import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative block break-inside-avoid mb-4 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm hover:shadow-xl transition-shadow"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        style={{ aspectRatio: `3 / ${project.height / 200}` }}
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-200" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 translate-y-2 group-hover:translate-y-0">
        <span className="inline-block w-fit mb-2 text-[11px] font-bold uppercase tracking-wide bg-white text-pin-black px-2 py-1 rounded-full">
          {project.category}
        </span>
        <h3 className="text-white font-bold leading-snug">{project.title}</h3>
        <p className="text-white/80 text-xs mt-1">{project.client}</p>
      </div>
      <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-pin-red text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold text-sm">
        →
      </span>
    </Link>
  )
}
