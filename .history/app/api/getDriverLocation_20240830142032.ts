// app/api/getDriverLocation/route.ts (for Next.js App Router)
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    const response = await fetch(`https://api.gomotive.com/v1/drivers/${id}/locations`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOTIVE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch driver location data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
