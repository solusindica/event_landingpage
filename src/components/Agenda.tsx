import React from 'react';
import { Clock, Coffee, Mic, Users, Star, Activity, Briefcase } from 'lucide-react';
import agenda from "../assets/agenda.jpeg"; // <-- import your background image here
import brochure from '../assets/brochure.pdf';

export default function Agenda() {
  const schedule = [
    {
      time: "9:00 AM – 10:00 AM",
      title: "Inaugural Session",
      description: "Welcome address, lighting of lamp, and keynote by Chief Guest",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      type: "keynote",
    },
    {
      time: "10:15 AM – 11:30 AM",
      title: "Plenary: The Science of Integration",
      description: "Foundational principles and evidence base for PSA Medicine",
      icon: <Mic className="w-6 h-6 text-blue-900" />,
      type: "panel",
    },
    {
      time: "11:45 AM – 1:00 PM",
      title: "Track-Specific Sessions",
      description: "Parallel sessions for graduates, practitioners, and entrepreneurs",
      icon: <Users className="w-6 h-6 text-blue-900" />,
      type: "panel",
    },
    {
      time: "2:00 PM – 3:30 PM",
      title: "Live Demonstrations",
      description: "PSA Metrics, pulse diagnosis integration with biomarkers, digital health tools",
      icon: <Activity className="w-6 h-6 text-blue-900" />,
      type: "panel",
    },
    {
      time: "3:45 PM – 5:00 PM",
      title: "Policy Roundtable",
      description: "Legal and regulatory frameworks for integrative practice",
      icon: <Briefcase className="w-6 h-6 text-blue-900" />,
      type: "panel",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-yellow-50 border-yellow-400 text-yellow-600";
      case "panel":
        return "bg-blue-50 border-blue-900 text-blue-900";
      case "break":
      case "lunch":
        return "bg-green-50 border-green-400 text-green-700";
      default:
        return "bg-gray-50 border-gray-400 text-gray-700";
    }
  };

  return (
    <section
      id="agenda"
      className="relative py-20 bg-gray-100"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${agenda})` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Event Agenda
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive program designed to maximize learning, networking, and professional growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className={`p-3 rounded-full border ${getTypeColor(item.type)}`}>
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="font-medium text-yellow-400">{item.time}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            * Schedule subject to minor adjustments. All times are local.
          </p>
         <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = brochure;
            link.download = "PSA_Conference_Schedule.pdf"; // filename to save as
            link.click();
          }}
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition-colors"
        >
            Download Detailed Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
