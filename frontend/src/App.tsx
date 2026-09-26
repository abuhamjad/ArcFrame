import { LazyMotion, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueStrip from './components/ValueStrip'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import Benefits from './components/Benefits'
import UseCases from './components/UseCases'
import About from './components/About'
import FutureVision from './components/FutureVision'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // `strict` forbids the heavyweight `motion.*` components, so a stray import
    // can't silently pull the full bundle back in. `reducedMotion="user"` makes
    // every animation below honour prefers-reduced-motion.
    <LazyMotion features={() => import('./motionFeatures').then((mod) => mod.default)} strict>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white">
          {/* Kept as an anchor for assistive-tech semantics, but the default
              navigation is cancelled so no hash ever reaches the address bar
              (see the clean-URL rule for this site). */}
          <a
            href="#main-content"
            className="skip-link"
            onClick={(e) => {
              e.preventDefault()
              const main = document.getElementById('main-content')
              main?.focus()
              main?.scrollIntoView({ block: 'start' })
            }}
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <ValueStrip />
            <Problem />
            <HowItWorks />
            <Features />
            <ProductShowcase />
            <Benefits />
            <UseCases />
            <About />
            <FutureVision />
            <CTA />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
