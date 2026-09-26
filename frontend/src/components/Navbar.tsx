import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { useSmoothScroll, scrollToTop } from '../hooks/useSmoothScroll'

const navLinks = [
  { label: 'Product', sectionId: 'product' },
  { label: 'How It Works', sectionId: 'how-it-works' },
  { label: 'Features', sectionId: 'features' },
  { label: 'Use Cases', sectionId: 'use-cases' },
  { label: 'About', sectionId: 'about' },
  { label: 'Contact', sectionId: 'contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollToSection = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const handleNavClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }, [scrollToSection])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-200 ${
        isScrolled ? 'border-gray-200 shadow-sm' : 'border-gray-200'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className={`flex items-center justify-between transition-all duration-200 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center bg-transparent border-none cursor-pointer p-0"
            aria-label="Arcframe — back to top"
          >
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-gray-950">ARC</span>
              <span className="text-blue-primary">FRAME</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.sectionId)}
                className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="btn-primary text-sm bg-blue-primary text-white font-medium px-6 py-3 border-none cursor-pointer hover:bg-blue-dark transition-colors"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-gray-950 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.sectionId)}
                  className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="btn-primary text-sm bg-blue-primary text-white font-medium px-6 py-3 border-none cursor-pointer hover:bg-blue-dark transition-colors mt-2"
              >
                Request a Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
