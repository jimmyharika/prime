// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image src="/logo.png" alt="PrimeFlatbeds Logo" width={180} height={60} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-amber-400 transition">Services</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;