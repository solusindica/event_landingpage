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
                    <span>T-Hub Phase 2,</span><br></br> Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500032
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
                  <span>30 minutes from Rajiv Gandhi International Airport</span>
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
                  src="https://maps.google.com/maps?q=17.4345506,78.3792185&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}