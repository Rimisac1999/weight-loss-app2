import Link from 'next/link'
import ToolsHeader from './components/ToolsHeader'
import ToolsFooter from './components/ToolsFooter'
import { getToolUrl } from '@/utils/routing'

export default function ToolsHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <ToolsHeader />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Professional Tools for Business Automation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access our suite of professional tools designed to streamline your business processes, 
            enhance productivity, and drive operational efficiency.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Memorizer Tool */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Memorizer</h3>
              <p className="text-slate-600 mb-4">
                Advanced text memorization and learning tool with spaced repetition algorithms.
              </p>
              <Link 
                href="/memorizer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Launch Tool
              </Link>
            </div>
          </div>

          {/* Coming Soon Tool */}
          <div className="bg-white rounded-lg shadow-md opacity-75">
            <div className="p-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">More Tools Coming</h3>
              <p className="text-slate-600 mb-4">
                We're continuously developing new tools to help your business grow.
              </p>
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-slate-400 bg-slate-100 cursor-not-allowed">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            Professional tools for business automation.
          </p>
        </div>
      </main>
      <ToolsFooter />
    </div>
  )
}