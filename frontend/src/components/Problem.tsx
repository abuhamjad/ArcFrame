import { motion } from 'framer-motion'
import { Layers, AlertTriangle, FileSearch } from 'lucide-react'
import MediaPlaceholder from './MediaPlaceholder'

const problems = [
  {
    number: '01',
    icon: Layers,
    title: 'Fragmented Data',
    description:
      'Information often comes from multiple sources, making analysis slower and more difficult.',
  },
  {
    number: '02',
    icon: AlertTriangle,
    title: 'Delayed Risk Detection',
    description:
      'Changing pollution conditions can make it difficult to identify emerging risks quickly.',
  },
  {
    number: '03',
    icon: FileSearch,
    title: 'Complex Decision Making',
    description:
      'Large datasets are difficult to interpret without clear, localized insights.',
  },
]

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 block">The Problem</span>
          <h2 className="section-heading mb-6">
            Pollution Data Is Everywhere.<br />Actionable Intelligence Isn't.
          </h2>
          <p className="text-lg text-gray-600">
            Government and environmental authorities face significant challenges when
            trying to transform scattered air quality data into meaningful action.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Problem Cards */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gray-200 p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-semibold text-gray-400">
                    {problem.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <problem.icon size={20} className="text-blue-primary" />
                      <h3 className="text-lg font-semibold text-gray-950">
                        {problem.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* REPLACE: Add your pollution/city image here */}
            <MediaPlaceholder
              type="image"
              label="POLLUTION / CITY IMAGE"
              description="Replace with an image showing urban pollution or city monitoring"
              aspect="aspect-video"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
