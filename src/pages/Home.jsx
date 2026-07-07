import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import MasonryGrid from '../components/MasonryGrid'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  const featured = projects.slice(0, 6)

  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 text-center">
        <span className="text-pin-red font-bold text-sm uppercase tracking-wide">
          Branding Specialist
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3 leading-[1.05]">
          Brand identity & visual
          <br /> strategy that sticks.
        </h1>
        <p className="text-pin-gray text-lg mt-6 max-w-xl mx-auto">
          I'm Jordan Reese. I help founders turn a rough idea into an identity
          people recognize, trust, and remember — logo, packaging, and
          everything in between.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-pin-red text-white font-bold hover:bg-pin-red-dark transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-pin-gray-light text-pin-black font-bold hover:bg-neutral-200 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <SectionHeading
          eyebrow="Selected Work"
          title="A few favorites"
          subtitle="A mix of identity systems, packaging, and logo work from the last few years."
          className="mb-10"
        />
        <MasonryGrid projects={featured} />
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 rounded-full border-2 border-pin-black font-bold hover:bg-pin-black hover:text-white transition-colors"
          >
            See all projects
          </Link>
        </div>
      </section>
    </div>
  )
}
