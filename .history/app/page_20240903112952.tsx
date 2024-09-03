'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LocationData {
  description: string;
}

export default function Home() {
  const [driverId, setDriverId] = useState('');
  const [locationData, setLocationData] = useState<LocationData | null>(null);
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
      const { description } = data.users[0].user.current_location;
      setLocationData({ description });
    } catch (error) {
      console.error('Error fetching location:', error);
      setError('Could not retrieve driver location data. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        {/* Header content */}
      </header>

      <main>
        <section className="relative py-20 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1586803835585-4496d8b4df8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
          {/* Hero section content */}
        </section>

        <section id="services" className="py-20">
          {/* Services section content */}
        </section>

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image 
                  src="https://images.unsplash.com/photo-1595245803233-aee307e61716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="About Us" 
                  width={500} 
                  height={300} 
                  className="rounded-lg shadow-lg" 
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                <p className="mb-4">PrimeFlatbeds has been at the forefront of the flatbed trucking industry for over two decades. Our commitment to innovation, safety, and customer satisfaction has made us a leader in specialized transportation solutions.</p>
                <p>With a fleet of modern trucks and a team of experienced drivers, we&apos;re equipped to handle your most challenging logistics needs across the USA and Canada.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          {/* Contact section content */}
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        {/* Footer content */}
      </footer>
    </div>
  );
}