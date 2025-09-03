import React from "react";
import {
  GraduationCap,
  Users,
  ScrollText,
  Laptop,
  Briefcase,
  Network,
} from "lucide-react";

const highlights = [
//   {
//     icon: <GraduationCap className="w-10 h-10 text-blue-900" />,
//     title: "CME-Accredited Sessions",
//     description:
//       "Earn valuable continuing medical education credits while learning from national faculty and IIT Hyderabad collaborators. Sessions are designed to provide both theoretical foundations and practical applications of PSA Medicine.",
//   },
  {
    icon: <Users className="w-10 h-10 text-blue-900" />,
    title: "PSA Training Pathways",
    description:
      "Specialized tracks for Freshers, Practitioners, and Entrepreneurs with tailored content to meet the needs of each group. Launch of comprehensive curriculum and certification programs.",
  },
  {
    icon: <ScrollText className="w-10 h-10 text-blue-900" />,
    title: "Policy Roundtable",
    description:
      "Explore legal and regulatory frameworks in integrative medicine with key stakeholders. Discussions on standardization, licensing, and practice guidelines for PSA Medicine practitioners.",
  },
  {
    icon: <Laptop className="w-10 h-10 text-blue-900" />,
    title: "Live Demonstrations",
    description:
      "Hands-on experiences with PSA Metrics, Digital Health tools, and Clinical Applications. Watch experts demonstrate integrative approaches to common and complex conditions.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-900" />,
    title: "Business Opportunities",
    description:
      "Learn about franchise models with Novadigm Clinics – SGP Hospitals. Special sessions on establishing, scaling, and managing integrative medicine practices.",
  },
  {
    icon: <Network className="w-10 h-10 text-blue-900" />,
    title: "Networking Events",
    description:
      "Connect with like-minded professionals, potential mentors, and business partners. Structured networking sessions designed to foster collaboration across medical traditions.",
  },
];

const ConferenceHighlights: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Conference Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-yellow-400 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceHighlights;
