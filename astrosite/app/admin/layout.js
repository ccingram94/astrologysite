import { auth } from '../../auth';
import {
  ChartBarIcon,
  UserGroupIcon,
  InboxIcon,
  CogIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

export default async function AdminLayout({ children }) {
  const session = await auth();

  // Restrict access to only administrators
  if (!session || session.user.role !== 'admin') {
    return (
      <div className="w-full min-h-screen bg-base-200 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-error">Access Denied</h1>
          <p className="text-lg text-gray-400 mt-4">
            You do not have the necessary permissions to access this page.
          </p>
        </div>
      </div>
    );
  }

  // Admin Layout
  return (
    <div className="flex min-h-screen bg-primary/10">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 hidden md:flex flex-col items-center py-6 border-r border-primary/30">
        <h1 className="text-2xl font-bold text-primary my-8">Admin</h1>
        <nav className="flex flex-col w-full text-primary">
          <Link href="/admin" className="btn btn-ghost justify-start m-2">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Dashboard
          </Link>
          <Link href="/admin/users" className="btn btn-ghost justify-start m-2">
            <UserGroupIcon className="h-5 w-5 mr-2" /> Manage Users
          </Link>
          <Link href="/admin/horoscopes" className="btn btn-ghost justify-start m-2">
            <SparklesIcon className="h-5 w-5 mr-2" /> Manage Horoscopes
          </Link>
          <Link href="/admin/messages" className="btn btn-ghost justify-start m-2">
            <InboxIcon className="h-5 w-5 mr-2" /> Messages
          </Link>
          <Link href="/admin/settings" className="btn btn-ghost justify-start m-2">
            <CogIcon className="h-5 w-5 mr-2" /> Settings
          </Link>
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
