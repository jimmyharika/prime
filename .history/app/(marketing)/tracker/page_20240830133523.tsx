import { NextApiRequest, NextApiResponse } from 'next';
import keeptruckinPublicApi from '@api/keeptruckin-public-api';

keeptruckinPublicApi.auth('YOUR_API_KEY'); // Replace with your actual API key

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const { data } = await keeptruckinPublicApi.vehicleLocationsGetSpecific({ id: id as string });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
}
