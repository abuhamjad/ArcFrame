import { motion } from 'framer-motion'
import { Plug, Cpu, LineChart, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect',
    description: 'Bring together relevant air-quality and environmental data.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Analyze',
    description: 'Process pollution patterns and identify meaningful changes.',
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Predict',
    description:
      'Use AI-powered analysis to identify potential risks and trends.',
  },
  {
    number: '04',
    icon: Zap,
    title: 'Act',
    description: 'Deliver clear alerts and actionable insights for decision-makers.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">How It Works</span>
          <h2 className="section-heading mb-6">
            From Data to Decision in Four Steps
          </h2>
          <p className="section-subheading mx-auto">
            A streamlined process designed for government and environmental teams.
          </p>
        </motion.div>

        {/* Desktop Steps */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gray-200" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 border border-gray-300 bg-white flex items-center justify-center mb-6 relative z-10">
                    <step.icon size={24} className="text-blue-primary" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 mb-2">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Steps */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 border border-gray-200 p-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 border border-gray-300 flex items-center justify-center">
                  <step.icon size={24} className="text-blue-primary" />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-950 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
