'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Define the shape of the location data
interface LocationData {
  description: string;
  // Add other properties as needed
}

// Define the shape of the API response
interface ApiResponse {
  users: Array<{
    user: {
      current_location: LocationData;
    };
  }>;
}

const TrackerSection = () => {
  const [driverId, setDriverId] = useState('')
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [error, setError] = useState('')

  const fetchDriverLocation = async () => {
    setError('')
    setLocationData(null)
    try {
      const response = await fetch(`/api/getDriverLocation?id=${driverId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch driver location data')
      }
      const data: ApiResponse = await response.json()
      setLocationData(data.users[0].user.current_location)
    } catch (error) {
      console.error('Error fetching location:', error)
      setError('Could not retrieve driver location data. Please try again later.')
    }
  }

  return (
    <section id="tracker" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Real-Time Driver Tracking</h2>
        <div className="mx-auto max-w-md">
          <div className="mb-4 flex gap-4">
            <Input
              type="text"
              placeholder="Enter Driver ID"
              value={driverId}
              onChange={(e) => setDriverId(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={fetchDriverLocation}>Track</Button>
          </div>
          {error && <p className="mb-4 text-destructive">{error}</p>}
          {locationData && (
            <Card>
              <CardHeader>
                <CardTitle>Driver Location</CardTitle>
                <CardDescription>Current location information</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Description:</strong> {locationData.description}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

export default TrackerSection;