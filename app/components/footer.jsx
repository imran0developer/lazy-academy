import Link from 'next/link';
import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Lazy academy. Learn with fun.</p>
          </div>
          <nav>
            <ul className="flex">
              <li><Link href="#hero" className="hover:text-gray-400 mr-4">Home</Link></li>
              <li><Link href="#introduction" className="hover:text-gray-400 mr-4">Introduction</Link></li>
              <li><Link href="#courses" className="hover:text-gray-400 mr-4">Courses</Link></li>
              <li><Link href="#pricing" className="hover:text-gray-400">Pricing</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
