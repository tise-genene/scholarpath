"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCalendarCheck, FaComments } from "react-icons/fa";

export default function CounselingPage() {
  return (
    <section className="min-h-screen w-full py-16 px-4 md:px-10 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 opacity-30 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 opacity-40 rounded-full blur-3xl z-0" />

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
          🎯 Scholarship Counseling
        </motion.h2>

        <p className="text-gray-700 text-lg text-center mb-10 max-w-3xl mx-auto">
          Get personalized one-on-one guidance to help you identify the best scholarships, prepare winning applications, and achieve your dreams abroad!
        </p>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="flex flex-col items-center">
            <FaUserGraduate className="text-purple-600 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700">Personalized</h4>
            <p className="text-gray-800">Tailored plans for your goals</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCalendarCheck className="text-purple-600 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700">Flexible Booking</h4>
            <p className="text-gray-800">Choose your preferred time</p>
          </div>
          <div className="flex flex-col items-center">
            <FaComments className="text-purple-600 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700">Expert Advice</h4>
            <p className="text-gray-800">From experienced consultants</p>
          </div>
        </div>

        {/* Booking Button with Link */}
        <div className="text-center">
          <Link href="/counseling/booking">
            <motion.button
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 18px rgba(147,51,234,0.5)",
              }}
            >
              Book a Session
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
