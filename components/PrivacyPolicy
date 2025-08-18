import { companyConfig } from '@/config/company'
import Header from '@/components/Header'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  {companyConfig.name} ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we handle information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>We collect no personal data from visitors to our website.</strong> Our website is a static 
                  informational site that does not require user accounts, login credentials, or personal information.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we do not:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                  <li>Collect personal information (names, emails, phone numbers)</li>
                  <li>Use tracking cookies or analytics</li>
                  <li>Store any data about your visit</li>
                  <li>Monitor your browsing behavior</li>
                  <li>Require user registration or accounts</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  <strong>We do not use cookies on our website.</strong> Our site is designed to function 
                  without any tracking or storage mechanisms. You can browse our website freely without 
                  concerns about cookie consent or tracking.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website may contain links to external services:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                  <li><strong>Intranet Portal:</strong> Links to our internal business systems</li>
                  <li><strong>Client Portal:</strong> Links to client-specific services</li>
                  <li><strong>External Tools:</strong> Links to third-party tools and services</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  These external services have their own privacy policies and data collection practices. 
                  We encourage you to review their policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:{' '}
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-primary-600 hover:text-primary-700 underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                  with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center">
                  This Privacy Policy is effective as of {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

