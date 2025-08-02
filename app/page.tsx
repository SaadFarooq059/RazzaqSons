"use client";

import { HeroSection } from '@/components/ui/dynamic-hero';
import { ShuffleCards } from '@/components/ui/testimonial-cards';
import { FeaturesSectionWithCardGradient } from '@/components/ui/feature-section-with-card-gradient';
import { Feature } from '@/components/ui/feature';
import { Casestudy5 } from '@/components/ui/casestudy-5';
import { Shield, Truck, Users, Award, CheckCircle, Phone, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <HeroSection
        heading="Leading Pharmaceutical Supply Company"
        tagline="Providing quality medicines and healthcare solutions across Pakistan since 2010. Your trusted partner in pharmaceutical distribution and healthcare excellence."
        buttonText="Get Started"
        imageUrl="/hero.png"
      />

      {/* Services Section */}
      <FeaturesSectionWithCardGradient />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <Feature 
        badge="Excellence"
        title="Why Choose Razzaq Sons"
        description="Experience the benefits of partnering with Pakistan's trusted pharmaceutical supplier since 2010."
        features={[
          {
            title: "14+ Years Experience",
            description: "Over a decade of excellence in pharmaceutical supply and distribution across Pakistan"
          },
          {
            title: "WHO-GMP Certified",
            description: "All products meet international quality standards ensuring patient safety and efficacy"
          },
          {
            title: "24/7 Emergency Support",
            description: "Round-the-clock emergency delivery and dedicated customer support services"
          }
        ]}
        imageUrl="/whyus.png"
      />

      {/* Testimonials Section */}
      <ShuffleCards />

      {/* Achievements Section using Casestudy5 */}
      <Casestudy5 
        featuredAchievement={{
          icon: <Award className="h-8 w-8" />,
          company: "Industry Leadership",
          tags: "PHARMACEUTICAL EXCELLENCE / MARKET LEADER",
          title: "14+ Years of Pharmaceutical Excellence",
          subtitle: "Leading Pakistan's healthcare supply chain with unmatched quality and reliability.",
          image: "/case.png",
          link: "#",
        }}
        achievements={[
          {
            icon: <Shield className="h-8 w-8" />,
            company: "Quality Assurance",
            tags: "WHO-GMP CERTIFIED / INTERNATIONAL STANDARDS",
            title: "WHO-GMP Certified Operations",
            subtitle: "Maintaining international quality standards across all pharmaceutical products.",
            image: "",
            link: "#",
          },
          {
            icon: <Clock className="h-8 w-8" />,
            company: "Emergency Response",
            tags: "24/7 AVAILABILITY / RAPID DELIVERY",
            title: "Round-the-Clock Emergency Support",
            subtitle: "Critical medicine delivery when healthcare providers need it most.",
            image: "",
            link: "#",
          },
        ]}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about partnering with Pakistan&apos;s leading pharmaceutical supplier
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">?</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      What types of pharmaceutical products do you supply?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We supply a comprehensive range including prescription medications, OTC products, 
                      vaccines, biologics, and specialized treatments from WHO-GMP certified manufacturers. 
                      Our extensive catalog covers everything from common medicines to rare disease treatments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">⚡</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Do you provide emergency delivery services?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Yes, we offer 24/7 emergency delivery services for urgent healthcare needs. 
                      Contact us immediately at <span className="font-semibold text-blue-600">0317-0674572</span> for critical medicine requirements. 
                      Our emergency response team can deliver within hours across major cities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📍</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      What areas do you cover in Pakistan?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our distribution network covers major cities and remote areas across Pakistan, 
                      with cold chain logistics ensuring medicine quality during transport. We serve 
                      from Karachi to Gilgit-Baltistan, reaching even the most remote healthcare facilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      How do you ensure product quality?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We maintain strict WHO-GMP compliance, conduct batch testing, and follow 
                      rigorous quality control processes throughout our supply chain. Every product 
                      undergoes multiple quality checks before reaching healthcare providers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">⭐</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      What makes Razzaq Sons different from other suppliers?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      With 14+ years of experience, we offer personalized service, reliable cold chain 
                      logistics, 24/7 support, and strong relationships with leading manufacturers. 
                      Our commitment to healthcare excellence sets us apart in the industry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl shadow-lg text-white">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">🤝</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">
                      How can I become a partner with Razzaq Sons?
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-4">
                      Contact our team at <span className="font-semibold text-white">info@razzaqsons.com</span> or 
                      call <span className="font-semibold text-white">0317-0674572</span>. We&apos;ll discuss 
                      your specific needs and create a customized supply solution for your organization.
                    </p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Start Partnership Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}