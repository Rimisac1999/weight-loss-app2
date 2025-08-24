import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Track Your Progress
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A minimalist PWA for logging meals, tracking weight, and projecting your fitness journey.
          </p>
          
          <div className="space-y-4">
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            
            <div>
              <Link
                href="/auth/login"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Already have an account? Sign in
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">📸 AI Food Recognition</h3>
              <p className="text-gray-600">
                Snap a photo of your meal and get instant macro estimates with confidence scores.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">📊 Smart Projections</h3>
              <p className="text-gray-600">
                See weight projections based on your intake, TDEE, and activity levels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">💪 Offline First</h3>
              <p className="text-gray-600">
                Works completely offline with seamless sync when you&apos;re back online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}