import type { NextApiRequest, NextApiResponse } from 'next';
import keeptruckinPublicApi from '@api/keeptruckin-public-api';

keeptruckinPublicApi.auth(process.env.NEXT_PUBLIC_MOTIVE_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await keeptruckinPublicApi.driverLocationsGet({
      driver_ids: '3152028',
      per_page: '25',
      page_no: '1',
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch driver location data' });
  }
}
