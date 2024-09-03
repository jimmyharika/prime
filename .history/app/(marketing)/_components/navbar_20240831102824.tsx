'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-16 px-4 border-b shadow-sm bg-white flex items-center z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Prime Flatbeds
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link href="/track" className="text-gray-700 hover:text-blue-600">
            Track Shipment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            className="text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-sm z-50">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/track" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Track Shipment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
