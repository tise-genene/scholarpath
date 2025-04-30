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
      <section className="relative min-h-screen w-screen flex flex-col items-center justify-start px-4 sm:px-10 py-16 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 overflow-hidden">
        {/* Glowing Effects */}
        <div className="absolute top-[-5rem] left-[-5rem] w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-5rem] right-[-5rem] w-[500px] h-[500px] bg-pink-400 opacity-40 rounded-full blur-3xl z-0" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Text Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-4xl font-extrabold text-purple-800">
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
            <motion.p
              className="text-gray-600 text-base leading-relaxed"
              variants={itemVariants}
            ></motion.p>
            <motion.button
              className="bg-purple-700 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-800 transition-all duration-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(128,90,213,0.6)",
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

      {/* Extra Section: My Values */}
      <motion.section
        className="relative w-screen flex flex-col items-center justify-start px-4 sm:px-10 py-16 bg-white/90 backdrop-blur-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-blue-900 text-center mb-10"
          variants={itemVariants}
        >
          🌟 My Values
        </motion.h3>

        <motion.p
          className="text-gray-700 text-lg sm:text-xl text-center max-w-3xl mb-12"
          variants={itemVariants}
        >
          I believe in integrity, passion, and empowerment. Every student deserves an opportunity to shine and realize their dreams — and I'm here to make that journey a little easier, one step at a time.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {[
            {
              title: "Integrity",
              desc: "Honest and transparent",
            },
            {
              title: "Excellence",
              desc: "Dedicated to providing top-notch consulting tailored to your dreams.",
            },
            {
              title: "Empowerment",
              desc: "Helping you build the confidence to pursue opportunities worldwide.",
            },
          ].map(({ title, desc }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.04 }}
              variants={itemVariants}
            >
              <h4 className="text-2xl font-semibold text-purple-800 mb-2">{title}</h4>
              <p className="text-gray-600 text-base">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* New Section: Study Abroad Destinations */}
      <motion.section
        className="relative w-screen flex flex-col items-center justify-start px-4 sm:px-10 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-blue-800 dark:text-blue-400 text-center mb-10"
          variants={itemVariants}
        >
          🌍 Our Study Abroad Destinations
        </motion.h3>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl text-center max-w-3xl mb-12"
          variants={itemVariants}
        >
          We help students pursue their dreams in top international destinations.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl w-full">
          {[
            "USA",
            "Canada",
            "UK",
            "Germany",
            
          ].map((country) => (
            <motion.div
              key={country}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center font-semibold text-blue-700 dark:text-blue-300 hover:shadow-lg transition"
              variants={itemVariants}
            >
              {country}
            </motion.div>
          ))}
        </div>
      </motion.section>
      <section className="py-20 px-6 sm:px-10 bg-blue-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-800 mb-10">🎯 What I Offer</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Scholarship Matching", desc: "Personalized scholarship recommendations based on your profile." },
        { title: "1-on-1 Counseling", desc: "Dedicated sessions to plan your academic journey abroad." },
        { title: "Application Strategy", desc: "Support with writing essays, building resumes, and interview prep." },
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<motion.section
  className="py-20 px-6 sm:px-10 bg-gradient-to-r from-purple-50 to-blue-50"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-purple-800 mb-6">🚀 My Mission</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      My mission is to empower students globally by providing them access to life-changing education opportunities through scholarships, mentorship, and dedicated support.
    </p>
  </div>
</motion.section>

<section className="py-20 px-6 sm:px-10 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-purple-800 text-center mb-10">❓ Frequently Asked Questions</h2>
    <div className="space-y-6">
      {[
        {
          q: "Do I need perfect grades to win a scholarship?",
          a: "Not necessarily. Many scholarships consider leadership, community service, and motivation too.",
        },
        {
          q: "Can you help with non-English speaking countries?",
          a: "Yes! I assist with scholarships in Germany, China, France, and many more.",
        },
        {
          q: "How early should I start preparing?",
          a: "Ideally 6–12 months in advance. Early preparation boosts your success rate.",
        },
      ].map((faq, i) => (
        <div key={i} className="bg-purple-50 p-6 rounded-xl shadow">
          <h4 className="font-semibold text-purple-700 mb-2">{faq.q}</h4>
          <p className="text-gray-700">{faq.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<motion.section
  className="py-20 bg-gradient-to-r from-blue-100 to-purple-200 text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-purple-900 mb-4">🤝 Let’s Work Together</h2>
    <p className="text-lg text-gray-800 mb-8">
      Ready to start your scholarship journey? Let’s connect and make your dream come true!
    </p>
    <a
      href="/contact"
      className="inline-block bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow hover:bg-purple-800 transition duration-300"
    >
      Get in Touch
    </a>
  </div>
</motion.section>




      
    </>
  );
}
