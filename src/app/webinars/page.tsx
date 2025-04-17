"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaVideo } from "react-icons/fa";

export default function WebinarPage() {
  return (
    <section className="min-h-screen w-full py-16 px-4 md:px-10 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 relative overflow-hidden">
      {/* Soft Glows */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 opacity-30 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 opacity-40 rounded-full blur-3xl z-0" />

      {/* Webinar Card */}
      <motion.div
        className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-purple-800 text-center mb-6"
          whileHover={{ scale: 1.02 }}
        >
          🎓 Live Scholarship Webinar
        </motion.h2>

        <p className="text-gray-700 text-lg text-center mb-10 max-w-3xl mx-auto">
          Unlock your scholarship success with tips on applications, interviews, and discovering the best international opportunities!
        </p>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="text-purple-600 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700">Date</h4>
            <p className="text-gray-800">April 25, 2025</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-purple-600 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700">Time</h4>
            <p className="text-gray-800">4:00 PM (GMT+3)</p>
          </div>
          <div className="flex flex-col items-center">
            <FaVideo className="text-purple-600 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700">Platform</h4>
            <p className="text-gray-800">Zoom</p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <motion.button
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(147,51,234,0.5)",
            }}
          >
            Reserve My Spot
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
