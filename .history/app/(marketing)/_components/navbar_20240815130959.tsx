import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 px-4 border-b shadow-sm bg-white flex items-center z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="text-xl font-bold text-primary">TruckingCo</a>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <a className="text-gray-700 hover:text-primary">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-primary">About Us</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-700 hover:text-primary">Services</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-primary">Contact</a>
          </Link>
          <Link href="/track">
            <a className="text-gray-700 hover:text-primary">Track Shipment</a>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button className="bg-primary text-white" size="sm" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};
