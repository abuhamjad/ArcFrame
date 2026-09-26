import { motion } from 'framer-motion'
import { Radio, Brain, MapPin, FileText, Building2, Bell, Workflow } from 'lucide-react'

const roadmapItems = [
  {
    icon: Radio,
    title: 'Live Sensor Integration',
    description: 'Connect to real-time environmental sensor networks',
    status: 'future',
  },
  {
    icon: Brain,
    title: 'Advanced AI Forecasting',
    description: 'Predictive pollution modeling with machine learning',
    status: 'future',
  },
  {
    icon: MapPin,
    title: 'GIS-Based Pollution Maps',
    description: 'Visualize air quality data on geographic information systems',
    status: 'future',
  },
  {
    icon: FileText,
    title: 'Automated Environmental Reports',
    description: 'Generate comprehensive pollution reports automatically',
    status: 'future',
  },
  {
    icon: Building2,
    title: 'Multi-City Monitoring',
    description: 'Scale environmental intelligence across multiple regions',
    status: 'future',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Intelligent alerting based on pollution thresholds',
    status: 'future',
  },
  {
    icon: Workflow,
    title: 'Government Workflow Integration',
    description: 'Connect with existing government systems and processes',
    status: 'future',
  },
]

export default function FutureVision() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-850">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 block">Future Vision</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-950 tracking-tight mb-6">
            From Monitoring To Environmental Intelligence
          </h2>
          <p className="text-lg text-gray-600">
            The platform is designed to evolve toward more advanced capabilities
            that will further support environmental authorities and urban planners.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform lg:-translate-x-1/2" />

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative pl-12 lg:pl-0 ${
                  index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:text-left'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 top-0 w-3 h-3 border-2 border-blue-primary bg-white transform lg:-translate-x-1/2" />

                <div
                  className={`inline-block border border-gray-300 p-4 bg-white ${
                    index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon size={18} className="text-blue-primary" />
                    <h3 className="text-sm font-semibold text-gray-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600">{item.description}</p>
                  <span className="inline-block mt-2 text-xs text-gray-500 border border-gray-300 px-2 py-0.5">
                    Roadmap
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-12"
        >
          These are future capabilities and roadmap items. They are not necessarily available today.
        </motion.p>
      </div>
    </section>
  )
}
