import ProjectCard from './ProjectCard'

export default function MasonryGrid({ projects }) {
  if (!projects.length) {
    return (
      <p className="text-center text-pin-gray py-20">
        No projects in this category yet.
      </p>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
