import { Users, Award, Globe, Heart, CheckCircle, Calendar, Shield, Truck, Clock, Star, Building, Target, Eye } from 'lucide-react';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="h-4 w-4 mr-2" />
              Established 2010
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-blue-200">Razzaq Sons</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pakistan's most trusted pharmaceutical supply partner, committed to improving 
              healthcare outcomes through quality medicines and reliable service since 2010.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span>14+ Years Excellence</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-400" />
                <span>WHO-GMP Certified</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-400" />
                <span>500+ Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">14+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Products Available</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="h-4 w-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Razzaq Sons Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Pakistan's most trusted pharmaceutical supplier
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Founded in 2010</h3>
                    <p className="text-blue-600 font-medium">The Beginning</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Founded by Razzaq Ahmad with a vision to make quality healthcare accessible 
                  to all corners of Pakistan. What started as a local initiative has grown into 
                  one of the country's most trusted pharmaceutical supply networks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Nationwide Expansion</h3>
                    <p className="text-green-600 font-medium">Growth & Trust</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Over the years, we have built strong relationships with leading pharmaceutical 
                  manufacturers, healthcare providers, and regulatory bodies. Our commitment to 
                  quality, reliability, and customer service has earned us nationwide trust.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Industry Leadership</h3>
                    <p className="text-purple-600 font-medium">Excellence Today</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Today, under the leadership of CEO Razzaq Ahmad and Director Arslan Ahmad, 
                  we continue to expand our reach while maintaining the same core values: 
                  integrity, quality, and service excellence.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pharmaceutical Supply Chain"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Trusted Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
              <Target className="h-4 w-4 mr-2" />
              Our Purpose
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our core principles, we strive to make a positive impact on Pakistan's healthcare landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide reliable, high-quality pharmaceutical products and services that 
                support healthcare providers in delivering excellent patient care across Pakistan. 
                We are committed to improving health outcomes through innovative supply chain 
                solutions and unwavering dedication to quality and service excellence.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be Pakistan's leading pharmaceutical supply company, recognized for our 
                commitment to quality, innovation, and customer service. We envision a future 
                where every healthcare provider has access to the medicines they need, when 
                they need them, to save and improve lives.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Patient First</h3>
              <p className="text-gray-600 leading-relaxed">Every decision we make prioritizes patient safety and healthcare outcomes</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Uncompromising commitment to the highest quality standards in everything we do</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Partnership</h3>
              <p className="text-gray-600 leading-relaxed">Building long-term relationships based on trust, reliability, and mutual success</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">Continuously improving our processes and services to better serve healthcare needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="h-4 w-4 mr-2" />
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in pharmaceutical supply across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-4xl font-bold">RA</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Razzaq Ahmad</h3>
                <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Building className="h-4 w-4 mr-2" />
                  CEO & Founder
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With over 14 years of experience in the pharmaceutical industry, Razzaq Ahmad 
                  founded the company in 2010 with a vision to improve healthcare accessibility 
                  across Pakistan. His leadership and industry expertise have been instrumental 
                  in establishing Razzaq Sons as a trusted name in pharmaceutical supply.
                </p>
                <div className="flex items-center justify-center text-sm text-blue-600 font-medium">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Leading since 2010</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-10 rounded-3xl border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-4xl font-bold">AA</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Arslan Ahmad</h3>
                <div className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  Director
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As Director, Arslan Ahmad brings fresh perspectives and innovative approaches 
                  to the company's operations. His focus on technology integration and process 
                  optimization has helped modernize our supply chain and improve customer service 
                  delivery across all touchpoints.
                </p>
                <div className="flex items-center justify-center text-sm text-purple-600 font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  <span>Driving Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important moments that shaped our growth and development over the years
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mr-4">
                        2010
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Company Founded</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Razzaq Ahmad establishes Razzaq Sons with a mission to improve pharmaceutical 
                      distribution in Pakistan, starting with a small team and big dreams.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Company Foundation" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center">
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mr-4">
                        2015
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Expansion Phase</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Expanded operations to cover major cities across Pakistan and established 
                      partnerships with leading pharmaceutical manufacturers nationwide.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pr-12">
                  <img 
                    src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Expansion Phase" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mr-4">
                        2020
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Technology Integration</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Implemented advanced inventory management and cold chain logistics systems 
                      to enhance service quality and reliability across all operations.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Technology Integration" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center">
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mr-4">
                        2024
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Continued Excellence</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Serving 500+ healthcare partners with 1000+ products and maintaining 
                      24/7 emergency support services across Pakistan with unwavering commitment.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pr-12">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Current Excellence" 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}