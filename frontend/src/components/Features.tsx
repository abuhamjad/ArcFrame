import { motion } from 'framer-motion'
import { Monitor, Brain, Shield, MapPin, Bell, BarChart3 } from 'lucide-react'

const features = [
  {
    number: '01',
    icon: Monitor,
    title: 'Real-Time AQI Monitoring',
    description: 'Track air-quality conditions through a centralized environmental intelligence dashboard.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI-Powered Forecasting',
    description: 'Identify potential pollution trends before they become larger risks.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Highlight areas where pollution conditions may require attention.',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Pollution Hotspot Detection',
    description: 'Identify localized areas experiencing elevated pollution levels.',
  },
  {
    number: '05',
    icon: Bell,
    title: 'Alerts & Notifications',
    description: 'Surface important environmental changes and potential risks.',
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Decision Support',
    description: 'Turn complex environmental information into clear, actionable insights.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-neutral-850">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Key Features</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-950 tracking-tight mb-6">
            Built for Environmental Intelligence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive suite of tools designed for government and environmental authorities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-300 p-6 hover:border-gray-400 transition-colors group"
            >
              <span className="text-xs font-semibold text-gray-400 block mb-4">
                {feature.number}
              </span>
              <div className="flex items-center gap-3 mb-3">
                <feature.icon size={20} className="text-blue-primary" />
                <h3 className="text-lg font-semibold text-gray-950">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-xs text-blue-primary">
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
