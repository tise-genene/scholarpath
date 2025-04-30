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
      {/* Top Study Destinations Section */}
<section className="py-20 px-6 sm:px-10 bg-gradient-to-br from-purple-50 to-blue-50">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      🌍 Top Study Destinations
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { country: "USA", flag: "🇺🇸", description: "Known for Ivy League and fully funded opportunities." },
        { country: "UK", flag: "🇬🇧", description: "Home to Chevening, Commonwealth, and other major awards." },
        { country: "Germany", flag: "🇩🇪", description: "Free tuition and DAAD-funded options for all levels." },
        { country: "Canada", flag: "🇨🇦", description: "Generous government and university scholarships." },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">
            {item.flag} {item.country}
          </h3>
          <p className="text-gray-700 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* How We Help Section */}
<section className="py-20 px-6 sm:px-10 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      🎯 How We Help You Win Scholarships
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { title: "Profile Review", desc: "We evaluate your academic and extracurricular strengths." },
        { title: "Opportunity Match", desc: "We connect you with the right scholarships." },
        { title: "Essay Support", desc: "We review and refine your statements to make them stand out." },
        { title: "Submission Strategy", desc: "We guide you on how and when to apply for maximum success." },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-purple-100 rounded-xl shadow-md p-6 hover:shadow-xl transition hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-bold text-purple-800 mb-2">{item.title}</h3>
          <p className="text-gray-700 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* Success Stories Section */}
<section className="py-20 px-6 sm:px-10 bg-gradient-to-br from-pink-50 to-purple-50">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold text-pink-700 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      🌟 Success Stories
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          name: "Liya from Ethiopia",
          quote: "Thanks to the support I received, I secured a fully funded scholarship in Germany!",
          country: "Germany",
          image: "/students/liya.jpg", // Replace with your actual image path
        },
        {
          name: "Samuel from Kenya",
          quote: "This platform gave me the tools and confidence to apply abroad — now I’m studying in the UK.",
          country: "UK",
          image: "/students/samuel.jpg",
        },
        {
          name: "Fatima from Nigeria",
          quote: "I was guided every step of the way — from essays to interviews. I got a scholarship in Canada!",
          country: "Canada",
          image: "/students/fatima.jpg",
        },
      ].map((story, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition hover:scale-105"
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={story.image}
              alt={story.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-purple-400"
            />
            <div>
              <h4 className="font-semibold text-purple-800">{story.name}</h4>
              <p className="text-sm text-gray-500">{story.country}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"{story.quote}"</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </>
  );
}
