import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

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
    res.status(200).json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
}
