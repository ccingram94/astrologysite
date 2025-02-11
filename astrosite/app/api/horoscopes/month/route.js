import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma';

export async function GET() {
  try {
    // Get current date
    const now = new Date();
    
    // Get last day of previous month
    const startDate = new Date(now.getFullYear(), now.getMonth() - 1, 31);
    startDate.setUTCHours(0, 0, 0, 0);
    
    // Get first day of next month
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    endDate.setUTCHours(23, 59, 59, 999);

    const horoscopes = await prisma.horoscope.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    if (horoscopes.length === 0) {
      return NextResponse.json(
        { error: 'No horoscopes found for this period' },
        { status: 404 }
      );
    }

    // Log the date range and results for debugging
    console.log('Date Range:', {
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      count: horoscopes.length,
      firstDate: horoscopes[0]?.date,
      lastDate: horoscopes[horoscopes.length - 1]?.date
    });

    return NextResponse.json(horoscopes);
  } catch (error) {
    console.error('Error fetching horoscopes:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
