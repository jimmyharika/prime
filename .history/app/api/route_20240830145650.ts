import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  console.log("Driver ID:", id);
  console.log("API Key:", process.env.NEXT_PUBLIC_MOTIVE_API_KEY);

  try {
    const response = await axios.get(`https://api.gomotive.com/v1/drivers/${id}/locations`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOTIVE_API_KEY}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching driver location:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
