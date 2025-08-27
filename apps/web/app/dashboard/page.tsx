'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { toCamelCase } from '@/lib/utils/transformers';
import { 
  ScaleIcon, 
  CameraIcon, 
  ChartBarIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailConfirmed, setEmailConfirmed] = useState<boolean | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
      } else {
        setUser(user);
        // Check email confirmation status
        setEmailConfirmed(!!user.email_confirmed_at);
        
        // Check if user has completed onboarding
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        if (!profile) {
          router.push('/onboarding');
        } else {
          // Transform snake_case to camelCase for use with Zod schemas
          const transformedProfile = toCamelCase(profile, 'profiles');
          console.log('Transformed profile:', transformedProfile);
        }
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const handleRefreshEmailStatus = async () => {
    setLoading(true);
    try {
      const { data: { user: refreshedUser } } = await supabase.auth.getUser();
      if (refreshedUser) {
        setUser(refreshedUser);
        setEmailConfirmed(!!refreshedUser.email_confirmed_at);
      }
    } catch (error) {
      console.error('Error refreshing user status:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">Weight Tracker</h1>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Email Confirmation Banner */}
        {emailConfirmed === false && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Email Confirmation Required
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Please check your email and click the confirmation link to access your dashboard. 
                      If you haven't received the email, check your spam folder.
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleRefreshEmailStatus}
                className="ml-4 flex-shrink-0 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        )}

        {/* Dashboard Content - Only show when email is confirmed */}
        {emailConfirmed ? (
          <>
            {/* Welcome Message */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
              <p className="text-gray-600 mt-1">What would you like to track today?</p>
            </div>t

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Add Weight */}
          <Link href="/weight/add" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <ScaleIcon className="h-8 w-8 text-primary-600" />
                <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Log Weight</h3>
              <p className="text-sm text-gray-600 mt-1">Record your daily weight</p>
            </div>
          </Link>

          {/* Add Meal */}
          <Link href="/meals/add" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <CameraIcon className="h-8 w-8 text-primary-600" />
                <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Log Meal</h3>
              <p className="text-sm text-gray-600 mt-1">Photo or manual entry</p>
            </div>
          </Link>

          {/* View Projections */}
          <Link href="/projections" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <ChartBarIcon className="h-8 w-8 text-primary-600" />
                <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Projections</h3>
              <p className="text-sm text-gray-600 mt-1">View your progress forecast</p>
            </div>
          </Link>

          {/* Add Activity */}
          <Link href="/activity/add" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-sm">A</span>
                </div>
                <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Log Activity</h3>
              <p className="text-sm text-gray-600 mt-1">Track exercise and steps</p>
            </div>
          </Link>

          {/* View History */}
          <Link href="/history" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-sm">H</span>
                </div>
                <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">History</h3>
              <p className="text-sm text-gray-600 mt-1">View your tracking history</p>
            </div>
          </Link>

          {/* Settings */}
          <Link href="/settings" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-sm">⚙</span>
                </div>
                <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
              <p className="text-sm text-gray-600 mt-1">Configure your preferences</p>
            </div>
          </Link>
        </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="text-center text-gray-500 py-8">
                <p>No recent activity to display</p>
                <p className="text-sm mt-2">Start tracking to see your progress here</p>
              </div>
            </div>
          </>
        ) : (
          /* Placeholder content when email not confirmed */
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Complete Email Confirmation
              </h3>
              <p className="text-gray-600 mb-6">
                Please check your email and click the confirmation link to access your dashboard. 
                Once confirmed, you'll be able to start tracking your weight loss journey.
              </p>
              <button
                onClick={handleRefreshEmailStatus}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Refresh Status
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}