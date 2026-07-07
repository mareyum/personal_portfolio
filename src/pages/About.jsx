import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <img
          src="https://picsum.photos/seed/jordan-portrait/700/700"
          alt="Jordan Reese"
          className="w-full aspect-square object-cover rounded-2xl"
        />
        <div>
          <span className="text-pin-red font-bold text-sm uppercase tracking-wide">
            About
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
            Hi, I'm Jordan Reese.
          </h1>
          <p className="text-pin-gray mt-4 leading-relaxed">
            I'm a branding specialist working with founders and small teams
            who need their brand to feel as considered as their product.
            Over the last several years I've helped coffee roasters, skincare
            lines, logistics companies, and fitness studios build identities
            that hold up across a website, a shelf, and a hand-written thank
            you card.
          </p>
          <p className="text-pin-gray mt-4 leading-relaxed">
            My process starts with questions, not mood boards: what do you
            want people to feel, what can you actually deliver on, and where
            does this brand need to show up in the next two years. The
            design work only starts once those answers are clear.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-pin-red text-white font-bold hover:bg-pin-red-dark transition-colors"
          >
            Let's work together
          </Link>
        </div>
      </div>

      <SectionHeading
        eyebrow="How I work"
        title="A process built around clarity"
        className="mt-20 mb-10"
      />
      <div className="grid sm:grid-cols-3 gap-6">
        {[
          {
            step: '01',
            title: 'Discovery',
            body: 'Workshops and questions to find the real problem the brand needs to solve.',
          },
          {
            step: '02',
            title: 'Strategy & Concepts',
            body: 'A small set of strong directions grounded in that strategy, not a trend board.',
          },
          {
            step: '03',
            title: 'System & Handoff',
            body: 'A full system and file handoff so your team can run with it confidently.',
          },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <span className="text-pin-red font-extrabold text-2xl">
              {item.step}
            </span>
            <h3 className="font-bold text-lg mt-2">{item.title}</h3>
            <p className="text-sm text-pin-gray mt-2">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
