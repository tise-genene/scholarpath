"use client";

export const metadata = {
  title: 'Home | ScholarPath',
  description: 'Welcome to ScholarPath! Explore scholarships, counseling, and resources to achieve your academic dreams.',
};
import { useState } from "react";
import Image from "next/image";

const FEATURES = [
  {
    title: "Personalized Matches",
    description: "Get scholarship suggestions tailored to your profile.",
  },
  {
    title: "1:1 Counseling",
    description: "Schedule consultations with our experts for guidance.",
  },
  {
    title: "Webinars & Resources",
    description: "Join events and access tools to boost your chances.",
  },
  {
    title: "Application Tracking",
    description: "Keep tabs on all your scholarship applications in one place.",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFeatures = FEATURES.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bac.avif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 py-10 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text section */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Your Pathway for <span className="text-blue-600">International Opportunities</span>
            </h1>
            <p className="text-lg text-gray-700">
              Discover and apply to scholarships that match your dreams and goals.
            </p>

            {/* Search Box */}
            <input
              type="text"
              placeholder="Search features..."
              className="w-full max-w-md px-4 py-2 text-sm rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
               />


            {/* Conditional Results */}
            {searchTerm && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredFeatures.length > 0 ? (
                  filteredFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                    >
                      <h3 className="text-xl font-semibold text-blue-600">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-full">
                    No matching features found.
                  </p>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Explore Scholarship
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/tegegn.jpg"
              alt="Scholarship illustration"
              width={400}
              height={400}
              className="w-full max-w-md object-contain opacity-80"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
