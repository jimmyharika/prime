// components/Footer.tsx
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background py-12 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">PrimeFlatbeds</h3>
            <p>Redefining flatbed trucking with innovation and reliability.</p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#tracker" className="hover:text-primary">Driver Tracker</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p>30A Kennedy Road S <br/>Brampton, ON, L6W3E2</p>
            <p>Email: info@primeflatbeds.com</p>
            <p>Phone: +1 (647) 615-9707</p>
          </div>
         
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p>&copy; 2024 PrimeFlatbeds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;