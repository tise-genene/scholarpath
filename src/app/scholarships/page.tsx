"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Scholarship {
  title: string;
  description: string;
  deadline: string;
  amount: number;
  country: string;
  eligibility: string;
  applyLink: string;
  level: string;
  isPublished: boolean;
}

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);

  const sampleScholarship: Scholarship = {
    title: "Test Scholarship",
    description: "This is a test scholarship for demonstration purposes.",
    deadline: "2025-12-31",
    amount: 5000,
    country: "USA",
    eligibility: "Open to all undergraduate students.",
    applyLink: "https://example.com/apply",
    level: "Undergraduate",
    isPublished: true,
  };

  useEffect(() => {
    setScholarships([sampleScholarship]);
  }, []);

  return (
    <>
      {/* Scholarships List */}
      <section className="relative py-20 px-6 sm:px-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        <div className="absolute top-[-5rem] left-[-5rem] w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-5rem] right-[-5rem] w-[500px] h-[500px] bg-pink-300 opacity-40 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title only animated */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-purple-800 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🎓 Available Scholarships
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">{scholarship.title}</h3>
                  <p className="text-gray-700 mb-4">{scholarship.description}</p>

                  <ul className="text-gray-600 space-y-2">
                    <li><strong>Deadline:</strong> {scholarship.deadline}</li>
                    <li><strong>Amount:</strong> ${scholarship.amount}</li>
                    <li><strong>Country:</strong> {scholarship.country}</li>
                    <li><strong>Eligibility:</strong> {scholarship.eligibility}</li>
                    <li><strong>Level:</strong> {scholarship.level}</li>
                  </ul>
                </div>

                <a
                  href={scholarship.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-purple-700 text-white text-center py-3 px-6 rounded-full font-bold hover:bg-purple-800 transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Apply Through Us Section */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title only animated */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why To Apply Through Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-purple-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:scale-105">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Expert Guidance</h3>
              <p className="text-gray-700">
                Our experienced team will help you choose the right scholarships and guide you every step of the way.
              </p>
            </div>

            <div className="bg-blue-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Personalized Support</h3>
              <p className="text-gray-700">
                We offer personalized counseling, essay reviews, and application strategy tailored just for you.
              </p>
            </div>

            <div className="bg-pink-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:scale-105">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Global Opportunities</h3>
              <p className="text-gray-700">
                Unlock opportunities across the world and increase your chances of studying at top universities abroad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
