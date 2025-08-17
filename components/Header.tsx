'use client'

import { useState, useRef, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { getCompanyInfo } from '@/config/company'
import { getToolUrl } from '@/utils/routing'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const tools = [
  { name: 'Memorizer', href: getToolUrl('/memorizer') },
  { name: 'Tool 2', href: getToolUrl('/tool2') },
  { name: 'Tool 3', href: getToolUrl('/tool3') },
  { name: 'Tool 4', href: getToolUrl('/tool4') },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)
  const [toolsDropdownVisible, setToolsDropdownVisible] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setToolsDropdownOpen(true)
    setToolsDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setToolsDropdownVisible(false)
      setTimeout(() => setToolsDropdownOpen(false), 200)
    }, 100)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMobileToolsToggle = () => {
    setMobileToolsOpen(!mobileToolsOpen)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-gradient">{getCompanyInfo.name()}</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Desktop right side */}
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
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Mobile menu panel */}
          <div className="fixed inset-0 z-[9999] flex justify-end">
            <div className="w-full max-w-sm h-full bg-white shadow-2xl flex flex-col border-l border-gray-200">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <span className="text-lg font-semibold text-gray-900">Menu</span>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Mobile navigation */}
              <div className="flex-1 px-6 py-4">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-base font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                {/* Mobile tools section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={handleMobileToolsToggle}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    Tools
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform ${mobileToolsOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {mobileToolsOpen && (
                    <div className="mt-4 ml-4 space-y-3">
                      {tools.map((tool) => (
                        <a
                          key={tool.name}
                          href={tool.href}
                          className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {tool.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Mobile external links */}
                <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                  <a
                    href="https://intranet.bonnevalsolutions.com"
                    className="block text-base font-medium text-gray-900 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Intranet
                  </a>
                  <a
                    href="https://client.bonnevalsolutions.com"
                    className="block text-base font-medium text-gray-900 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 