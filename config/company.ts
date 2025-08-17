// Environment detection
const isMainBranch = process.env.VERCEL_GIT_COMMIT_REF === 'main'
const isPreview = !isMainBranch

// Domain routing based on environment
export const getDomainConfig = () => {
  if (isMainBranch) {
    return {
      main: 'bonnevalsolutions.com',
      tools: 'tools.bonnevalsolutions.com',
      isProduction: true
    }
  } else {
    return {
      main: 'preview.bonnevalsolutions.com',
      tools: 'preview-tools.bonnevalsolutions.com',
      isProduction: false
    }
  }
}

export const companyConfig = {
  // Basic Company Information
  name: isPreview ? 'Preview Bonneval Solutions' : 'Bonneval Solutions',
  fullName: isPreview ? 'Preview Bonneval Solutions SASU' : 'Bonneval Solutions SASU',
  legalForm: 'SASU (Société par Actions Simplifiée Unipersonnelle)',
  founded: '2024',
  industry: 'AI Automation & Process Optimization Consultancy',
  
  // Contact Information
  contact: {
    email: 'contact@bonnevalsolutions.com',
    phone: '+33 (0)1 XX XX XX XX',
    phoneFormatted: '+33 1 XX XX XX XX',
    location: 'France (Remote & On-site)',
    businessHours: 'Mon-Fri: 9:00 AM - 6:00 PM CET',
    timezone: 'CET (Central European Time)',
  },
  
  // Business Information
  business: {
    type: 'Consultancy',
    focus: 'AI Automation & Process Optimization',
    targetClients: [
      'Offshore logistics companies',
      'Construction & energy sectors',
      'Project management-heavy industries',
      'SMEs lacking automation expertise',
      'Corporate departments seeking efficiency',
      'Operations-heavy businesses'
    ],
    services: [
      'Workflow Automation',
      'AI Agents & Chatbots',
      'Process Digitization',
      'Data Analytics & Reporting',
      'System Integration',
      'Custom AI Solutions'
    ],
    technologies: [
      'Voiceflow & ChatGPT',
      'n8n Workflow Automation',
      'Airtable & Notion',
      'Custom AI Solutions',
      'API Integrations',
      'Data Analytics Platforms'
    ]
  },
  
  // Social Media & Online Presence
  social: {
    linkedin: 'https://linkedin.com/company/bonnevalsolutions',
    twitter: 'https://twitter.com/bonnevalsolutions',
    github: 'https://github.com/bonnevalsolutions',
    website: 'https://bonnevalsolutions.com'
  },
  
  // External Services
  external: {
    intranet: 'https://intranet.bonnevalsolutions.com',
    client: 'https://client.bonnevalsolutions.com',
    tools: `https://${getDomainConfig().tools}`
  },
  
  // Legal & Compliance
  legal: {
    copyright: isPreview ? '© 2024 Preview Bonneval Solutions. All rights reserved.' : '© 2024 Bonneval Solutions. All rights reserved.',
    privacyPolicy: '/privacy',
    termsOfService: '/terms',
    cookiePolicy: '/cookies'
  },
  
  // Branding & Messaging
  branding: {
    tagline: 'Transform Your Business with AI Automation',
    description: 'Expert AI automation and process optimization consultancy for SMEs and corporate departments. Specializing in workflow automation, AI agents, and custom digital solutions.',
    mission: 'To democratize AI automation for businesses of all sizes, making complex processes simple and efficient.',
    vision: isPreview ? 'Position Preview Bonneval Solutions as a trusted boutique AI integration partner.' : 'Position Bonneval Solutions as a trusted boutique AI integration partner.'
  }
}

// Helper functions for common use cases
export const getCompanyInfo = {
  name: () => companyConfig.name,
  fullName: () => companyConfig.fullName,
  founded: () => companyConfig.founded,
  contactEmail: () => companyConfig.contact.email,
  contactPhone: () => companyConfig.contact.phone,
  businessHours: () => companyConfig.contact.businessHours,
  copyright: () => companyConfig.legal.copyright,
  tagline: () => companyConfig.branding.tagline,
  description: () => companyConfig.branding.description
}

// Export individual sections for specific use cases
export const { contact, business, social, external, legal, branding } = companyConfig
