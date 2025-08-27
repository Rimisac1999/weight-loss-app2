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

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
      } else {
        setUser(user);
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
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
          <p className="text-gray-600 mt-1">What would you like to track today?</p>
        </div>

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
      </main>
    </div>
  );
}