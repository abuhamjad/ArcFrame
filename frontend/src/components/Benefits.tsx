import { motion } from 'framer-motion'
import { Zap, Eye, AlertTriangle, Target } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Monitor Faster',
    description: 'Centralize relevant air-quality information.',
  },
  {
    icon: Eye,
    title: 'Understand Better',
    description: 'Convert complex environmental data into easier-to-understand insights.',
  },
  {
    icon: AlertTriangle,
    title: 'Respond Earlier',
    description: 'Identify changing pollution conditions and emerging risks.',
  },
  {
    icon: Target,
    title: 'Plan Smarter',
    description: 'Support data-driven environmental planning.',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-850">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-950 tracking-tight mb-6">
            Built For Faster Environmental Decisions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed to help authorities act on air quality data with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-300 p-6 hover:border-gray-400 transition-colors"
            >
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-4">
                <benefit.icon size={24} className="text-blue-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-950 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
