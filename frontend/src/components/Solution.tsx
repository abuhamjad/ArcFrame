import { motion } from 'framer-motion'
import MediaPlaceholder from './MediaPlaceholder'

export default function Solution() {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-neutral-850">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 block">The Solution</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-950 tracking-tight mb-6">
            One Platform. A Clearer View of Urban Air.
          </h2>
          <p className="text-lg text-gray-600">
            SustainAir brings air-quality monitoring, pollution trends, risk
            assessment, alerts, forecasting, and AI-powered insights into one
            unified platform.
          </p>
        </motion.div>

        {/* Dashboard Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-gray-300"
        >
          {/* REPLACE: Add your SustainAir dashboard screenshot here */}
          <MediaPlaceholder
            type="image"
            label="SUSTAINAIR DASHBOARD"
            description="Replace with your SustainAir dashboard screenshot"
            aspect="aspect-[16/9]"
          />
        </motion.div>
      </div>
    </section>
  )
}
