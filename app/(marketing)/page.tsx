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
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
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
            animate={{ opacity: 1, y: 0 }}
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
            <Button>
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button variant="secondary">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Premier Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: 'Flatbed Trucking',
              description:
                'Expert handling of oversized loads across the country.',
            },
            {
              title: 'Freight Brokerage',
              description:
                'Connecting you with top-tier carriers for cost-effective solutions.',
            },
            {
              title: 'Expedited Shipping',
              description: 'Urgent deliveries made fast and reliable.',
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="p-8 bg-white shadow-md rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row items-center justify-around px-4 space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/reliability-icon.svg"
              alt="Reliability"
              width={100}
              height={100}
            />
            <h3 className="text-2xl font-medium mt-4">Reliability</h3>
            <p>Count on us for timely and dependable service.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/coverage-icon.svg"
              alt="Coverage"
              width={100}
              height={100}
            />
            <h3 className="text-2xl font-medium mt-4">Nationwide Coverage</h3>
            <p>
              We cover every corner of the United States with our extensive
              fleet.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/customer-service-icon.svg"
              alt="Customer Service"
              width={100}
              height={100}
            />
            <h3 className="text-2xl font-medium mt-4">24/7 Support</h3>
            <p>Our team is available around the clock to assist you.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-amber-500 text-white text-center">
        <h2 className="text-4xl font-semibold mb-4">Ready to Ship?</h2>
        <p className="text-xl mb-8">
          Get in touch with us today and discover how we can help your business
          grow.
        </p>
        <Button>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
}
