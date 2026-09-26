import { Monitor, Brain, MapPin, BarChart3 } from 'lucide-react'
import { m } from 'framer-motion'

const values = [
  {
    icon: Monitor,
    title: 'Real-Time Monitoring',
    description: 'Track air quality conditions as they happen',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced analysis of pollution patterns',
  },
  {
    icon: MapPin,
    title: 'Localized Risk Detection',
    description: 'Identify specific areas of concern',
  },
  {
    icon: BarChart3,
    title: 'Decision Support',
    description: 'Actionable intelligence for authorities',
  },
]

export default function ValueStrip() {
  return (
    <section className="py-12 bg-neutral-850 border-y border-gray-200">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <m.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 mb-4">
                <value.icon size={24} className="text-blue-primary" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 mb-1">
                {value.title}
              </h3>
              <p className="text-xs text-gray-500">{value.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
