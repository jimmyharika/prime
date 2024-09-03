
// components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images/flatbed-hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Strength in Every Load
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Premier Flatbed Transportation Across the US and Canada
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
            <a href="#contact">Get a Quote</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
