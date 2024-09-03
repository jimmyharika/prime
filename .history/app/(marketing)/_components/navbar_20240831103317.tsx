'use client'; // This is essential for components using client-side hooks

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., save data, show a message)
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-8 text-blue-600">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded shadow-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded h-32 resize-none"
          ></textarea>
        </div>
        <Button type="submit" className="w-full bg-blue-600 text-white p-3 rounded shadow-md">
          Send Message
        </Button>
      </form>
    </div>
  );
}
