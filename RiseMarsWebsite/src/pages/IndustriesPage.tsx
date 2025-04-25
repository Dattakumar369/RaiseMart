import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Home, Heart, GraduationCap, Cpu, Store, ShoppingBag, Utensils, Gem, Briefcase, CheckCircle } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Industries We Serve | Rise Mars Digital Solutions';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized digital marketing solutions for diverse industries, each with unique challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges and opportunities across different sectors. Our tailored digital marketing solutions are designed to address specific industry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                icon: <ShoppingBag className="text-red-500" size={40} />,
                title: 'E-commerce Brands',
                description: 'Drive online sales, optimize product listings, and create seamless shopping experiences that convert browsers into buyers. Our e-commerce marketing strategies focus on customer acquisition, retention, and maximizing lifetime value.',
                image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Building className="text-red-500" size={40} />,
                title: 'Real Estate Agencies',
                description: 'Showcase properties effectively, generate quality leads, and build trust with potential buyers and sellers. Our real estate marketing solutions help you stand out in a competitive market and close more deals.',
                image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Heart className="text-red-500" size={40} />,
                title: 'Health & Wellness',
                description: 'Connect with health-conscious consumers, communicate your expertise, and grow your practice or wellness business. We help health professionals navigate digital marketing while maintaining compliance and building trust.',
                image: 'https://images.pexels.com/photos/373941/pexels-photo-373941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <GraduationCap className="text-red-500" size={40} />,
                title: 'Educational Institutions',
                description: 'Attract prospective students, engage alumni, and showcase your educational offerings. Our education marketing strategies help institutions of all sizes increase enrollment and build their reputation.',
                image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Cpu className="text-red-500" size={40} />,
                title: 'Tech Startups',
                description: 'Launch your innovative product, reach early adopters, and scale your user base. Our tech startup marketing combines growth hacking techniques with sustainable brand building for long-term success.',
                image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Store className="text-red-500" size={40} />,
                title: 'Local Businesses',
                description: 'Dominate local search, attract nearby customers, and build community presence. Our local business marketing strategies help you compete effectively in your neighborhood and beyond.',
                image: 'https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Utensils className="text-red-500" size={40} />,
                title: 'Restaurants & Hospitality',
                description: 'Fill your tables, promote special events, and build a loyal customer base. Our restaurant marketing strategies help you showcase your unique dining experience and keep customers coming back.',
                image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Gem className="text-red-500" size={40} />,
                title: 'Jewelry & Luxury Goods',
                description: 'Showcase your craftsmanship, reach affluent customers, and create desire for your luxury products. Our luxury marketing approaches emphasize exclusivity, quality, and emotional connection.',
                image: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Briefcase className="text-red-500" size={40} />,
                title: 'Professional Services',
                description: 'Establish thought leadership, generate qualified leads, and build credibility for your consulting, legal, or financial services. Our B2B marketing strategies focus on relationship building and demonstrating expertise.',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
            ].map((industry, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{industry.description}</p>
                <div className="mt-6 h-48 rounded-lg overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-red-600">Rise Mars</span> For Your Industry?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We don't believe in one-size-fits-all solutions. Our team takes the time to understand the unique challenges, opportunities, and competitive landscape of your specific industry to deliver tailored digital marketing strategies that drive real results.
              </p>
              
              <div className="space-y-4">
                {[
                  'Industry-specific expertise and insights',
                  'Customized strategies aligned with your sector\'s unique needs',
                  'Understanding of industry regulations and best practices',
                  'Competitive analysis within your specific market',
                  'Targeted audience research for your industry',
                  'Performance metrics that matter to your business goals',
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-95 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to dominate your industry online?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Get in touch with our team to discuss your specific industry challenges and how we can help you overcome them with tailored digital marketing solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg"
          >
            Let's Talk Strategy <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;