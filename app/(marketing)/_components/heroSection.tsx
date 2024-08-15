'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/truck-background.jpg')" }} // Ensure this image exists
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            Delivering Excellence in Every Mile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-2xl"
          >
            Nationwide Freight Services You Can Rely On
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mt-8 space-x-4"
          >
            <Link href="/quote">
              <Button>Get a Quote</Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary">Our Services</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other sections continue as before... */}
    </div>
  );
}
