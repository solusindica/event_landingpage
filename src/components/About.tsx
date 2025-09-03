import React from 'react';
import { GraduationCap, Users2, Microscope, Briefcase } from 'lucide-react';

export default function About() {
  interface Gain {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Example gains data
const gains: Gain[] = [
  // {
  //   icon: <GraduationCap className="w-8 h-8" />,
  //   title: "CME Accreditation",
  //   description: "CME accreditation and professional development."
  // },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Integrative Medicine",
    description: "Cutting-edge integrative medicine training."
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Networking",
    description: "Networking with leaders in multiple medical traditions."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Business Opportunities",
    description: "Franchise & business opportunities in Novadigm Clinics – SGP Hospitals."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Certification",
    description: "Certificate of participation from prestigious organizations."
  },
];

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "PSA Course Launch",
      description: "Be the first to witness India’s structured training pathways in Poly Scientific Ayurveda."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Expert Faculty & Collaborations",
      description: "Learn from national leaders, academic experts and IIT Hyderabad collaborators."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Clinical & Digital Innovations",
      description: "From pulse diagnosis to digital health — see the future in action."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Policy & Opportunities",
      description: "Engage in policy discussions and explore business models with Novadigm Clinics – SGP Hospitals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About the Conference
          </h2>
          <p className="text-xl text-gray-700 max-w-6xl mx-auto leading-relaxed">
          <span className="font-semibold text-blue-900">Healthcare</span> is changing fast — and 
          India is leading the way.  
          The <span className="font-bold text-blue-900">National Conference on Poly Scientific Ayurveda (IPSA 2025) </span> 
           isn’t just another CME, it’s a movement where 
          <span className="font-semibold text-blue-900"> tradition meets technology</span> and ideas turn into action.  

          Bringing together <span className="font-semibold text-blue-900">Ayurveda, Allopathy, Naturopathy, Nutrition </span> 
          and <span className="font-semibold text-blue-900"> Digital Health</span>, this conference offers doctors, students, 
          researchers, entrepreneurs and policymakers a chance to connect, learn and 
          <span className="font-semibold text-blue-900"> shape the future of integrative healthcare</span>.  

          This is more than a conference — it’s where <span className="font-semibold text-blue-900">careers accelerate, 
          innovations launch</span> and <span className="font-semibold text-blue-900">India’s healthcare future</span> is written.
        </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-yellow-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      <div className="mt-16 bg-white rounded-2xl p-10 md:p-16 shadow-xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            <span className="text-yellow-400">Who</span> should attend and <span className="text-yellow-400">Why?</span> 
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            This conference bridges traditional wisdom with modern science, opening new
            pathways for students, doctors, entrepreneurs and researchers in
            integrative healthcare.
          </p>
        </div>

        {/* Three Columns with Dividers */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-12">
          {/* Column 1 - Students & Doctors */}
          <div className="pr-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              For <span className="text-yellow-400">Students & Doctors</span>
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Witness the <span className="font-semibold text-yellow-500">launch of World’s first Institute of Poly Scientific Ayurveda</span> — integrating Ayurveda, Allopathy, Naturopathy, Nutrition & Digital Health into one curriculum.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Designed for <span className="font-semibold text-blue-900">BAMS, MBBS, BNYS, BHMS, MBBS, PharmD students</span> who want to upskill and <span className="font-semibold text-yellow-500">experienced doctors</span> who aspire to teach and lead in integrative healthcare.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Healthcare Entrepreneurs */}
          <div className="px-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              For <span className="text-yellow-400">Healthcare Entrepreneurs</span>
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Explore <span className="font-semibold text-blue-900">PSA Franchise Models</span> and opportunities to build scalable ventures in integrative medicine.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Connect with <span className="font-semibold text-yellow-500">investors, innovators and leaders</span> shaping the future of healthcare enterprises.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Researchers & Practitioners */}
          <div className="pl-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              For <span className="text-yellow-400">Researchers & Practitioners</span>
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Learn directly from <span className="font-semibold text-blue-900">national faculty</span> and <span className="font-semibold text-yellow-500">IIT Hyderabad collaborators</span> bringing cutting-edge research into classrooms.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Network with <span className="font-semibold text-blue-900">Ayurveda, Allopathy and Allied Health</span> practitioners driving integrative healthcare.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* What You'll Gain Section */}
<div className="mt-20 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
    What <span className="text-yellow-400">You’ll Gain</span>
  </h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {gains.map((gain, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="text-yellow-500 mb-4 flex justify-center">
          {gain.icon}
        </div>
        <h3 className="text-lg font-bold text-blue-900 mb-2">
          {gain.title}
        </h3>
        <p className="text-gray-600 text-sm">{gain.description}</p>
      </div>
    ))}
  </div>
</div>

      </div>
  </section>
  );
}
