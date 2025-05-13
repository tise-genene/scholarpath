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
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-16 px-6">
      <motion.div
        className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Decorative Blurs */}
        <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-purple-300 opacity-30 rounded-full blur-2xl"></div>

        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-800 dark:text-blue-200 mb-3"
          variants={itemVariants}
        >
          Get in <span className="text-purple-600 dark:text-purple-300">Touch with me</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base"
          variants={itemVariants}
        >
          We'd love to hear from you! Send us a message below.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition duration-300 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Success Message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="mt-6 bg-green-100 text-green-800 font-medium rounded-xl px-6 py-4 text-center text-sm shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              🎉 Your message has been sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
