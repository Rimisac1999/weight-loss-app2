import MemorizerTool from '@/components/tools/MemorizerTool'

export default function MemorizerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-slate-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Memorizer Tool
                </span>
                <span className="text-slate-600 ml-2">- Preview Bonneval Solutions</span>
              </h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/tools-domain" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">
                ← Back to Tools
              </a>
              <a href="https://bonnevalsolutions.com" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">
                Main Site
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Tool Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MemorizerTool />
      </main>
    </div>
  )
}