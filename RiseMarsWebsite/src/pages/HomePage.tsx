import React, { useEffect } from 'react';
import { ArrowRight, Users, BarChart, Target, PieChart, CheckCircle, DollarSign, Building as Buildings } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Rise Mars Digital Solutions | Digital Marketing Agency';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-40 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
              Fuelling Digital Growth <span className="text-red-500">Beyond Limits</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fadeIn animation-delay-200">
              We help startups, local businesses, and established brands break barriers through high-performance marketing, intelligent storytelling, and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-400">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 text-center"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-center flex items-center justify-center"
              >
                Our Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we deliver end-to-end digital marketing solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart className="text-red-500" size={40} />,
                title: 'Digital Marketing Strategy',
                description: 'Custom digital strategies tailored to your business goals and target audience.',
              },
              {
                icon: <Target className="text-red-500" size={40} />,
                title: 'Search Engine Optimization',
                description: 'Boost your online visibility and drive organic traffic with data-driven SEO.',
              },
              {
                icon: <Users className="text-red-500" size={40} />,
                title: 'Social Media Management',
                description: 'Engage your audience and build brand loyalty through strategic social media presence.',
              },
              {
                icon: <PieChart className="text-red-500" size={40} />,
                title: 'Pay-Per-Click Advertising',
                description: 'Drive targeted traffic and increase conversions with effective PPC campaigns.',
              },
              {
                icon: <DollarSign className="text-red-500" size={40} />,
                title: 'Content Creation',
                description: 'Compelling graphics, blogs, and videos that tell your brand story and drive engagement.',
              },
              {
                icon: <Buildings className="text-red-500" size={40} />,
                title: 'Website Design & Development',
                description: 'Custom websites that look great, perform well, and convert visitors into customers.',
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-red-100 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-red-500 hover:text-red-700 font-medium transition-colors duration-300"
                >
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-red-600">Rise Mars</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Rise Mars, we believe bold ideas spark bold results. We are a performance-driven digital marketing agency based in Hyderabad, India, helping businesses of all sizes launch, grow, and lead in the digital space.
              </p>
              
              <div className="space-y-4">
                {[
                  'Innovative thinking with futuristic strategies tailored for your business',
                  'Creative execution with bold design & content that grabs attention',
                  'Full-service team: designers, strategists, developers & marketers under one roof',
                  'Focus on ROI, growth metrics, and long-term brand value',
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center mt-8 px-6 py-3 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-40 bg-red-500 rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in digital marketing solutions for diverse industries, each with unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Brands',
                image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                title: 'Real Estate Agencies',
                image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                title: 'Health & Wellness',
                image: 'https://images.pexels.com/photos/373941/pexels-photo-373941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                title: 'Educational Institutions',
                image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                title: 'Tech Startups',
                image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                title: 'Local Businesses',
                image: 'https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((industry, index) => (
              <div key={index} className="group relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                  <Link
                    to="/industries"
                    className="text-sm text-red-300 hover:text-white transition-colors duration-300 flex items-center mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/industries"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-colors duration-300"
            >
              View All Industries <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-95 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to launch your digital growth?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Get in touch with our team and discover how Rise Mars can transform your digital presence and drive real business results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg"
          >
            Start Your Digital Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;