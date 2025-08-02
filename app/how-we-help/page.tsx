'use client';

import { Shield, Truck, Users, Award, CheckCircle, Clock, Globe, Heart } from 'lucide-react';
import Header from '@/components/Header';
import { AuroraHero } from '@/components/ui/futuristic-hero-section';

export default function HowWeHelpPage() {
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Futuristic Hero Section */}
      <AuroraHero
        badge="Healthcare Solutions"
        title="How We Help Transform Healthcare in Pakistan"
        description="Comprehensive pharmaceutical solutions designed to support healthcare providers and ensure quality medicine reaches every corner of Pakistan. From WHO-GMP certified products to 24/7 emergency support, we're your trusted partner in healthcare excellence."
        buttonText="Get Started"
        onButtonClick={handleGetStarted}
      />

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end pharmaceutical solutions tailored to meet diverse healthcare needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Pharmaceutical Products</h3>
                <p className="text-gray-600 mb-4">
                  We supply a comprehensive range of WHO-GMP certified medicines including prescription drugs, 
                  over-the-counter medications, vaccines, and specialized treatments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Prescription Medications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">OTC Products</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Vaccines & Biologics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Distribution Services</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced cold chain logistics and nationwide distribution network ensures 
                  timely delivery of medicines while maintaining their efficacy and quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Cold Chain Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Nationwide Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Emergency Delivery</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  Rigorous quality control processes ensure every product meets international 
                  standards and regulatory requirements for patient safety.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">WHO-GMP Compliance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Batch Testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Regulatory Compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Healthcare Support</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated support services for hospitals, clinics, and healthcare providers 
                  including training, consultation, and technical assistance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">24/7 Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Training Programs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">Technical Consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure quality and reliability at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Processing</h3>
              <p className="text-gray-600">
                Efficient order management system with real-time tracking and confirmation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
              <p className="text-gray-600">
                Comprehensive quality verification and batch testing before dispatch
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Packaging</h3>
              <p className="text-gray-600">
                Temperature-controlled packaging with proper labeling and documentation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                Fast and reliable delivery with real-time tracking and confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Razzaq Sons
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of partnering with Pakistan&apos;s trusted pharmaceutical supplier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Quick order processing and emergency supply capabilities for urgent healthcare needs
              </p>
            </div>
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
              <p className="text-gray-600">
                Extensive distribution network covering major cities and remote areas across Pakistan
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient Focus</h3>
              <p className="text-gray-600">
                Committed to improving healthcare outcomes and patient safety through quality medicines
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}