'use client';

import { useState } from 'react';

// Define the expected shape of the API response
interface LocationData {
  latitude: number;
  longitude: number;
  timestamp: string; // or Date if you prefer to handle it as a Date object
}

export default function TrackShipment() {
  const [vehicleId, setVehicleId] = useState('');
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [error, setError] = useState('');

  const handleTrackShipment = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setLocationData(null);

    if (!vehicleId) {
      setError('Please enter a Vehicle ID');
      return;
    }

    try {
      const response = await fetch(
        `https://api.gomotive.com/v1/vehicles/${vehicleId}/locations`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your API key
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch location data');
      }

      const data: LocationData = await response.json(); // Cast response to LocationData type
      setLocationData(data);
    } catch (error) {
      setError('Could not retrieve location data. Please try again later.');
    }
  };

  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-semibold mb-8">Track Your Shipment</h1>
      <form onSubmit={handleTrackShipment} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Enter Vehicle ID"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-3 bg-amber-500 text-white rounded">
          Track
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {locationData && (
        <div className="mt-8 bg-white p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold mb-4">Vehicle Location</h2>
          <p>Latitude: {locationData.latitude}</p>
          <p>Longitude: {locationData.longitude}</p>
          <p>Timestamp: {new Date(locationData.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
