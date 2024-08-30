import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const response = await axios.get('https://api.keeptruckin.com/v1/driver_locations', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOTIVE_API_KEY}`,
      },
      params: {
        driver_ids: id,
        per_page: '25',
        page_no: '1',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching driver location:', error);
    res.status(500).json({ error: 'Failed to fetch driver location data' });
  }
}
