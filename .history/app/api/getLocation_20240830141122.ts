export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Request received for driver location");

  try {
    const response = await fetch(`https://api.gomotive.com/v1/drivers/3152028/locations`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOTIVE_API_KEY}`,
      },
    });

    if (!response.ok) {
      console.error('API response not OK', response.status);
      throw new Error('Failed to fetch driver location data');
    }

    const data = await response.json();
    console.log('API data fetched successfully:', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching driver location:', error);
    res.status(500).json({ error: 'Failed to fetch driver location data' });
  }
}
