import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/images/about-image.jpg" alt="PrimeFlatbeds team" width={600} height={400} className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driving Excellence Across Borders</h2>
            <p className="text-lg mb-4">
              At PrimeFlatbeds, we have been the backbone of North American logistics since 2005. Our fleet of modern flatbed trucks and skilled drivers specialize in hauling challenging loads across the US and Canada.
            </p>
            <p className="text-lg mb-4">
              With a commitment to safety, reliability, and customer satisfaction, we've built a reputation as the go-to flatbed trucking company for industries that demand precision and care in their transport needs.
            </p>
            <p className="text-lg">
              From construction materials to oversized machinery, we deliver with strength, integrity, and unmatched expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};