'use client'
import { useState } from "react";

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
      setLocationData(data);
    } catch (error) {
      setError('Could not retrieve driver location data. Please try again later.');
    }
  };

  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-semibold mb-8">Track Driver Location</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter Driver ID"
          value={driverId}
          onChange={(e) => setDriverId(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <button onClick={fetchDriverLocation} className="w-full p-3 bg-amber-500 text-white rounded">
          Fetch Driver Location
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {locationData && (
          <div className="mt-8 bg-white p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">Driver Location Data</h2>
            <ul>
              <li><strong>First Name:</strong> {locationData.users[0].user.first_name}</li>
              <li><strong>Last Name:</strong> {locationData.users[0].user.last_name}</li>
              <li><strong>Latitude:</strong> {locationData.users[0].user.current_location.lat}</li>
              <li><strong>Longitude:</strong> {locationData.users[0].user.current_location.lon}</li>
              <li><strong>Description:</strong> {locationData.users[0].user.current_location.description}</li>
              <li><strong>Vehicle Make:</strong> {locationData.users[0].user.current_vehicle.make}</li>
              <li><strong>Vehicle Model:</strong> {locationData.users[0].user.current_vehicle.model}</li>
              <li><strong>Vehicle Year:</strong> {locationData.users[0].user.current_vehicle.year}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
