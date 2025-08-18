'use client'

import { motion } from 'framer-motion'
import { legal } from '@/config/company'

const navigation = {
  services: [
    { name: 'Workflow Automation', href: '#services' },
    { name: 'AI Agents & Chatbots', href: '#services' },
    { name: 'Process Digitization', href: '#services' },
    { name: 'Data Analytics', href: '#services' },
    { name: 'System Integration', href: '#services' },
    { name: 'Custom AI Solutions', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: legal.privacyPolicy },
    { name: 'Terms of Service', href: legal.termsOfService },
  ],
  industries: [
    { name: 'Offshore Logistics', href: '#' },
    { name: 'Construction & Energy', href: '#' },
    { name: 'Project Management', href: '#' },
    { name: 'SMEs', href: '#' },
  ],
} as const

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <span className="text-2xl font-bold text-gradient">Bonneval Solutions</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Expert AI automation and process optimization consultancy. 
                Transforming business operations through intelligent automation 
                and digital transformation solutions.
              </p>
              <div className="flex space-x-4">
                {/* Social icons unchanged */}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Industries</h3>
              <ul className="space-y-3">
                {navigation.industries.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Bonneval Solutions. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href={legal.privacyPolicy} className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href={legal.termsOfService} className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href={legal.cookiePolicy} className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
