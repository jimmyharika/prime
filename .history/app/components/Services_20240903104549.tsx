// components/Services.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Oversize Load Hauling",
      description: "Specialized in transporting wide, long, or heavy loads that exceed standard dimensions.",
      icon: "🚛",
    },
    {
      title: "Cross-Border Transportation",
      description: "Seamless flatbed shipping between the US and Canada, handling all customs requirements.",
      icon: "🌎",
    },
    {
      title: "Construction Material Transport",
      description: "Efficient delivery of steel, lumber, and other building materials to construction sites.",
      icon: "🏗️",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
