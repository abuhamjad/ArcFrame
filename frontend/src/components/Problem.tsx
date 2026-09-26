import { m } from 'framer-motion'
import { Layers, AlertTriangle, FileSearch } from 'lucide-react'
import smogImg from '../assets/urban-smog.jpeg'

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
        <m.div
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
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Problem Cards */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <m.div
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
              </m.div>
            ))}
          </div>

          {/* Visual */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <figure className="border border-gray-300">
              <img
                src={smogImg}
                width={540}
                height={360}
                alt="City skyline barely visible through a thick layer of smog"
                className="w-full aspect-video object-cover block"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="text-xs text-gray-500 px-4 py-3 border-t border-gray-200 bg-white">
                Persistent haze over a metropolitan area — the conditions authorities
                are asked to explain, forecast and act on.
              </figcaption>
            </figure>
          </m.div>
        </div>
      </div>
    </section>
  )
}
