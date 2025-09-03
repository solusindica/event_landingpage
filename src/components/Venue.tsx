import React from 'react';
import { MapPin, Car, Train, Plane, Wifi, Coffee, Car as CarIcon } from 'lucide-react';

export default function Venue() {


  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Venue & Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at a prestigious venue designed to facilitate learning, networking and professional excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              T-Hub
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                     Plot No 1/C, Sy No 83/1 <br />
                    Raidurgam panmaktha Hyderabad Knowledge City<br />
                    Serilingampally, Hyderabad, Telangana 500081.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Transportation</h4>
                  <p className="text-gray-600">
                    Easily accessible by car, public transit and air travel. 
                    The venue is located just 30 minutes from the international airport.
                  </p>
                </div>
              </div>

              
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Getting There</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span>30 minutes from Metropolitan International Airport</span>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4" />
                  <span>1.5km from Raidurg Metro Station</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            {/* Map placeholder */}
             <div className="rounded-xl overflow-hidden shadow-lg h-96 mb-6">
          <iframe
            title="T-Hub Hyderabad Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.664021597924!2d78.3465906!3d17.445659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91236b79c8fb%3A0x529852803fa55d27!2sT-Hub!5e0!3m2!1sen!2sin!4v1693354152664!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

            {/* <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Accommodation Partners</h4>
              <p className="text-blue-100 mb-4">
                Special rates available at nearby partner hotels for conference attendees.
              </p>
              <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                View Hotel Options
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}