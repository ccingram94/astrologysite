import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma';

export async function POST(request) {
  try {
    // Get the date from the request body
    const { date } = await request.json();
    
    // Convert the ISO string to Date object
    const searchDate = new Date(date);
    searchDate.setHours(0, 0, 0, 0);

    // Get the next day
    const nextDay = new Date(searchDate);
    nextDay.setDate(nextDay.getDate() + 1);

    // Query the database for the specific date
    const horoscope = await prisma.horoscope.findFirst({
      where: {
        date: {
          gte: searchDate,
          lt: nextDay,
        },
      },
    });

    if (!horoscope) {
      return NextResponse.json(
        { error: 'No horoscope found for the selected date' },
        { status: 404 }
      );
    }

    return NextResponse.json(horoscope);
  } catch (error) {
    console.error('Error fetching horoscope for selected date:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
