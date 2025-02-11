import { auth } from '../../../auth';
import prisma from '../../../lib/prisma';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import AdminHoroscopesClient from '../../../components/AdminHoroscopesClient';

async function getHoroscopes() {
  // Get the start and end of the current month
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

  // Get today's start and end
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

  try {
    // Get all horoscopes count
    const horoscopeCount = await prisma.horoscope.count();

    // Get today's horoscope
    const todayHoroscope = await prisma.horoscope.findFirst({
      where: {
        date: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });

    // Get all horoscopes for the current month
    const monthHoroscopes = await prisma.horoscope.findMany({
      where: {
        date: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
      orderBy: {
        date: 'desc', // Most recent first
      },
    });

    return {
      horoscopeCount,
      todayHoroscope,
      monthHoroscopes,
    };
  } catch (error) {
    console.error('Error fetching horoscopes:', error);
    throw error;
  }
}

export default async function AdminHoroscopes() {
  const session = await auth();

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

  // Fetch all data
  try {
    const { horoscopeCount, todayHoroscope, monthHoroscopes } = await getHoroscopes();

    // Add debug logging
    console.log('Server-side data:', {
      horoscopeCount,
      todayHoroscope: todayHoroscope ? 'exists' : 'none',
      monthHoroscopesCount: monthHoroscopes.length,
    });

    return (
      <AdminHoroscopesClient
        horoscopeCount={horoscopeCount}
        todayHoroscope={todayHoroscope}
        monthHoroscopes={monthHoroscopes}
      />
    );
  } catch (error) {
    console.error('Error in AdminHoroscopes:', error);
    return (
      <div className="min-h-screen bg-neutral flex items-center justify-center p-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <ExclamationTriangleIcon className="w-16 h-16 text-error mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-error mb-2">Error</h1>
            <p className="text-base-content/60">
              Failed to load horoscope data. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
