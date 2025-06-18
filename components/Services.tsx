'use client'

import { motion } from 'framer-motion'
import { 
  CogIcon, 
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Workflow Automation',
    description: 'Streamline repetitive tasks and complex workflows using AI-powered automation tools. Perfect for logistics, engineering, and operations-heavy businesses.',
    icon: CogIcon,
    features: ['Process mapping & analysis', 'Custom automation workflows', 'Integration with existing systems', 'Performance monitoring'],
    color: 'primary'
  },
  {
    name: 'AI Agents & Chatbots',
    description: 'Intelligent conversational agents using platforms like Voiceflow and ChatGPT. Automate customer service, internal communications, and data processing.',
    icon: ChatBubbleLeftRightIcon,
    features: ['Custom AI chatbots', 'Voiceflow integration', 'Multi-language support', 'Analytics & insights'],
    color: 'secondary'
  },
  {
    name: 'Process Digitization',
    description: 'Transform paper-based and manual processes into efficient digital workflows. From procurement to maintenance planning and reporting.',
    icon: DocumentTextIcon,
    features: ['Digital form creation', 'Automated approvals', 'Document management', 'Compliance tracking'],
    color: 'primary'
  },
  {
    name: 'Data Analytics & Reporting',
    description: 'Turn your data into actionable insights with automated reporting and analytics dashboards.',
    icon: ChartBarIcon,
    features: ['Custom dashboards', 'Automated reporting', 'KPI tracking', 'Predictive analytics'],
    color: 'secondary'
  },
  {
    name: 'System Integration',
    description: 'Seamlessly connect your existing tools and platforms using n8n, Airtable, and other integration platforms.',
    icon: WrenchScrewdriverIcon,
    features: ['API integrations', 'Data synchronization', 'Custom connectors', 'Real-time updates'],
    color: 'primary'
  },
  {
    name: 'Custom AI Solutions',
    description: 'Bespoke AI tools and applications tailored to your specific business needs and industry requirements.',
    icon: ComputerDesktopIcon,
    features: ['Custom AI models', 'Industry-specific solutions', 'Scalable architecture', 'Ongoing support'],
    color: 'secondary'
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI automation and process optimization solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {service.name}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700 font-medium text-sm group-hover:underline`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI automation can streamline your processes, reduce costs, and boost efficiency.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 