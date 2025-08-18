import { companyConfig } from '@/config/company'
import Header from '@/components/Header'

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using the {companyConfig.name} website, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) 
                  on {companyConfig.name}'s website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials on {companyConfig.name}'s website are provided on an 'as is' basis. {companyConfig.name} 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including without limitation, implied warranties or conditions of merchantability, fitness for a 
                  particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall {companyConfig.name} or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) arising 
                  out of the use or inability to use the materials on {companyConfig.name}'s website, even if 
                  {companyConfig.name} or a {companyConfig.name} authorized representative has been notified orally 
                  or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials appearing on {companyConfig.name}'s website could include technical, typographical, 
                  or photographic errors. {companyConfig.name} does not warrant that any of the materials on its 
                  website are accurate, complete, or current. {companyConfig.name} may make changes to the materials 
                  contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  {companyConfig.name} has not reviewed all of the sites linked to its website and is not responsible 
                  for the contents of any such linked site. The inclusion of any link does not imply endorsement by 
                  {companyConfig.name} of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
                <p className="text-gray-600 leading-relaxed">
                  {companyConfig.name} may revise these terms of service for its website at any time without notice. 
                  By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of France 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:{' '}
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-primary-600 hover:text-primary-700 underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center">
                  These Terms of Service are effective as of {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
