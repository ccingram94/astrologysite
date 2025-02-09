import { auth, signOut } from '../../auth';
import {
  ChartBarIcon,
  UserGroupIcon,
  InboxIcon,
  CogIcon,
  SparklesIcon,
  BookOpenIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  UserCircleIcon,
  ArrowLeftCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginButton from '../../components/LoginButton';

export default async function ProfileLayout({ children }) {
  const session = await auth();

  // Restrict access to only logged in users
  if (!session) {
    return (
      <div className="w-full min-h-screen bg-base-200 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-error">Access Denied</h1>
          <p className="text-lg text-gray-400 mt-4">
            You must be logged in to view this page.
          </p>
          <LoginCard />
        </div>
      </div>
    );
  }

  // Profile Layout
  return (
    <div className="flex min-h-screen bg-primary/10">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 hidden md:flex flex-col items-center py-6 border-r border-primary/30">
        <UserCircleIcon className="h-12 w-12 mt-4" />
        <h1 className="text-2xl font-bold text-primary mb-4">{session?.user.name.split(' ')[0]}</h1>
        <nav className="flex flex-col w-full text-primary p-2">
          <Link href="/profile" className="btn btn-ghost w-full justify-start my-2">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Dashboard
          </Link>
          <Link href="/profile/reports" className="btn btn-ghost w-full justify-start my-2">
            <BookOpenIcon className="h-5 w-5 mr-2" /> Reports
          </Link>
          <Link href="/profile/charts" className="btn btn-ghost w-full justify-start my-2">
            <SparklesIcon className="h-5 w-5 mr-2" /> Charts
          </Link>
          <Link href="/profile/messages" className="btn btn-ghost w-full justify-start my-2">
            <EnvelopeIcon className="h-5 w-5 mr-2" /> Messages
          </Link>
          <Link href="/profile/settings" className="btn btn-ghost w-full justify-start my-2">
            <CogIcon className="h-5 w-5 mr-2" /> Settings
          </Link>
          <LoginButton />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Content Area */}
        {children}
      </main>
    </div>
  );
}
