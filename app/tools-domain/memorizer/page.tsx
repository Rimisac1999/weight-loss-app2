import MemorizerTool from '@/components/tools/MemorizerTool'
import ToolsHeader from '../components/ToolsHeader'
import ToolsFooter from '../components/ToolsFooter'

export default function MemorizerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <ToolsHeader />

      {/* Tool Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MemorizerTool />
      </main>
      
      <ToolsFooter />
    </div>
  )
}