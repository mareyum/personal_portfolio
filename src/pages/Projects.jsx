import { useMemo, useState } from 'react'
import { categories, projects } from '../data/projects'
import CategoryPills from '../components/CategoryPills'
import MasonryGrid from '../components/MasonryGrid'
import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Brand identity, logo, packaging, and social work for founders who wanted their brand to feel intentional."
        className="mb-10"
      />
      <CategoryPills categories={categories} active={active} onChange={setActive} />
      <MasonryGrid projects={filtered} />
    </div>
  )
}
