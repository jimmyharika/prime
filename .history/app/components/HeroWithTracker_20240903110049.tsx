// components/HeroWithTracker.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LocationData {
  description: string;
}

const HeroWithTracker: React.FC = () => {
  const [driverId, setDriverId] = useState<string>('');
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [error, setError] = useState<string>('');

  const fetchDriverLocation = async () => {
    setError('');
    setLocationData(null);
    try {
      const response = await fetch(`/api/getDriverLocation?id=${driverId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch driver location data');
      }
      const data = await response.json();
      setLocationData({ description: data.users[0].user.current_location.description });
    } catch (error) {
      console.error('Error fetching location:', error);
      setError('Could not retrieve driver location data. Please try again later.');
    }
  };

  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center bg-[url('/images/flatbed-hero.jpg')]">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white w-full max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
          Strength in Every Load
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          Premier Flatbed Transportation Across the US and Canada
        </p>
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mt-8 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4">Track Your Driver</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Enter Driver ID"
              value={driverId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDriverId(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={fetchDriverLocation} className="bg-amber-500 hover:bg-amber-600 text-black">
              Get Location
            </Button>
          </div>
          {error && <p className="mt-4 text-red-400">{error}</p>}
          {locationData && (
            <Card className="mt-4 bg-white bg-opacity-20 text-white">
              <CardHeader>
                <CardTitle>Driver Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Description:</strong> {locationData.description}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroWithTracker;