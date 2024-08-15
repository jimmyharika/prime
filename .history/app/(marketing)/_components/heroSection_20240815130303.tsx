import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-trucking.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          Nationwide Freight & Logistics Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-xl"
        >
          Reliable service, on-time delivery, every time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-8 flex space-x-4"
        >
          <Link href="/quote">
            <a className="bg-amber-500 px-6 py-3 text-lg rounded">
              Get a Quote
            </a>
          </Link>
          <Link href="/track">
            <a className="bg-gray-700 px-6 py-3 text-lg rounded">
              Track Shipment
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
