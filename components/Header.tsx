'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Pill, Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How We Help', href: '/how-we-help' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>0317-0674572</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>info@razzaqsons.com</span>
            </div>
          </div>
          <div className="text-gray-600">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              24/7 Emergency Support Available
            </span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Razzaq Sons
                </span>
                <div className="text-xs text-gray-500 -mt-1">Since 2010</div>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
              <div className="pt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>0317-0674572</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>info@razzaqsons.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}