
\import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ContactSection from './components/Contact';
import Footer from './components/footer';
import ServicesSection from './components/Services';
import Header from './components/Header';
const FlatbedTruckingHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default FlatbedTruckingHomepage;