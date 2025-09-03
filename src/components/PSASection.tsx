import React from "react";
import { Info } from "lucide-react";
import PSA from "../assets/PSA.jpg"

const PSASection: React.FC = () => {
  const stats = [
    {
      number: "4 Cr+",
      title: "Patients with End-Stage Conditions",
      desc: "Millions of Indians suffering from conditions where conventional treatments alone have limited effectiveness",
    },
    {
      number: "8 Lakh+",
      title: "AYUSH Practitioners",
      desc: "A vast workforce of traditional medicine practitioners seeking integration with modern approaches",
    },
    {
      number: "70%",
      title: "Population Using Traditional Remedies",
      desc: "Majority of Indians use some form of traditional medicine alongside conventional treatments",
    },
    {
      number: "3.8%",
      title: "GDP Spent on Healthcare",
      desc: "Limited healthcare spending necessitates cost-effective approaches that maximize existing resources",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-20">
        
        {/* PSA Medicine Approach */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            The PSA Medicine Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div>
              <img
                src= {PSA}
                alt="PSA Medicine Approach"
                className="rounded-xl shadow-lg w-full h-full"
              />
              </div>
            
            {/* Right Content */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Poly Scientific Advanced (PSA) Medicine represents a paradigm shift in healthcare delivery. Rather than viewing different medical traditions as competing systems, PSA creates a scientific framework where multiple approaches complement each other.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At its core, PSA Medicine recognizes that{" "}
                <span className="text-yellow-600 font-semibold">
                  each medical tradition has unique strengths and limitations.
                </span>{" "}
                By integrating these approaches through standardized metrics and protocols, practitioners can deliver more comprehensive care that addresses both acute conditions and chronic imbalances.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                This conference will unveil the structured methodology behind PSA Medicine, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Standardized assessment protocols that incorporate both traditional diagnostics (pulse, tongue, dosha analysis) and modern biomarkers.</li>
                <li>Treatment algorithms that sequence interventions from multiple traditions.</li>
                <li>Digital health tools that facilitate integrated care delivery.</li>
                <li>Research frameworks for validating integrative approaches.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Why PSA Matters for India */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Why PSA Medicine Matters for India
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center">
            India faces unique healthcare challenges that require innovative solutions. With a rising burden of chronic diseases alongside unresolved infectious conditions, the limitations of single-system approaches have become increasingly apparent.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-12">
            {stats.map((item, index) => (
              <div key={index} className="space-y-3 border-b md:border-b-0 md:border-r last:border-none border-gray-300 pb-6 md:pb-0 md:pr-6">
                <div className="text-blue-900 text-4xl font-extrabold">{item.number}</div>
                <h3 className="text-xl font-semibold text-yellow-600">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
            PSA Medicine addresses these challenges by creating structured pathways for integration that preserve the integrity of each tradition while enhancing overall effectiveness. The approach aligns with national health policy priorities, including the National AYUSH Mission and Digital Health Mission.
          </p>

          {/* Highlighted Box */}
          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold">PSA Medicine supports key national priorities:</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-100">
              <li>Ayushman Bharat’s goal of comprehensive primary care</li>
              <li>National Digital Health Mission’s vision for connected healthcare</li>
              <li>Make in India initiative through indigenous healthcare solutions</li>
              <li>One Health approach recognizing interconnections between human, animal, and environmental health</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PSASection;
