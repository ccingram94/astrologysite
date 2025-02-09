import LoginCard from '../../components/LoginCard'
import { auth } from '../../auth'
import { 
  UserCircleIcon, 
  ChartBarIcon, 
  CalendarIcon, 
  StarIcon,
  PencilSquareIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  KeyIcon,
  BellIcon
} from '@heroicons/react/24/outline'

export default async function Profile() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-6xl font-extrabold text-primary">
                My Profile
              </h1>
            </div>

            {/* Profile Content */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">
              {/* User Info Section */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="relative w-32 h-32">
                  <UserCircleIcon className="w-full h-full text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">{session.user.name}</h2>
                  <p className="text-base-content/60">{session.user.email}</p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                    <BellIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-base-content/60">Notifications enabled</span>
                  </div>
                </div>
              </div>

              {/* Stats/Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="stat bg-base-200 rounded-xl">
                  <div className="stat-title flex items-center gap-2">
                    <DocumentChartBarIcon className="w-5 h-5" />
                    Saved Charts
                  </div>
                  <div className="stat-value">89</div>
                </div>
                <div className="stat bg-base-200 rounded-xl">
                  <div className="stat-title flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    Member Since
                  </div>
                  <div className="stat-value text-lg">March 2024</div>
                </div>
                <div className="stat bg-base-200 rounded-xl">
                  <div className="stat-title flex items-center gap-2">
                    <StarIcon className="w-5 h-5" />
                    Subscription
                  </div>
                  <div className="stat-value text-primary">Premium</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors cursor-pointer">
                  <ChartBarIcon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">New Chart</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors cursor-pointer">
                  <BookmarkIcon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Saved Charts</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors cursor-pointer">
                  <KeyIcon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Security</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors cursor-pointer">
                  <Cog6ToothIcon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Settings</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="btn btn-primary">
                  <PencilSquareIcon className="w-5 h-5 mr-2" />
                  Edit Profile
                </button>
                <button className="btn btn-outline">
                  <DocumentChartBarIcon className="w-5 h-5 mr-2" />
                  View Charts
                </button>
                <button className="btn btn-outline">
                  <Cog6ToothIcon className="w-5 h-5 mr-2" />
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 flex flex-col items-center justify-center p-4">
      <div className="bg-base-100 rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <UserCircleIcon className="w-24 h-24 text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Please Log In to Access Your Profile
        </h1>
        <p className="text-base-content/60 text-center mb-8">
          Sign in to view your personal astrological charts and account information.
        </p>
        <LoginCard />
      </div>
    </div>
  )
}
