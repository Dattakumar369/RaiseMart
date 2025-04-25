import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, PenTool, Rocket, Award, Globe, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Rise Mars Digital Solutions';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Rise Mars</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of digital enthusiasts fuelling growth for businesses through innovative marketing solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Rise Mars, we believe bold ideas spark bold results. We are a performance-driven digital marketing agency based in Hyderabad, India, helping businesses of all sizes launch, grow, and lead in the digital space.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2025, our mission is to transform brands through smart strategies, creative storytelling, and data-driven execution. Our name reflects our mindset—"Rise" for growth, ambition, and impact, and "Mars" for innovation, exploration, and future-forward thinking.
              </p>
              <p className="text-lg text-gray-700">
                From startups and local businesses to established enterprises, we partner with brands to craft digital journeys that are effective, engaging, and future-ready.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-red-500 rounded-full opacity-20 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Rocket className="text-red-500 mr-3" size={28} />
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                To become a globally recognized digital powerhouse that transforms brands through innovation, creativity, and bold marketing strategies inspired by the spirit of Mars.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="text-red-500 mr-3" size={28} />
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To help businesses launch and grow in the digital universe through data-driven campaigns, futuristic storytelling, and performance-driven solutions that spark real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Rise Mars Digital Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-red-500" size={40} />,
                title: 'Innovation First',
                description: 'We embrace new technologies and approaches to stay ahead of digital trends.',
              },
              {
                icon: <Users className="text-red-500" size={40} />,
                title: 'Client Partnership',
                description: 'We work as an extension of your team, fully invested in your success.',
              },
              {
                icon: <Award className="text-red-500" size={40} />,
                title: 'Excellence',
                description: 'We pursue excellence in every campaign, design, and strategy we develop.',
              },
              {
                icon: <PenTool className="text-red-500" size={40} />,
                title: 'Creative Boldness',
                description: 'We believe in standing out with bold, memorable creative work.',
              },
              {
                icon: <Rocket className="text-red-500" size={40} />,
                title: 'Growth Mindset',
                description: 'We\'re obsessed with measuring, optimizing, and delivering real growth.',
              },
              {
                icon: <Globe className="text-red-500" size={40} />,
                title: 'Global Perspective',
                description: 'We think globally while acting locally to maximize your impact.',
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented professionals bring diverse skills and expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'Digital Marketing Specialist',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Sarah Chen',
                role: 'Creative Director',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Raj Patel',
                role: 'Digital Ads Strategist',
                image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Maya Williams',
                role: 'Client Relations Manager',
                image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3 justify-center">
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-95 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to work with our team?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Get in touch and let's discuss how we can help your business grow digitally.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg"
          >
            Contact Us <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;