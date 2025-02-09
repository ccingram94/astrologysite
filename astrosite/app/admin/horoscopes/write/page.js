import { auth } from '../../../../auth';
import Link from 'next/link';
import {
  UserIcon,
  ChartBarIcon,
  InboxIcon,
  UserGroupIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon
} from '@heroicons/react/24/solid';
import prisma from '../../../../lib/prisma';

export default async function AdminHoroscopesWrite() {
  const session = await auth();

  const horoscopeCount = await prisma.horoscope.count();

  // Access Denied View
  if (!session || session.user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-neutral flex items-center justify-center p-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <ExclamationTriangleIcon className="w-16 h-16 text-error mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-error mb-2">Access Denied</h1>
            <p className="text-base-content/60">
              You do not have the necessary permissions to access this page.
            </p>
            <div className="mt-6">
              <a href="/" className="btn btn-primary">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <header className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold text-primary">
              Write Horoscopes
            </h1>
            <p className="text-base-content/70">
              Write and manage your website horoscopes below.
            </p>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Users Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="card-body">
              <div className="flex items-center">
                <div className="rounded-lg bg-primary/10 p-3">
                  <UserIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="ml-3 font-semibold text-base-content">Total Horoscopes</span>
              </div>
              <div className="mt-4">
                <h2 className="text-4xl font-extrabold text-neutral">{horoscopeCount}</h2>
              </div>
            </div>
          </div>

          {/* Messages Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="card-body">
              <div className="flex items-center">
                <div className="rounded-lg bg-primary/10 p-3">
                  <InboxIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="ml-3 font-semibold text-base-content">This Month</span>
              </div>
              <div className="mt-4">
                <h2 className="text-4xl font-extrabold text-neutral">0</h2>
                <div className="flex items-center mt-2">
                  <div className="badge bg-primary/30">Pending</div>
                  <span className="text-sm text-base-content/60 ml-2">awaiting review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Sessions Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="card-body">
              <div className="flex items-center">
                <div className="rounded-lg bg-primary/10 p-3">
                  <ChartBarIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="ml-3 font-semibold text-base-content">This Year</span>
              </div>
              <div className="mt-4">
                <h2 className="text-4xl font-extrabold text-neutral">0</h2>
                <div className="flex items-center mt-2">
                  <div className="badge bg-primary/30">Live</div>
                  <span className="text-sm text-base-content/60 ml-2">realtime tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/admin/horoscopes/write">
                <button className="btn btn-primary btn-lg normal-case w-full">
                  <PencilSquareIcon className="h-5 w-5 mr-2" />
                  Write Horoscopes
                </button>
              </Link>
              <button className="btn btn-primary btn-outline btn-lg normal-case">
                <ChartBarIcon className="h-5 w-5 mr-2" />
                View Horoscopes
              </button>
              <Link href="/admin/horoscopes">
                <button className="btn btn-primary btn-outline btn-lg normal-case">
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  Manage Horoscopes
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4">Horoscopes This Month</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Text</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2 min ago</td>
                    <td>New user registration</td>
                    <td><div className="badge badge-success">Completed</div></td>
                  </tr>
                  <tr>
                    <td>15 min ago</td>
                    <td>System backup</td>
                    <td><div className="badge badge-info">In Progress</div></td>
                  </tr>
                  <tr>
                    <td>1 hour ago</td>
                    <td>Database maintenance</td>
                    <td><div className="badge badge-success">Completed</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
