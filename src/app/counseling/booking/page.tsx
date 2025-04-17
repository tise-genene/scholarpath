"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 px-6 py-20 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 opacity-40 rounded-full blur-2xl z-0" />

      <motion.div
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-xl w-full z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-800">
          📅 Book a Counseling Session
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <textarea
            placeholder="Tell us about your goals or concerns"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={4}
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(147,51,234,0.5)",
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full shadow-lg transition duration-300"
          >
            Book Now
          </motion.button>
        </form>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-green-600 text-center font-semibold"
          >
            ✅ Your request has been submitted!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
