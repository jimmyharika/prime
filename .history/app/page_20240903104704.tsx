import React from 'react';
import Header from './components/Header';

import ServicesSection from './components/Services';
import AboutSection from './components/About';
import ContactSection from './components/Contact';
import HeroWithTracker from './components/HeroWithTracker';
import Footer from './components/footer';


const FlatbedTruckingHomepage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroWithTracker />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default FlatbedTruckingHomepage;
