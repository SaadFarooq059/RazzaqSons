import Link from 'next/link';
import { Pill, Phone, Mail, MapPin, Clock, Award, Shield, Truck, Heart, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
                  <Pill className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Razzaq Sons</span>
                  <div className="text-blue-300 text-sm">Since 2010</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Pakistan&apos;s leading pharmaceutical supply company, providing quality medicines and 
                healthcare solutions with 14+ years of excellence. Trusted by 500+ healthcare 
                providers nationwide.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">WHO-GMP Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Patient First</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-white font-semibold">0317-0674572</span>
                    <div className="text-blue-300 text-sm">24/7 Emergency Support</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-white font-semibold">info@razzaqsons.com</span>
                    <div className="text-blue-300 text-sm">Response within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-white font-semibold">Plot 15-D Model Town</span>
                    <div className="text-blue-300 text-sm">Humak Industrial Zone, Islamabad</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'How We Help', href: '/how-we-help' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services & Business Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300">Pharmaceutical Products</li>
                <li className="text-gray-300">Distribution Services</li>
                <li className="text-gray-300">Quality Assurance</li>
                <li className="text-gray-300">Healthcare Support</li>
                <li className="text-gray-300">Emergency Delivery</li>
              </ul>

              <div className="bg-blue-800 p-4 rounded-lg border border-blue-700">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="font-semibold text-white">Business Hours</span>
                </div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency only</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © 2024 Razzaq Sons. All rights reserved.
                </p>
                <p className="text-blue-300 text-sm">
                  Serving Pakistan&apos;s healthcare needs since 2010
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}