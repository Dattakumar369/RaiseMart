import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Rocket } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    document.title = 'Contact Us | Rise Mars Digital Solutions';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true
    });

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for contacting us! We will get back to you shortly.',
        loading: false
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Sorry, something went wrong. Please try again later.',
        loading: false
      });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30 z-[-1]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to launch your digital growth? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or want to discuss your project? Reach out to us using any of the methods below, or fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin size={24} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">Hyderabad, Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 99999 88888</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">info@risemars.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Rocket size={28} className="text-red-500" />
                  <h3 className="text-xl font-bold text-gray-900">Working Hours</h3>
                </div>
                <div className="space-y-2">
                  <p className="flex justify-between text-gray-700">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between text-gray-700">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between text-gray-700">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className={`p-4 rounded-lg mb-6 ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {formStatus.message}
                </div>
              ) : null}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                  >
                    <option value="">Select a Service</option>
                    <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                    <option value="Search Engine Optimization">Search Engine Optimization</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Pay-Per-Click Advertising">Pay-Per-Click Advertising</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Email Marketing & Automation">Email Marketing & Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center ${formStatus.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {formStatus.loading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our office in Hyderabad to discuss your project in person.
            </p>
          </div>
          
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            {/* Placeholder for Google Map - In a real implementation, you would use Google Maps API */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rise Mars Digital Solutions</h3>
                <p className="text-gray-600">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How soon can you start working on my project?",
                answer: "We typically begin new projects within 1-2 weeks of finalizing the agreement. For urgent needs, we may be able to accommodate a faster timeline."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing varies based on the scope of work, services required, and your specific business needs. We offer both project-based and monthly retainer options."
              },
              {
                question: "Do you work with businesses outside of Hyderabad?",
                answer: "Yes, we work with clients across India and internationally. Our digital-first approach allows us to collaborate effectively regardless of location."
              },
              {
                question: "How long does it take to see results?",
                answer: "Results timeline varies by service. SEO typically shows initial improvements in 3-6 months, while paid advertising can generate leads immediately. We'll provide realistic timelines based on your specific goals."
              },
              {
                question: "Do you offer website maintenance services?",
                answer: "Yes, we offer ongoing website maintenance and support to ensure your site remains secure, up-to-date, and performing optimally."
              },
              {
                question: "Can you work with my existing website?",
                answer: "Yes, we can work with your existing website to improve its performance, design, and functionality. We'll assess your current site and recommend the best approach."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;