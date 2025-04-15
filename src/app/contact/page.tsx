"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide after 3 sec
  };

  return (
    <section className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <motion.div
        className="w-full max-w-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl font-bold text-center text-blue-800 mb-2"
          variants={itemVariants}
        >
          Contact <span className="text-blue-600">Me</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-4 text-sm"
          variants={itemVariants}
        >
          Have questions? Let’s get in touch.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm rounded-xl p-5 space-y-4"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>

        {/* ✅ Success message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="mt-4 bg-green-100 text-green-800 rounded-md px-4 py-2 text-sm text-center shadow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              🎉 Message Sent Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
