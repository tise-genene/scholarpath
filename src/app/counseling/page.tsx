"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { features, services, testimonials, resources } from "@/data/counseling";
import { FeatureCard, ServiceCard, TestimonialCard, ResourceCard } from "@/components/CounselingCards";

export default function CounselingPage() {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-start px-4 sm:px-10 py-10 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Counseling Section */}
      <motion.div
        className="w-full flex flex-col justify-center items-center bg-white dark:bg-gray-900/80 backdrop-blur-md rounded-none shadow-none px-6 md:px-24 py-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold text-purple-800 dark:text-purple-300 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          Scholarship Counseling
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-200 text-xl sm:text-2xl text-center mb-16 max-w-3xl mx-auto">
          Get personalized one-on-one guidance to identify the best scholarships, craft winning applications, and level up your academic journey abroad!
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-6 lg:px-20 mb-16">
          {features.map((feature, i) => (
  <FeatureCard key={i} {...feature} />
))} 
        </div>

        <div>
          <Link href="/counseling/booking">
            <motion.button
              className="bg-purple-700 text-white px-10 py-5 text-xl rounded-full font-bold shadow-lg hover:bg-purple-800 transition-all duration-300"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(128, 90, 213, 0.6)",
              }}
            >
              Book a Free Session 🚀
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="w-full mt-20 flex flex-col justify-center items-center bg-white dark:bg-gray-900/90 backdrop-blur-md px-6 md:px-24 py-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-blue-900 dark:text-blue-200 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          Our Student Services
        </motion.h2>

        <p className="text-gray-700 dark:text-gray-200 text-lg sm:text-xl text-center mb-12 max-w-4xl">
          We provide a complete suite of services to support your study abroad journey — from application help to international fee payments. Let’s make the process smoother together!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full px-4 sm:px-10 lg:px-24">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="w-full mt-20 bg-white dark:bg-gray-900 px-6 md:px-24 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-purple-800 dark:text-purple-300 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          What Our Students Say
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-12">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </motion.div>

      {/* Additional Resources Section */}
      <motion.div
        className="w-full mt-20 bg-gray-50 dark:bg-gray-900 px-6 md:px-24 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-blue-900 dark:text-blue-200 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          Additional Resources
        </motion.h2>

        <p className="text-gray-700 dark:text-gray-200 text-lg sm:text-xl text-center mb-8 max-w-4xl">
          We’ve curated some of the best resources to help you with scholarship hunting, preparing application documents, and more!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {resources.map((resource, i) => (
  <ResourceCard key={i} {...resource} />
))} 
</div>
</motion.div>
</section>
  );
}
