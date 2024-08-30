import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  console.log("Driver ID:", id);
  console.log("API Key:", process.env.NEXT_PUBLIC_MOTIVE_API_KEY);

  try {
    const response = await fetch(`https://api.gomotive.com/v1/drivers/${id}/locations`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOTIVE_API_KEY}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch:', response.status, response.statusText);
      throw new Error('Failed to fetch driver location data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
