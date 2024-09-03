// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">PrimeFlatbeds</h3>
            <p>Delivering strength and reliability across North America since 2005.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition">Services</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>1234 Trucking Lane, Freightville, TX 75001</p>
            <p>Phone: (800) 555-HAUL</p>
            <p>Email: dispatch@primeflatbeds.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 PrimeFlatbeds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};