// app/page.tsx
'use client';

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TrackerSection from './components/TrackerSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TrackerSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// components/Header.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">PrimeFlatbeds</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#tracker" className="text-gray-600 hover:text-blue-600">Tracker</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <Button className="hidden md:block">Get a Quote</Button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="#services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          <a href="#tracker" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Tracker</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
          <div className="px-4 py-2">
            <Button className="w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
};

// components/HeroSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Redefining Flatbed Trucking</h1>
        <p className="text-xl md:text-2xl mb-8">Innovative solutions for your most challenging transportation needs</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Discover Our Services</Button>
      </div>
    </section>
  );
};

// components/ServicesSection.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    { title: "Oversized Load Transport", description: "Specialized handling for extra-large cargo", icon: "🚛" },
    { title: "Cross-Border Shipping", description: "Seamless USA-Canada transportation", icon: "🌎" },
    { title: "Just-in-Time Delivery", description: "Precision logistics for your time-sensitive needs", icon: "⏱️" },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// components/TrackerSection.tsx
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TrackerSection = () => {
  const [driverId, setDriverId] = useState('');
  const [locationData, setLocationData] = useState(null);
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
      setLocationData(data.users[0].user.current_location);
    } catch (error) {
      console.error('Error fetching location:', error);
      setError('Could not retrieve driver location data. Please try again later.');
    }
  };

  return (
    <section id="tracker" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Real-Time Driver Tracking</h2>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4 mb-4">
            <Input
              type="text"
              placeholder="Enter Driver ID"
              value={driverId}
              onChange={(e) => setDriverId(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={fetchDriverLocation} className="bg-blue-600 hover:bg-blue-700 text-white">
              Track
            </Button>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {locationData && (
            <Card>
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

// Add other sections (AboutSection, TestimonialsSection, ContactSection) here...

// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">PrimeFlatbeds</h3>
            <p>Redefining flatbed trucking with innovation and reliability.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#tracker" className="hover:text-blue-400">Driver Tracker</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>1234 Trucking Lane, Freightville, TX 75001</p>
            <p>Email: info@primeflatbeds.com</p>
            <p>Phone: (800) 555-HAUL</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 PrimeFlatbeds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;