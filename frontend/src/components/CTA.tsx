import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Mail, User, Building, MessageSquare, Check } from 'lucide-react'
import { useSmoothScroll } from './useSmoothScroll'

export default function CTA() {
  const [showModal, setShowModal] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  })
  const scrollToSection = useSmoothScroll()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setFormSubmitted(false)
    setFormData({ name: '', organization: '', email: '', message: '' })
  }

  return (
    <>
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="section-label mb-4 block">Get Started</span>
            <h2 className="section-heading mb-6">
              Ready To Make Air Quality Data More Actionable?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Let's explore how Arcframe can support smarter environmental monitoring
              and decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn-primary"
              >
                Request a Demo
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Contact Arcframe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Request Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-950">
                  Request a Demo
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 border border-gray-300 flex items-center justify-center">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-950 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600">
                      Your request has been captured in this demo.
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="btn-primary mt-6"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-primary"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Organization
                      </label>
                      <div className="relative">
                        <Building
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          id="organization"
                          required
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organization: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-primary"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare
                          size={18}
                          className="absolute left-3 top-3 text-gray-400"
                        />
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-primary resize-none"
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Submit Request
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      This is a frontend demo. No data is sent anywhere.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
