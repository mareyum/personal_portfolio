import { education, experience, skills, tools } from '../data/resume'
import SectionHeading from '../components/SectionHeading'

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Resume"
        title="Experience & Skills"
        subtitle="A quick look at where I've worked and what I bring to a project."
        className="mb-14"
      />

      <section>
        <h2 className="font-bold text-xl mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.role} className="grid sm:grid-cols-4 gap-2 sm:gap-6 border-b border-neutral-200 pb-6">
              <p className="text-sm font-semibold text-pin-gray">{job.period}</p>
              <div className="sm:col-span-3">
                <h3 className="font-bold">{job.role}</h3>
                <p className="text-sm text-pin-red font-semibold">{job.org}</p>
                <p className="text-sm text-pin-gray mt-2">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-bold text-xl mb-6">Education</h2>
        {education.map((ed) => (
          <div key={ed.degree} className="grid sm:grid-cols-4 gap-2 sm:gap-6">
            <p className="text-sm font-semibold text-pin-gray">{ed.period}</p>
            <div className="sm:col-span-3">
              <h3 className="font-bold">{ed.degree}</h3>
              <p className="text-sm text-pin-red font-semibold">{ed.school}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="font-bold text-xl mb-6">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span>{skill.name}</span>
                <span className="text-pin-gray">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-pin-gray-light overflow-hidden">
                <div
                  className="h-full rounded-full bg-pin-red"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-bold text-xl mb-6">Tools</h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full bg-pin-gray-light text-sm font-semibold"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
