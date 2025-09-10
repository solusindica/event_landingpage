import React from "react";
import brochure from '../assets/brochure.pdf';

const OpportunitiesAndRegistration: React.FC = () => {
  return (
    <section id="opportunities-registration" className="bg-gradient-to-br from-yellow-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">

        {/* Business & Career Opportunities */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-3">Business and Career Opportunities</h2>
          <p className="text-gray-700 mb-10">
            The conference showcases numerous pathways for professional growth and business development in the
            integrative healthcare sector.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Franchise column */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Novadigm Clinics – SGP Hospitals Franchise
              </h3>
              <p className="text-gray-700 mb-6">
                One of the most exciting opportunities presented at the conference is the chance to become part of the
                Novadigm Clinics network under SGP Hospitals. This established franchise model offers:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Turnkey clinic setup</span> with standardized PSA Medicine protocols
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Comprehensive training</span> for practitioners and support staff
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Digital health infrastructure</span> with integrated EMR and diagnostic tools
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Marketing and branding support</span> to build patient awareness
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Supply chain access</span> for specialized integrative medicine products
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-blue-900">Ongoing clinical support</span> from expert practitioners
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-gray-700">
                Conference attendees will have exclusive access to special franchise terms and priority location
                selection. Representatives will be available throughout the event to discuss personalized franchise
                options.
              </p>
            </div>

            {/* Additional opportunities column */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Additional Opportunities</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Employment positions in existing integrative facilities
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Research collaborations with academic institutions
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Digital health startups in the integrative space
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Product development partnerships
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  Training and education ventures
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Registration Information */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-10">Registration Information</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fees card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-400">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-900 font-bold mb-4">
                ₹
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Registration Fees</h3>
              <ul className="space-y-3 text-gray-700">
                {/* <li>
                  <span className="font-semibold text-blue-900">Early Bird (Until Sept 9, 2025):</span> ₹1000
                </li> */}
                <li>
                  <span className="font-semibold text-blue-900">Regular (Until Sept 18, 2025):</span> ₹1,000
                </li>
                <li>
                  <span className="font-semibold text-blue-900">Late/Onsite:</span> ₹1,500
                </li>
                <li>
                  <span className="font-semibold text-blue-900">Students (Valid ID required):</span> 50% off on all the above
                </li>
              </ul>
            </div>

            {/* What's included card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-400">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-blue-900 font-bold mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">What’s Included</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Access to all conference sessions</li>
                <li>CME credits certification</li>
                <li>Comprehensive delegate kit</li>
                <li>Lunch and Refreshments</li>
                <li>Certificate of attendance</li>
              </ul>
            </div>

            {/* How to register card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-400">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-900 font-bold mb-4">
                i
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">How to Register</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>Complete the online registration form</li>
                <li>Receive confirmation email with details</li>
                <li>Present confirmation at registration desk</li>
              </ol>

              <div className="mt-6">
                <p className="font-semibold text-blue-900">Questions? Contact:</p>
                <p className="text-gray-700 break-words"><a href="mailto:ipsaevent@sgprs.com">ipsaevent@sgprs.com</a></p>
              </div>
            </div>
          </div>

          {/* Coupon + Actions */}
          <div className="mt-10 bg-blue-900 text-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h4 className="text-2xl font-semibold mb-2">
              Special Coupon Code
            </h4>
            <p className="mb-6">
              Use code  when booking to avail discounted rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 font-semibold text-blue-900 hover:bg-yellow-500 transition"
              >
                Register Now
              </a>
              <a
                href={brochure} download="PSA_Medicine_Conference_Brochure.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpportunitiesAndRegistration;
