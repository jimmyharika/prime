// components/HeroSection.tsx
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center py-32 md:py-48">
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Redefining Flatbed Trucking</h1>
        <p className="mb-8 text-lg md:text-xl">Innovative solutions for your most challenging transportation needs</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">Discover Our Services</Button>
      </div>
    </section>
  )
}
export default Hero