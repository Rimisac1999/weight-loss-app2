'use client'

import { useState, useRef, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const tools = [
  { name: 'Memorizer', href: '/tools/memorizer' },
  { name: 'Tool 2', href: '/tool2' },
  { name: 'Tool 3', href: '/tool3' },
  { name: 'Tool 4', href: '/tool4' },
]

export default function ToolsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)
  const [toolsDropdownVisible, setToolsDropdownVisible] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close mobile tools when page is scrolled or clicked
  useEffect(() => {
    const handlePageInteraction = () => {
      setMobileToolsOpen(false)
    }

    window.addEventListener('scroll', handlePageInteraction)
    window.addEventListener('click', handlePageInteraction)
    
    return () => {
      window.removeEventListener('scroll', handlePageInteraction)
      window.removeEventListener('click', handlePageInteraction)
    }
  }, [])

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setToolsDropdownOpen(true)
    setToolsDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setToolsDropdownVisible(false)
    dropdownTimeoutRef.current = setTimeout(() => {
      setToolsDropdownOpen(false)
    }, 200)
  }

  const toggleMobileTools = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMobileToolsOpen(!mobileToolsOpen)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-gradient">Bonneval Solutions</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-gradient italic">Tools</span>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a
            href="https://intranet.bonnevalsolutions.com"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Intranet
          </a>
          <a
            href="https://client.bonnevalsolutions.com"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Client
          </a>
          
          {/* Tools Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="btn-primary inline-flex items-center"
            >
              Tools
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </button>
            
            {toolsDropdownOpen && (
              <div 
                className={`absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ease-in-out ${
                  toolsDropdownVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-gradient">Bonneval Solutions</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="px-3 py-2">
                    <span className="text-2xl font-bold text-gradient italic">Tools</span>
                  </div>
                </div>
                <div className="py-6 flex flex-col gap-2">
                  <a
                    href="https://intranet.bonnevalsolutions.com"
                    className="btn-secondary w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Intranet
                  </a>
                  <a
                    href="https://client.bonnevalsolutions.com"
                    className="btn-secondary w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Client
                  </a>
                  
                  {/* Mobile Tools Section */}
                  <div className="mt-4">
                    <button
                      onClick={toggleMobileTools}
                      className="w-full text-left px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg flex items-center justify-between"
                    >
                      <span>Tools</span>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileToolsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileToolsOpen && (
                      <div className="mt-2 space-y-1">
                        {tools.map((tool) => (
                          <a
                            key={tool.name}
                            href={tool.href}
                            className="block px-6 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {tool.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
