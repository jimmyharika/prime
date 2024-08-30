import { useState } from 'react';

export default function TestDriverLocation() {
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
    <div>
      <button onClick={fetchDriverLocation}>Fetch Driver Location</button>
      {error && <p>{error}</p>}
      {locationData && <pre>{JSON.stringify(locationData, null, 2)}</pre>}
    </div>
  );
}
