import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma';

export async function GET() {
  try {
    // Get today's date at midnight (start of day)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get tomorrow's date at midnight (start of day)
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const horoscope = await prisma.horoscope.findFirst({
      where: {
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    if (!horoscope) {
      return NextResponse.json(
        { error: 'No horoscope found for today' },
        { status: 404 }
      );
    }

    return NextResponse.json(horoscope);
  } catch (error) {
    console.error('Error fetching today\'s horoscope:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
