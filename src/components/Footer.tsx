import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Details */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sai Ganga Panakeia Pvt. Ltd.</h3>
            <p className="text-blue-100 mb-6 max-w-md">
              Integrating modern allopathic systems with ancient Ayurvedic wisdom through innovation and clinical excellence.
            </p>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91&nbsp;73311&nbsp;09988</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1800&nbsp;56&nbsp;98989</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@sgprs.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>BO-1, B Block, Indu Fortune Fields, 13th Phase Rd, Kukatpally Housing Board Colony, Hyderabad – 500085</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About </a></li>
              <li><a href="#speakers" className="hover:text-yellow-400 transition-colors">Speakers</a></li>
              <li><a href="#agenda" className="hover:text-yellow-400 transition-colors">Agenda</a></li>
              <li><a href="#venue" className="hover:text-yellow-400 transition-colors">Venue</a></li>
              <li><a href="/Home/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Placeholder for spacing or future content */}
          <div />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} Sai Ganga Panakeia. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-blue-200">
              <a href="/Home/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="/Home/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
