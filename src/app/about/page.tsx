"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Dynamic imports for non-critical components
const DynamicFaqItem = ({ faq, index }: { faq: { q: string; a: string }, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2 text-lg">{faq.q}</h4>
    <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
  </motion.div>
);

export default function AboutMe() {
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-white dark:bg-gray-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl"
        >
          {/* Text Section */}
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              👋 About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            >
              <motion.p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                From Ethiopia to Europe — Helping You Win Scholarships & Study Abroad with Confidence
              </motion.p>

              Hi, I&apos;m <strong className="text-purple-800 dark:text-purple-300 font-semibold">Tegegn</strong> — a four-time international scholarship winner, youth advocate, and founder of this platform dedicated to helping Ethiopian and African students unlock global education opportunities.

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4"
              >
                Over the years, I&apos;ve successfully secured four competitive scholarships:
              </motion.p>
              <motion.div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-2xl font-bold italic">🌟</span>
                  <span className="font-bold italic">🇮🇹 Invest Your Talent in Italy (IYT) – for my MSc in Economics and Data Analysis in Verona, Italy</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-2xl font-bold italic">🎓</span>
                  <span className="font-bold italic">🇩🇪 Double Degree Program – in International Economic Policy with the University of Würzburg, Germany</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-2xl font-bold italic">💡</span>
                  <span className="font-bold italic">🇪🇹 Konrad Adenauer Foundation – in-country scholarship for my first master&apos;s in Ethiopia</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-2xl font-bold italic">🌐</span>
                  <span className="font-bold italic">African Economic Research Consortium (AERC) – Collaborative Masters Programme (CMAP) in Economics scholarship for advanced training in economic policy</span>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4"
              >
                {isExpanded && (
                  <>
                    I know firsthand what it takes to navigate the overwhelming world of applications, deadlines, motivation letters, interviews, and visa processes. That&apos;s why I created this website — to make your journey easier, faster, and more successful.

                    Why I&apos;m the Right Person to Guide You:
                    <motion.div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center ml-8"
                      >
                        <span className="mr-2">✅</span>
                        <span className="font-bold">Proven Experience</span>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="ml-8 italic text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                      >
                        I&apos;ve gone through the process multiple times and won. That means I don&apos;t just give advice — I live it.
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center ml-8"
                      >
                        <span className="mr-2">✅</span>
                        <span className="font-bold">Pan-African Perspective</span>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="ml-8 italic text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                      >
                        Whether you&apos;re applying for programs in Europe, Asia, or Africa, I understand what works and what doesn&apos;t.
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center ml-8"
                      >
                        <span className="mr-2">✅</span>
                        <span className="font-bold">Passion-Driven Mission</span>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="ml-8 italic text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                      >
                        As a youth mentor and consultant, I&apos;m deeply committed to empowering others to pursue life-changing education abroad.
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center ml-8"
                      >
                        <span className="mr-2">✅</span>
                        <span className="font-bold">Strategic Support</span>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="ml-8 italic text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                      >
                        From finding the right scholarships to writing winning CVs and motivation letters, I offer practical, no-fluff guidance that gets results.
                      </motion.p>
                    </motion.div>

                    What You&apos;ll Find Here:
                    <motion.div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center ml-6"
                      >
                        <span className="mr-2">🎓</span>
                        <span className="font-bold">Step-by-step scholarship application tutorials</span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex items-center ml-6"
                      >
                        <span className="mr-2">✍</span>
                        <span className="font-bold">Templates and strategies for CVs and motivation letters</span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="flex items-center ml-6"
                      >
                        <span className="mr-2">🎥</span>
                        <span className="font-bold">Video walkthroughs and webinars</span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex items-center ml-6"
                      >
                        <span className="mr-2">📢</span>
                        <span className="font-bold">The latest updates on international opportunities</span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center ml-6"
                      >
                        <span className="mr-2">🧭</span>
                        <span className="font-bold">Personal mentorship and expert tips</span>
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </motion.div>
              <motion.button
                onClick={toggleExpand}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-lg font-medium cursor-pointer"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </motion.button>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center relative group"
          >
            <div className="relative w-full max-w-sm h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/tegegn.jpg"
                alt="Tegegn - Scholarship Consultant"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* My Values */}
      <section className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              My Values
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              I believe in integrity, passion, and empowerment. Every student deserves an opportunity to shine and realize their dreams — and I'm here to make that journey a little easier, one step at a time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "Honest and transparent in all my dealings.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                desc: "Dedicated to providing top-notch consulting tailored to your dreams.",
                icon: "✨"
              },
              {
                title: "Empowerment",
                desc: "Helping you build the confidence to pursue opportunities worldwide.",
                icon: "🚀"
              },
            ].map(({ title, desc, icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Destinations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              Study Abroad Destinations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              We help students pursue their dreams in top international education destinations worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "United States", code: "US", emoji: "🇺🇸" },
              { name: "Canada", code: "CA", emoji: "🇨🇦" },
              { name: "United Kingdom", code: "GB", emoji: "🇬🇧" },
              { name: "Germany", code: "DE", emoji: "🇩🇪" },
              { name: "Australia", code: "AU", emoji: "🇦🇺" },
              { name: "Japan", code: "JP", emoji: "🇯🇵" },
              { name: "France", code: "FR", emoji: "🇫🇷" },
              { name: "Netherlands", code: "NL", emoji: "🇳🇱" },
            ].map((country, i) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {country.emoji}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {country.name}
                </h4>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  {country.code}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* What I Offer */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              What I Offer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive services designed to guide you through every step of your academic journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { 
                title: "Scholarship Matching", 
                desc: "Personalized scholarship recommendations based on your profile, academic background, and career goals.",
                icon: "🎯"
              },
              { 
                title: "1-on-1 Counseling", 
                desc: "Dedicated sessions to plan your academic journey abroad with expert guidance at every step.",
                icon: "💡"
              },
              { 
                title: "Application Strategy", 
                desc: "Comprehensive support with writing compelling essays, building strong resumes, and interview preparation.",
                icon: "📝"
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 dark:bg-purple-400/10 rounded-full -mr-10 -mt-10 transition-all duration-700 group-hover:scale-150" />
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                <div className="mt-6">
                  <a 
                    href="/services" 
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-400/10 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6">
                My Vision & Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Empowering the next generation of global leaders through education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
                My mission is to break down barriers to education by providing students worldwide with access to life-changing scholarship opportunities, personalized mentorship, and the tools they need to succeed in today's competitive academic landscape.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Learn more about my journey
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Find answers to common questions about our services and the scholarship application process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Do I need perfect grades to win a scholarship?",
                a: "Not necessarily. While academic excellence helps, many scholarships also value leadership, community service, personal essays, and unique experiences. We help highlight your strengths beyond just grades.",
              },
              {
                q: "Can you help with non-English speaking countries?",
                a: "Absolutely! We assist with scholarships in Germany, France, China, Japan, and many other countries. We can also guide you through language requirements and preparation.",
              },
              {
                q: "How early should I start preparing for scholarship applications?",
                a: "Ideally, start 12-18 months before your intended study period. This gives you time to research, prepare documents, and meet deadlines. However, we can help with last-minute applications too!",
              },
              {
                q: "What makes your consulting service different?",
                a: "We offer personalized 1:1 support, have a proven track record, and provide end-to-end guidance. Our approach combines strategic planning with attention to detail in every application.",
              },
              {
                q: "Do you guarantee scholarship success?",
                a: "While we can't guarantee scholarships (as decisions are made by institutions), we significantly improve your chances through expert guidance, strong applications, and strategic planning.",
              },
            ].map((faq, i) => (
              <DynamicFaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to transform your future?
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's work together to find and secure the perfect scholarship opportunities tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-300"
              >
                Learn More
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-100/80 dark:text-blue-200/80">
              Schedule a free 30-minute consultation to discuss your goals
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-purple-400/20 rounded-full -translate-x-1/2 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      </section>
      
    </>
  );
}
