'use client';
import { useState } from 'react';

export default function TrackerPage() {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState('');

  const fetchDriverLocation = async () => {
    try {
      const response = await fetch('/api/getDriverLocation');
      if (!response.ok) {
        throw new Error('Failed to fetch driver location data');
      }
      const data = await response.json();
      setLocationData(data);
    } catch (error) {
      setError('Could not retrieve driver location data. Please try again later.');
    }
  };

  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-semibold mb-8">Track Driver Location</h1>
      <button onClick={fetchDriverLocation} className="w-full p-3 bg-amber-500 text-white rounded">
        Fetch Driver Location
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {locationData && (
        <div className="mt-8 bg-white p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold mb-4">Driver Location</h2>
          <pre>{JSON.stringify(locationData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
