import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/Rise Mark Logo White.png'; 

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Rise Mars Logo" 
                className="h-10" // Adjust height as needed
              />
            </div>
            <p className="text-gray-400 mt-4">
              Fuelling Digital Growth Beyond Limits. We help startups, local businesses, and established brands break barriers through high-performance marketing.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-red-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { title: 'Home', path: '/' },
                { title: 'About Us', path: '/about' },
                { title: 'Services', path: '/services' },
                { title: 'Industries', path: '/industries' },
                { title: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-red-500 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Digital Marketing Strategy',
                'Search Engine Optimization',
                'Social Media Management',
                'Pay-Per-Click Advertising',
                'Content Creation',
                'Website Design & Development',
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation('/services')}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-red-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-400">+91 99999 88888</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-400">info@risemars.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Rise Mars Digital Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;