import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Target, Users, PieChart, DollarSign, Layout, Mail, Megaphone, ArrowRight, Shield, Globe, Cpu } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Rise Mars Digital Solutions';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/34578/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to launch your brand to new heights.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer end-to-end digital marketing services that cover every stage of your brand's digital growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                icon: <BarChart className="text-red-500" size={40} />,
                title: 'Digital Marketing Strategy',
                description: 'Custom digital strategies tailored to your business goals, target audience, and industry benchmarks. We analyze market trends, competitor positioning, and customer insights to create a roadmap for digital success.',
              },
              {
                icon: <Target className="text-red-500" size={40} />,
                title: 'Search Engine Optimization',
                description: 'Boost your online visibility and drive organic traffic with data-driven SEO. Our approach combines technical optimization, content strategy, and off-page tactics to improve your search rankings.',
              },
              {
                icon: <Users className="text-red-500" size={40} />,
                title: 'Social Media Management',
                description: 'Engage your audience and build brand loyalty through strategic social media presence. We handle content creation, community management, and performance analytics across platforms.',
              },
              {
                icon: <PieChart className="text-red-500" size={40} />,
                title: 'Pay-Per-Click Advertising',
                description: 'Drive targeted traffic and increase conversions with effective PPC campaigns on Google, Facebook, Instagram, and other platforms. Our data-driven approach maximizes your ad spend ROI.',
              },
              {
                icon: <Layout className="text-red-500" size={40} />,
                title: 'Website Design & Development',
                description: 'Custom websites that look great, perform well, and convert visitors into customers. We focus on user experience, mobile optimization, and conversion-centered design.',
              },
              {
                icon: <DollarSign className="text-red-500" size={40} />,
                title: 'Content Creation',
                description: 'Compelling graphics, blogs, videos and reels that tell your brand story and drive engagement. Our creative team produces high-quality content tailored to your audience and marketing goals.',
              },
              {
                icon: <Mail className="text-red-500" size={40} />,
                title: 'Email Marketing & Automation',
                description: 'Build lasting relationships with your audience through personalized email campaigns and marketing automation workflows that nurture leads and drive conversions.',
              },
              {
                icon: <Megaphone className="text-red-500" size={40} />,
                title: 'Influencer Marketing',
                description: 'Connect with relevant influencers to amplify your brand message and reach new audiences. We handle influencer identification, negotiation, and campaign management.',
              },
              {
                icon: <Shield className="text-red-500" size={40} />,
                title: 'Online Reputation Management',
                description: 'Protect and enhance your brand\'s online reputation through strategic monitoring, response management, and proactive content strategy.',
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-red-500 hover:text-red-700 font-medium transition-colors duration-300 mt-auto"
                >
                  Get Started <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure your digital marketing success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business goals, target audience, and current digital presence.',
                icon: <Cpu className="text-red-500" size={32} />,
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Based on research and analysis, we develop a custom digital marketing strategy tailored to your needs.',
                icon: <Target className="text-red-500" size={32} />,
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Our team executes the strategy across chosen channels, creating assets and launching campaigns.',
                icon: <BarChart className="text-red-500" size={32} />,
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor performance, gather insights, and optimize for better results.',
                icon: <Globe className="text-red-500" size={32} />,
              },
            ].map((process, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group"
              >
                <span className="absolute -top-5 -left-5 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {process.step}
                </span>
                <div className="mb-6 mt-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{process.title}</h3>
                <p className="text-gray-600 text-center">{process.description}</p>
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
            Ready to grow your digital presence?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Contact us today to discuss your project and discover how our services can help your business thrive online.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg"
          >
            Get in Touch <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;