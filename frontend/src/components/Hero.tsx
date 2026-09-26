import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import dashboardImg from '../assets/sustainair-dashboard.png'

export default function Hero() {
  const scrollToSection = useSmoothScroll()

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-4 block">
              AI-Powered Environmental Intelligence
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-950 tracking-tight leading-tight mb-6">
              Turn Air Quality Data Into Action.
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Arcframe helps government and environmental teams monitor pollution,
              identify emerging risks, and make faster, data-driven decisions with
              AI-powered environmental intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Request a Demo
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('features')}
                className="btn-secondary"
              >
                Explore SustainAir
              </button>
            </div>
          </m.div>

          {/* Right Visual */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Product screenshot */}
            <div className="border border-gray-300 bg-white">
              <img
                src={dashboardImg}
                width={1919}
                height={991}
                alt="SustainAir executive dashboard showing national AQI, 24-hour prediction, monitoring station count, AQI trend chart and recent pollution alerts"
                className="w-full h-auto block"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            {/* Floating Data Cards */}
            <div className="absolute -left-4 top-1/4 hidden lg:block">
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white border border-gray-200 p-4 min-w-[140px]"
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  AQI
                </p>
                <p className="text-2xl font-semibold text-gray-950">156</p>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="text-amber-600">↑</span> Moderate
                </p>
              </m.div>
            </div>

            <div className="absolute -right-4 top-1/3 hidden lg:block">
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white border border-gray-200 p-4 min-w-[140px]"
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  PM2.5
                </p>
                <p className="text-2xl font-semibold text-gray-950">52%</p>
                <p className="text-xs text-gray-500">of pollutant load</p>
              </m.div>
            </div>

            <div className="absolute -left-4 bottom-1/4 hidden lg:block">
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white border border-gray-200 p-4 min-w-[140px]"
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Active Alerts
                </p>
                <p className="text-lg font-semibold text-amber-600">3 open</p>
              </m.div>
            </div>

            <div className="absolute -right-4 bottom-1/4 hidden lg:block">
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white border border-gray-200 p-4 min-w-[140px]"
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Tomorrow
                </p>
                <p className="text-lg font-semibold text-gray-950">178</p>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="text-amber-600">↑</span> High risk
                </p>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
