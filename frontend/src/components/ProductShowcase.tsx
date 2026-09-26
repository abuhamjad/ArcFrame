import { m } from 'framer-motion'
import { ArrowRight, Activity, Droplets, Wind, TrendingUp, Bell, Map } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import dashboardImg from '../assets/sustainair-dashboard.png'

const sampleMetrics = [
  { icon: Activity, label: 'AQI', value: '156' },
  { icon: Droplets, label: 'PM2.5', value: '52%' },
  { icon: Wind, label: 'PM10', value: '24%' },
  { icon: TrendingUp, label: 'Tomorrow', value: '178' },
  { icon: Bell, label: 'Alerts', value: '3' },
  { icon: Map, label: 'Stations', value: '42' },
]

export default function ProductShowcase() {
  const scrollToSection = useSmoothScroll()

  return (
    <section id="product" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Product</span>
          <h2 className="section-heading mb-6">
            One Platform. A Clearer View of Urban Air.
          </h2>
          <p className="section-subheading mx-auto">
            SustainAir brings air-quality monitoring, pollution trends, risk
            assessment, alerts, forecasting, and AI-powered insights into one
            unified dashboard.
          </p>
        </m.div>

        {/* Dashboard Preview */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Main Dashboard Screenshot */}
          <div className="border border-gray-300 bg-white">
            <img
              src={dashboardImg}
              width={1919}
              height={991}
              alt="SustainAir dashboard: AQI trend over the last seven days, pollutant breakdown by share, recent alerts by location and severity, and a live weather snapshot"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Floating Metric Cards — overlay only where there is room for it */}
          <div className="absolute -top-4 left-4 hidden lg:grid grid-cols-3 gap-2">
            {sampleMetrics.slice(0, 3).map((metric) => (
              <m.div
                key={metric.label}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-white border border-gray-200 px-3 py-2"
              >
                <p className="text-xs text-gray-500">{metric.label}</p>
                <p className="text-lg font-semibold text-gray-950">{metric.value}</p>
              </m.div>
            ))}
          </div>

          <div className="absolute -bottom-4 right-4 hidden lg:grid grid-cols-3 gap-2">
            {sampleMetrics.slice(3).map((metric) => (
              <m.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-white border border-gray-200 px-3 py-2"
              >
                <p className="text-xs text-gray-500">{metric.label}</p>
                <p className="text-lg font-semibold text-gray-950">{metric.value}</p>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* CTA */}
        <m.div
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
        </m.div>
      </div>
    </section>
  )
}
