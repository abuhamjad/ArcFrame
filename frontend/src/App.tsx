import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueStrip from './components/ValueStrip'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import Benefits from './components/Benefits'
import UseCases from './components/UseCases'
import FutureVision from './components/FutureVision'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <ProductShowcase />
        <Benefits />
        <UseCases />
        <FutureVision />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
