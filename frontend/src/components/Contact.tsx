import { motion } from 'framer-motion'
import { Mail, Globe } from 'lucide-react'

// TODO: Replace with your actual contact information
const contactInfo = {
  email: 'hello@arcframe.example',
  linkedin: 'Arcframe',
  website: 'arcframe.example',
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-neutral-850 border-t border-gray-200">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-4 block">Contact</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-950 tracking-tight mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Interested in learning more about Arcframe and SustainAir?
              Reach out to us for inquiries, partnerships, or to request a demo.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-gray-950 transition-colors group"
              >
                <div className="w-10 h-10 border border-gray-300 flex items-center justify-center group-hover:border-blue-primary transition-colors">
                  <Mail size={18} className="text-gray-600" />
                </div>
                <span>{contactInfo.email}</span>
              </a>

              <a
                href={`https://linkedin.com/company/${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-950 transition-colors group"
              >
                <div className="w-10 h-10 border border-gray-300 flex items-center justify-center group-hover:border-blue-primary transition-colors">
                  {/* LinkedIn icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <span>LinkedIn: {contactInfo.linkedin}</span>
              </a>

              <a
                href={`https://${contactInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-950 transition-colors group"
              >
                <div className="w-10 h-10 border border-gray-300 flex items-center justify-center group-hover:border-blue-primary transition-colors">
                  <Globe size={18} className="text-gray-600" />
                </div>
                <span>{contactInfo.website}</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Visual/Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md border border-gray-300 bg-white p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-gray-300 flex items-center justify-center">
                <Mail size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-950 mb-2">
                Arcframe
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                AI-Powered Environmental Intelligence
              </p>

              {/* TODO: Replace with team image if available */}
              <div className="border border-gray-200 p-4 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  ADD TEAM IMAGE
                </p>
                <p className="text-xs text-gray-500">
                  Replace with team photo or office image
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
