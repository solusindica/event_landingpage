import React from "react";

export default function VideosSection() {
  return (
    <section id="videos" className= "from-yellow-400 to-blue-50 text-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          About Course
        </h2>

        {/* Grid for Videos */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MhguNfKV-Vs?controls=1&autoplay=0"
              title="Course Highlight 1"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Rijc89N1zOE?controls=1&autoplay=0"
              title="Conference Highlight 2"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
