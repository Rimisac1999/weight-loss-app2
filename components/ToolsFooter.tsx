import { getCompanyInfo } from '@/config/company'

export default function ToolsFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-bold text-gradient">{getCompanyInfo.name()} <span className="italic">Tools</span></span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A subsection of {getCompanyInfo.name()} with Free Tools made for helping people in their day to day life.
              </p>
            </div>

            {/* Main Tools */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Main Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/tools/memorizer" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Memorizer
                  </a>
                </li>
                <li>
                  <a href="/tool2" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Tool 2
                  </a>
                </li>
                <li>
                  <a href="/tool3" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Tool 3
                  </a>
                </li>
                <li className="text-gray-500 text-sm italic">
                  MORE TO COME
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {getCompanyInfo.copyright()}
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
