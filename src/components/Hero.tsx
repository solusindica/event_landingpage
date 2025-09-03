import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import bgimage from '../assets/bgimage.jpeg';

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
          <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgimage})` }}
      ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Two Traditions,<span className="block text-yellow-400">One Science :</span>
          </h1> 
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8  max-w-4xl mx-auto">Training in Polyscientific Advanced Integrative Medicine (PSA Medicine)</p><br />
          
          
        

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Coming this September</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Senior Professionals</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Academic Excellence</span>
            </div>
          </div>

          <button
            onClick={scrollToRegister}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}