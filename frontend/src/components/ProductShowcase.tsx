import { motion } from 'framer-motion'
import { ArrowRight, Activity, Droplets, Wind, TrendingUp, Bell, Map } from 'lucide-react'
import { useSmoothScroll } from './useSmoothScroll'
import MediaPlaceholder from './MediaPlaceholder'

const sampleMetrics = [
  { icon: Activity, label: 'AQI', value: '72' },
  { icon: Droplets, label: 'PM2.5', value: '48' },
  { icon: Wind, label: 'PM10', value: '82' },
  { icon: TrendingUp, label: 'Trend', value: '↑12%' },
  { icon: Bell, label: 'Alerts', value: '3' },
  { icon: Map, label: 'Zones', value: '24' },
]

export default function ProductShowcase() {
  const scrollToSection = useSmoothScroll()

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Product</span>
          <h2 className="section-heading mb-6">
            See the Bigger Environmental Picture
          </h2>
          <p className="section-subheading mx-auto">
            A unified dashboard that brings together all your air quality data.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Main Dashboard Placeholder */}
          <div className="border border-gray-300">
            {/* REPLACE: Add your SustainAir dashboard screenshot here */}
            <MediaPlaceholder
              type="image"
              label="SUSTAINAIR DASHBOARD SCREENSHOT"
              description="Replace with your actual SustainAir prototype screenshot"
              aspect="aspect-[16/9]"
            />
          </div>

          {/* Floating Metric Cards */}
          <div className="absolute -top-4 left-4 grid grid-cols-3 gap-2">
            {sampleMetrics.slice(0, 3).map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-white border border-gray-200 px-3 py-2"
              >
                <p className="text-xs text-gray-500">{metric.label}</p>
                <p className="text-lg font-semibold text-gray-950">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="absolute -bottom-4 right-4 grid grid-cols-3 gap-2">
            {sampleMetrics.slice(3).map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-white border border-gray-200 px-3 py-2"
              >
                <p className="text-xs text-gray-500">{metric.label}</p>
                <p className="text-lg font-semibold text-gray-950">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            type="button"
            onClick={() => scrollToSection('features')}
            className="btn-secondary"
          >
            Explore SustainAir
            <ArrowRight size={18} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
