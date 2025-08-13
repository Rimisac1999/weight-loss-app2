import MemorizerTool from '@/components/tools/MemorizerTool'
import ToolsHeader from '@/components/ToolsHeader'
import ToolsFooter from '@/components/ToolsFooter'

export default function MemorizerPage() {
  return (
    <>
      <ToolsHeader />
      <div className="min-h-screen pt-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Memorizer</span> Tool
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your learning with our AI-powered text memorization tool. 
              Break down complex information into digestible chunks and improve retention.
            </p>
          </div>
          
          <MemorizerTool />
        </div>
      </div>
      <ToolsFooter />
    </>
  )
}
