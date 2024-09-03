import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import TrackerSection from "./components/Tracker";



export default function Home() {
  return (
    <div className=" text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TrackerSection />
       
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
