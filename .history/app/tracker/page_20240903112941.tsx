'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export default function TrackerPage() {
  const [driverId, setDriverId] = useState('');
  const [locationData, setLocationData] = useState<any>(null);
  const [error, setError] = useState('');

  const fetchDriverLocation = async () => {
    setError('');
    setLocationData(null);

    try {
      const response = await fetch(`/api/getDriverLocation?id=${driverId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch driver location data');
      }
      const data = await response.json();

      // Extracting latitude, longitude, and description
      const { lat, lon, description } = data.users[0].user.current_location;
      setLocationData({ lat, lon, description });
    } catch (error) {
      console.error('Error fetching location:', error);
      setError('Could not retrieve driver location data. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-8 px-4 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-8 text-blue-600">Track Driver Location</h1>
      <div className="w-full max-w-lg">
        <Input
          type="text"
          placeholder="Enter Driver ID"
          value={driverId}
          onChange={(e) => setDriverId(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <Button onClick={fetchDriverLocation} className="w-full p-3 bg-blue-600 text-white rounded shadow-md">
          Get Driver Location
        </Button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {locationData && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Driver Location Data</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {/* <li><strong>Latitude:</strong> {locationData.lat}</li>
                <li><strong>Longitude:</strong> {locationData.lon}</li> */}
                <li><strong>Description:</strong> {locationData.description}</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
