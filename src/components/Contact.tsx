import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@sgprs.com",
      description: "For general inquiries and registration support"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "7331109988",
      description: "Monday - Saturday, 9:00 AM - 6:00 PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      info: "Sai Ganga Panakeia",
      description: "BO-1, Block-B, Indu Fortune Fields -The Annexe, 13th Phase, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Social Media",
      info: "@sgppsa",
      description: "Follow us for the latest updates and announcements"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about the conference? Our team is here to help you with registration, 
            venue information and any other inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-yellow-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-blue-700 font-medium mb-2">
                {item.info}
              </p>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our conference support team is available to help you with any questions 
            about registration, accommodation, or special requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-blue-100">
              <Clock className="w-5 h-5" />
              <span>Response within 24 hours</span>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}