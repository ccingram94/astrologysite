import { NextResponse } from 'next/server';
import { prisma } from '../../../prisma';
import { auth } from '../../../auth';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';
import { standardizeDateToMidnight } from '../../../utils/dates';

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// POST endpoint for receiving data and generating a horoscope
export async function POST(request) {
  try {
    // Check authentication and admin status
    const session = await auth();
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse the request body
    const { formattedToday, prompt, placements, retrogrades, content } = await request.json();

    // Parse the date string into a Date object
    const horoscopeDate = standardizeDateToMidnight(formattedToday);

    // If content is provided, use it directly (manual submission)
    // If not, generate content using OpenRouter (auto-generate)
    let horoscopeContent = content;

    console.log(prompt)
    
    if (!content) {
      try {
        const { text } = await generateText({
          model: openrouter("meta-llama/llama-3.1-8b-instruct"),
          prompt: prompt,
          temperature: 0.7,
          maxTokens: 200,
        });

        if (!text) {
          throw new Error('Generated content is empty');
        }

        horoscopeContent = text.trim();
      } catch (error) {
        console.error('OpenRouter API Error:', error);
        return NextResponse.json(
          { 
            error: 'Failed to generate horoscope content',
            details: error.message 
          },
          { status: 500 }
        );
      }
    }

    // Check if a horoscope already exists for this date
    const existingHoroscope = await prisma.horoscope.findFirst({
      where: {
        date: {
          gte: new Date(new Date(horoscopeDate).setHours(0, 0, 0, 0)),
          lt: new Date(new Date(horoscopeDate).setHours(23, 59, 59, 999)),
        },
      },
    });

    if (existingHoroscope) {
      const updatedHoroscope = await prisma.horoscope.update({
        where: {
          id: existingHoroscope.id,
        },
        data: {
          content: horoscopeContent,
          placements: placements,
          retrogrades: retrogrades,
          updatedAt: new Date(),
        },
      });

      return NextResponse.json(updatedHoroscope);
    } else {
      const newHoroscope = await prisma.horoscope.create({
        data: {
          content: horoscopeContent,
          date: horoscopeDate,
          placements: placements,
          retrogrades: retrogrades,
        },
      });

      return NextResponse.json(newHoroscope, { status: 201 });
    }
  } catch (error) {
    console.error('Error generating/writing horoscope:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE endpoint to remove horoscopes
export async function DELETE(request) {
  try {
    // Check authentication and admin status
    const session = await auth();
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing horoscope ID' },
        { status: 400 }
      );
    }

    await prisma.horoscope.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: 'Horoscope deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting horoscope:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
