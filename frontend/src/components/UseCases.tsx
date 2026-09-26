import { m } from 'framer-motion'
import { Building2, ShieldCheck, Map, Factory, FlaskConical } from 'lucide-react'

const scenarios = [
  {
    icon: Building2,
    title: 'Government & Municipal Bodies',
    description: 'Monitor urban pollution and support environmental decision-making.',
  },
  {
    icon: ShieldCheck,
    title: 'Pollution Control Agencies',
    description: 'Identify changing pollution patterns and high-risk areas.',
  },
  {
    icon: Map,
    title: 'Urban Planning',
    description: 'Use environmental intelligence to support smarter urban planning.',
  },
  {
    icon: Factory,
    title: 'Industries',
    description: 'Understand environmental conditions around operational locations.',
  },
  {
    icon: FlaskConical,
    title: 'Environmental Research',
    description: 'Explore trends and insights for environmental analysis.',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Use Cases</span>
          <h2 className="section-heading mb-6">
            Designed for Environmental Authorities
          </h2>
          <p className="section-subheading mx-auto">
            Tailored solutions for organizations working to improve urban air quality.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.map((scenario, index) => (
            <m.div
              key={scenario.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-200 p-6 hover:border-gray-300 transition-colors"
            >
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-4">
                <scenario.icon size={24} className="text-blue-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-950 mb-2">
                {scenario.title}
              </h3>
              <p className="text-sm text-gray-600">{scenario.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
