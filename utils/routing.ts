// Utility functions for dynamic routing based on environment

// Get the current domain configuration
export const getCurrentDomain = () => {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    
    if (hostname === 'preview.bonnevalsolutions.com') {
      return {
        main: 'preview.bonnevalsolutions.com',
        tools: 'preview-tools.bonnevalsolutions.com',
        isProduction: false
      }
    } else if (hostname === 'preview-tools.bonnevalsolutions.com') {
      return {
        main: 'preview.bonnevalsolutions.com',
        tools: 'preview-tools.bonnevalsolutions.com',
        isProduction: false
      }
    } else if (hostname === 'tools.bonnevalsolutions.com') {
      return {
        main: 'bonnevalsolutions.com',
        tools: 'tools.bonnevalsolutions.com',
        isProduction: true
      }
    } else if (hostname === 'bonnevalsolutions.com' || hostname === 'www.bonnevalsolutions.com') {
      return {
        main: 'bonnevalsolutions.com',
        tools: 'tools.bonnevalsolutions.com',
        isProduction: true
      }
    }
  }
  
  // Fallback for server-side rendering
  const commitRef = process.env.VERCEL_GIT_COMMIT_REF
  const isMainBranch = commitRef ? commitRef === 'main' : true
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

// Generate tool URLs based on current environment
export const getToolUrl = (toolPath: string) => {
  const domain = getCurrentDomain()
  return `https://${domain.tools}${toolPath}`
}

// Generate main site URLs based on current environment
export const getMainSiteUrl = (path: string = '') => {
  const domain = getCurrentDomain()
  return `https://${domain.main}${path}`
}

// Check if current environment is preview
export const isPreviewEnvironment = () => {
  const domain = getCurrentDomain()
  return !domain.isProduction
}