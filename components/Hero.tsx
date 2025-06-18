'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Automation',
    description: 'Intelligent workflow automation using cutting-edge AI technologies',
    icon: SparklesIcon,
  },
  {
    name: 'Process Optimization',
    description: 'Streamline operations and boost efficiency across your organization',
    icon: CogIcon,
  },
  {
    name: 'Data-Driven Insights',
    description: 'Transform data into actionable insights for better decision making',
    icon: ChartBarIcon,
  },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium"
                >
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  AI Automation Experts
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  Transform Your Business with{' '}
                  <span className="text-gradient">AI Automation</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  Expert consultancy specializing in AI-powered workflow automation, 
                  process optimization, and digital transformation for SMEs and corporate departments.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Start Your Transformation
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Explore Services
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
        <div className="w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
        <div className="w-80 h-80 bg-gradient-to-tr from-secondary-200 to-secondary-400 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  )
} 