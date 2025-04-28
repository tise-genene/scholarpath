"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutMe() {
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 py-20 md:py-32"
        style={{ backgroundImage: "url('/bac.avif')" }} // Replace with your image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Text Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-4xl font-extrabold text-gray-800">
              About <span className="text-blue-600">Me</span>
            </h2>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Hello! I'm <strong>Tegegn</strong>, a passionate scholarship consultant and
              tech enthusiast. I help students unlock international opportunities
              through expert guidance, personalized support, and modern tools.
            </motion.p>
            <motion.p className="text-gray-600" variants={itemVariants}>
              With years of experience in global education consulting, I believe in
              empowering young minds with the resources they need to succeed. Let’s
              build your pathway to global excellence — one scholarship at a time.
            </motion.p>
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px rgba(59,130,246,0.8)",
              }}
              variants={itemVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/tegegn.jpg"
              alt="About Me"
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
