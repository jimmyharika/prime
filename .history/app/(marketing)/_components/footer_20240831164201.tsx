import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Contact Us</h5>
          <p>123 Trucking Lane, Freight City, USA</p>
          <p>Email: dispatch@primeflatbeds.com</p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Follow Us</h5>
          
        </div>
      </div>
    </footer>
  );
}
