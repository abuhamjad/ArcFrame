import { m } from 'framer-motion'
import { Compass, Users, Rocket } from 'lucide-react'

const pillars = [
  {
    icon: Compass,
    title: 'Why We Exist',
    description:
      'Air quality data is abundant, but the teams responsible for acting on it rarely get it in a form they can use. Arcframe closes that gap.',
  },
  {
    icon: Users,
    title: 'Who We Build For',
    description:
      'Government bodies, pollution control agencies, urban planners and environmental researchers working on urban air quality.',
  },
  {
    icon: Rocket,
    title: 'Where We Are',
    description:
      'SustainAir is our first product — an environmental intelligence platform currently in active development with early partners.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-gray-200">
      <div className="section-container">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 block">About</span>
          <h2 className="section-heading mb-6">
            An Environmental Intelligence Company
          </h2>
          <p className="text-lg text-gray-600">
            Arcframe builds decision-support software for the people responsible
            for urban air quality. We turn fragmented environmental data into
            clear, localized intelligence that teams can act on.
          </p>
        </m.div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <m.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 p-6 hover:border-gray-300 transition-colors"
            >
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-4">
                <pillar.icon size={24} className="text-blue-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-950 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-600">{pillar.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
