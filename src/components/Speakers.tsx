import React from 'react';
import { Building, Award } from 'lucide-react';
import speaker from "../assets/speaker.jpeg"; // <-- import your background image here

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Ravishankar Polisetty",
      title: "Conference Chair",
      organization: "Founder and CEO, Sai Ganga Panakeia Ltd",
      image: speaker, // replace with your uploaded logo/path
      credentials:
        "Pioneer in developing the PSA Medicine framework and founder of multiple successful integrative healthcare ventures. Dr. Polisetty brings over 32 years of experience bridging traditional and modern medical approaches."
    },
    // {
    //   name: "Dr. Sridhar Akepalli",
    //   title: "Conference Convener",
    //   organization: "National Integrated Medical Association (NIMA)",
    //   image: "/images/speaker-akepalli.png", // replace with your uploaded logo/path
    //   credentials:
    //     "Leading advocate for integrative medicine policy reform and standardization. Dr. Akepalli has played a crucial role in developing regulatory frameworks that enable safe, effective integration of multiple medical traditions."
    // }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Featured Speakers & Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from distinguished experts who are pioneering integrative healthcare in India.
          </p>
        </div>

        {/* Speaker Layout */}
        <div className="space-y-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="grid md:grid-cols-4 gap-8 items-center bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Speaker Image (Left 2 columns) */}
              <div className="md:col-span-2">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Speaker Info (Right 2 columns) */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {speaker.name}
                </h3>
                <div className="flex items-center gap-2 text-yellow-600 mb-2">
                  <Award className="w-4 h-4" />
                  <p className="text-md font-medium">{speaker.title}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <Building className="w-4 h-4" />
                  <p className="text-md">{speaker.organization}</p>
                </div>
                <p className="text-gray-700 text-md leading-relaxed">
                  {speaker.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Faculty */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Additional Distinguished Faculty
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            The conference also features renowned speakers from:
          </p>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>• All India Institute of Ayurveda</li>
            <li>• IIT Hyderabad</li>
            <li>• Ministry of AYUSH</li>
            <li>• Leading medical institutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
