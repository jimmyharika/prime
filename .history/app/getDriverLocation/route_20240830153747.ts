import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Driver ID is required' }, { status: 400 });
  }

  try {
    const response = await axios.get('https://api.keeptruckin.com/v1/driver_locations', {
      headers: {
        'X-Api-Key': process.env.NEXT_PUBLIC_MOTIVE_API_KEY!,
      },
      params: {
        driver_ids: id,
        per_page: '25',
        page_no: '1',
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching driver location:', error);
    return NextResponse.json({ error: 'Failed to fetch driver location data' }, { status: 500 });
  }
}
