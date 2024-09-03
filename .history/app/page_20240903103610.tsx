
import Header from '@/app/components/Header'
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