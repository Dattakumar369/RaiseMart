import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png'; 
 const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const services = [
    'Digital Marketing Strategy',
    'Search Engine Optimization',
    'Social Media Management',
    'Pay-Per-Click Advertising',
    'Content Creation',
    'Website Design & Development',
  ];

  const industries = [
    'E-commerce Brands',
    'Real Estate Agencies',
    'Health & Wellness',
    'Educational Institutions',
    'Tech Startups',
    'Local Businesses',
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="Rise Mars Logo" 
              className={`h-10 transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-red-500 ${
                location.pathname === '/'
                  ? (scrolled ? 'text-red-600' : 'text-red-400')
                  : (scrolled ? 'text-gray-800' : 'text-white')
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-all duration-300 hover:text-red-500 ${
                location.pathname === '/about'
                  ? (scrolled ? 'text-red-600' : 'text-red-400')
                  : (scrolled ? 'text-gray-800' : 'text-white')
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`text-sm font-medium transition-all duration-300 hover:text-red-500 flex items-center ${
                  location.pathname === '/services'
                    ? (scrolled ? 'text-red-600' : 'text-red-400')
                    : (scrolled ? 'text-gray-800' : 'text-white')
                }`}
              >
                Services <ChevronDown size={16} className="ml-1" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <Link
                to="/industries"
                className={`text-sm font-medium transition-all duration-300 hover:text-red-500 flex items-center ${
                  location.pathname === '/industries'
                    ? (scrolled ? 'text-red-600' : 'text-red-400')
                    : (scrolled ? 'text-gray-800' : 'text-white')
                }`}
              >
                Industries <ChevronDown size={16} className="ml-1" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {industries.map((industry, index) => (
                    <Link
                      key={index}
                      to="/industries"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-300"
                    >
                      {industry}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-all duration-300 hover:text-red-500 ${
                location.pathname === '/contact'
                  ? (scrolled ? 'text-red-600' : 'text-red-400')
                  : (scrolled ? 'text-gray-800' : 'text-white')
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-medium transition-transform duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-gray-800 text-lg font-medium ${
                location.pathname === '/' ? 'text-red-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-800 text-lg font-medium ${
                location.pathname === '/about' ? 'text-red-600' : ''
              }`}
            >
              About
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="space-y-2">
              <Link
                to="/services"
                className={`text-gray-800 text-lg font-medium ${
                  location.pathname === '/services' ? 'text-red-600' : ''
                }`}
              >
                Services
              </Link>
              <div className="pl-4 space-y-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to="/services"
                    className="block text-gray-600 text-sm hover:text-red-500"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Industries Dropdown */}
            <div className="space-y-2">
              <Link
                to="/industries"
                className={`text-gray-800 text-lg font-medium ${
                  location.pathname === '/industries' ? 'text-red-600' : ''
                }`}
              >
                Industries
              </Link>
              <div className="pl-4 space-y-2">
                {industries.map((industry, index) => (
                  <Link
                    key={index}
                    to="/industries"
                    className="block text-gray-600 text-sm hover:text-red-500"
                  >
                    {industry}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`text-gray-800 text-lg font-medium ${
                location.pathname === '/contact' ? 'text-red-600' : ''
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-medium text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;