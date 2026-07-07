import { Link, useParams } from 'react-router-dom'
import { getProjectById, projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-2xl font-extrabold">Project not found</h1>
        <Link
          to="/projects"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-pin-red text-white font-bold"
        >
          Back to Projects
        </Link>
      </div>
    )
  }

  const more = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <Link to="/projects" className="text-sm font-semibold text-pin-gray hover:text-pin-red">
        ← Back to Projects
      </Link>

      <div className="mt-6">
        <span className="text-pin-red font-bold text-sm uppercase tracking-wide">
          {project.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 text-sm text-pin-gray">
          <p><span className="font-semibold text-pin-black">Client: </span>{project.client}</p>
          <p><span className="font-semibold text-pin-black">Year: </span>{project.year}</p>
        </div>
      </div>

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-2xl mt-8 object-cover max-h-[560px]"
      />

      <div className="grid sm:grid-cols-3 gap-10 mt-10">
        <div className="sm:col-span-2">
          <h2 className="font-bold text-xl mb-3">Overview</h2>
          <p className="text-pin-gray leading-relaxed">{project.summary}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-3">Deliverables</h2>
          <ul className="space-y-2">
            {project.deliverables.map((d) => (
              <li key={d} className="text-sm text-pin-gray flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pin-red" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {more.length > 0 && (
        <div className="mt-20">
          <h2 className="font-bold text-xl mb-6">More Projects</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {more.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-xs text-pin-red font-bold uppercase">{p.category}</p>
                  <p className="font-semibold text-sm mt-1">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
