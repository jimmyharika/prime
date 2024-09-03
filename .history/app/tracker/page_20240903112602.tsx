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
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">PrimeFlatbeds</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-blue-200">Services</a></li>
              <li><a href="#about" className="hover:text-blue-200">About</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative py-20 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1586803835585-4496d8b4df8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-white mb-8 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Redefining Flatbed Trucking</h2>
                <p className="text-xl mb-6">Innovative solutions for your most challenging transportation needs</p>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">Learn More</Button>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Track Your Driver</h3>
                <Input
                  type="text"
                  placeholder="Enter Driver ID"
                  value={driverId}
                  onChange={(e) => setDriverId(e.target.value)}
                  className="mb-4"
                />
                <Button onClick={fetchDriverLocation} className="w-full mb-4">
                  Get Driver Location
                </Button>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {locationData && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Driver Location Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p><strong>Description:</strong> {locationData.description}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Oversize Load Transport", description: "Specialized handling for extra-large cargo", image: "https://images.unsplash.com/photo-1586803835585-4496d8b4df8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
                { title: "Cross-Border Shipping", description: "Seamless USA-Canada transportation", image: "https://images.unsplash.com/photo-1551775517-9900b35e5a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
                { title: "Just-in-Time Delivery", description: "Precision logistics for your time-sensitive needs", image: "https://images.unsplash.com/photo-1611439319525-6d66f10d9c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
              ].map((service, index) => (
                <Card key={index}>
                  <Image src={service.image} alt={service.title} width={500} height={300} className="w-full h-48 object-cover" />
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://images.unsplash.com/photo-1595245803233-aee307e61716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
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
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <textarea className="w-full p-2 border rounded" rows={4} placeholder="Your Message"></textarea>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 PrimeFlatbeds. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="mx-2 hover:text-blue-200">Privacy Policy</a>
              <a href="#" className="mx-2 hover:text-blue-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}