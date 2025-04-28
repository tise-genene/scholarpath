"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCalendarCheck, FaComments, FaMoneyCheckAlt, FaFileAlt, FaGlobeEurope, FaLaptopCode, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

export default function CounselingPage() {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-start px-4 sm:px-10 py-10 bg-white relative overflow-hidden">
      {/* Glowing Effects */}
      <div className="absolute top-[-5rem] left-[-5rem] w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-[500px] h-[500px] bg-pink-400 opacity-40 rounded-full blur-3xl z-0" />

      {/* Counseling Section */}
      <motion.div
        className="w-full flex flex-col justify-center items-center bg-white/80 backdrop-blur-md rounded-none shadow-none px-6 md:px-24 py-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-800 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          🎯 Scholarship Counseling
        </motion.h2>

        <p className="text-gray-700 text-xl sm:text-2xl text-center mb-16 max-w-5xl">
          Get personalized one-on-one guidance to identify the best scholarships, craft winning applications, and level up your academic journey abroad!
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-2 sm:px-8 lg:px-20 mb-16">
          {[ 
            {
              Icon: FaUserGraduate,
              title: "Personalized",
              desc: "Tailored plans for your academic goals.",
            },
            {
              Icon: FaCalendarCheck,
              title: "Flexible Booking",
              desc: "You pick the time, we make it work.",
            },
            {
              Icon: FaComments,
              title: "Expert Advice",
              desc: "Talk with experienced scholarship mentors.",
            },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="w-full sm:w-80 bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="text-purple-600 text-5xl mb-4" />
              <h4 className="text-2xl font-semibold text-purple-800 mb-2">{title}</h4>
              <p className="text-gray-600 text-lg">{desc}</p>
            </motion.div>
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
        className="w-full mt-20 flex flex-col justify-center items-center bg-white/90 backdrop-blur-md px-6 md:px-24 py-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-blue-900 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          🌍 Our Student Services
        </motion.h3>

        <p className="text-gray-700 text-lg sm:text-xl text-center mb-12 max-w-4xl">
          We provide a complete suite of services to support your study abroad journey — from application help to international fee payments. Let’s make the process smoother together!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full px-4 sm:px-10 lg:px-24">
          {[ 
            {
              Icon: FaFileAlt,
              title: "CV & Motivation Letter Editing",
              desc: "Polish your documents with expert-level editing for impact and clarity.",
            },
            {
              Icon: FaComments,
              title: "Interview Coaching",
              desc: "Practice and get feedback for scholarship or university interviews.",
            },
            {
              Icon: FaMoneyCheckAlt,
              title: "International Payments",
              desc: "Easily pay application, tuition, or visa fees through trusted platforms.",
            },
            {
              Icon: FaGlobeEurope,
              title: "Visa & Application Support",
              desc: "Get help with student visa processes and application requirements.",
            },
            {
              Icon: FaUserGraduate,
              title: "Scholarship Matching",
              desc: "We help match you with scholarships based on your profile.",
            },
            {
              Icon: FaCalendarCheck,
              title: "Priority Booking",
              desc: "Fast-track services for urgent applications and deadlines.",
            },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="w-full sm:w-80 bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.04 }}
            >
              <Icon className="text-purple-600 text-5xl mb-4" />
              <h4 className="text-2xl font-semibold text-purple-800 mb-2">{title}</h4>
              <p className="text-gray-600 text-base">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="w-full mt-20 bg-gradient-to-b from-purple-100 to-white px-6 md:px-24 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-purple-800 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          🗣️ What Our Students Say
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-12">
          {[ 
            {
              name: "Sarah M.",
              quote: "The scholarship coaching was amazing! I never knew how to approach applications, but now I feel confident I can win one.",
              location: "Addis Ababa, Ethiopia",
            },
            {
              name: "Lukas T.",
              quote: "I got personalized advice that really helped me stand out in my scholarship applications. The interview coaching was top-notch.",
              location: "London, UK",
            },
            {
              name: "Anya K.",
              quote: "I applied for 5 scholarships and got accepted to 3 of them. The tips I received were incredibly helpful in narrowing down my choices.",
              location: "Toronto, Canada",
            },
          ].map((testimonial, i) => (
            <div key={i} className="w-80 sm:w-96 bg-white shadow-lg p-8 rounded-lg text-center">
              <p className="text-xl font-medium text-gray-600 mb-4">{testimonial.quote}</p>
              <p className="text-lg font-bold text-purple-700">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Additional Resources Section */}
      <motion.div
        className="w-full mt-20 bg-gray-50 px-6 md:px-24 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-blue-900 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          📚 Additional Resources
        </motion.h3>

        <p className="text-gray-700 text-lg sm:text-xl text-center mb-8 max-w-4xl">
          We’ve curated some of the best resources to help you with scholarship hunting, preparing application documents, and more!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[ 
            {
              title: "Scholarship Search Engines",
              link: "https://www.scholarships.com",
              description: "Discover thousands of scholarships worldwide with this helpful search engine.",
            },
            {
              title: "Free Online Courses",
              link: "https://www.edx.org",
              description: "Enhance your skills with free courses from top universities.",
            },
            {
              title: "Visa Requirements by Country",
              link: "https://www.visatracker.com",
              description: "Check the latest visa requirements for international students.",
            },
          ].map(({ title, link, description }, i) => (
            <div key={i} className="flex flex-col items-start p-8 bg-white shadow-md rounded-lg">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-purple-700 hover:text-purple-900 mb-4">
                {title}
              </a>
              <p className="text-gray-600 text-base">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
