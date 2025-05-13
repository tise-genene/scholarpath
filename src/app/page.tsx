'use client';

import './globals.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  BookOpenCheck,
  Video,
  Banknote,
} from 'lucide-react';

const FEATURES = [
  {
    title: 'Personalized Matches',
    description: 'Get scholarship suggestions tailored to your profile.',
  },
  {
    title: '1:1 Counseling',
    description: 'Schedule consultations with our experts for guidance.',
  },
  {
    title: 'Webinars & Resources',
    description: 'Join events and access tools to boost your chances.',
  },
  {
    title: 'Application Tracking',
    description: 'Keep tabs on all your scholarship applications in one place.',
  },
];

export default function Page() {


  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900 dark:bg-gray-900">

      {/* Hero Section */}
      <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-950 dark:to-gray-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="relative z-10 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 mb-8 shadow-lg"
              >
                <Search className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Your Pathway to <span className="text-purple-600 dark:text-purple-400">Global Education</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                Discover your perfect scholarship match and get expert guidance to achieve your academic dreams
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a 
                  href="/scholarships" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  Find Scholarships
                </a>
                <a 
                  href="/counseling/booking" 
                  className="px-8 py-4 bg-white dark:bg-gray-900 dark:bg-gray-800 border-2 border-purple-600 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-gray-700 font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-300 text-center"
                >
                  Book Consultation
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-400">Join our community of</p>
                  <p className="font-semibold text-gray-900 dark:text-white">5,000+ successful students</p>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Feature Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700/50"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Why Choose Us?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: '🎯',
                    title: 'Personalized Guidance',
                    description: 'Tailored scholarship matches based on your unique profile and goals.'
                  },
                  {
                    icon: '🌍',
                    title: 'Global Opportunities',
                    description: 'Access to scholarships from top universities worldwide.'
                  },
                  {
                    icon: '🏆',
                    title: 'Proven Success',
                    description: 'Helped 500+ students secure their dream scholarships.'
                  },
                  {
                    icon: '🤝',
                    title: 'Dedicated Support',
                    description: 'One-on-one counseling and application assistance.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 dark:bg-gray-700/30 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-gray-700/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <p className="text-center text-gray-600 dark:text-gray-400 dark:text-gray-400 mb-4">Connect with us</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://t.me/Tegegnpathway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-900/50 transition-colors text-purple-700 dark:text-purple-300 dark:text-purple-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.4037 8.4L15.331 15.9C15.166 16.9 14.6995 17.1 13.8407 16.7L11.1232 14.8L9.8 16.1C9.8 16.1 9.8 16.2 9.7 16.2C9.6 16.2 9.6 16.2 9.6 16.1L9.8 13.4L14.5 9.3C14.7 9.1 14.5 9 14.2 9.2L7.9 12.5L5.3 11.7C4.4 11.4 4.3 10.9 5.2 10.5L15.7 5.8C16.4 5.5 17 5.8 16.7 6.7L13.7 15.3L10.8 12.5C10.6 12.3 10.8 12.2 11 12.4L15.2 16.3C15.3 16.4 15.4 16.5 15.5 16.6C15.5 16.6 15.5 16.7 15.5 16.7C15.5 16.8 15.5 16.9 15.4 17C15.3 17.1 15.2 17.1 15.1 17.1L12 16.2L9.3 18C9.3 18 9.2 18.1 9.1 18.1C9 18.1 9 18 9 17.9L9.1 17.7L10.4 14.9L10.5 14.8L10.5 14.8L10.5 14.8L10.5 14.8Z" />
                    </svg>
                    Telegram
                  </a>
                  <a
                    href="https://www.youtube.com/@TegegnPathways"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 transition-colors text-red-700 dark:text-red-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.8 12.6L10.4 15.4C10.2 15.5 10 15.4 10 15.1V8.9C10 8.6 10.2 8.5 10.4 8.6L15.7 11.7C15.9 11.8 15.9 12.1 15.8 12.3V12.6H15.8Z" />
                    </svg>
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHAT I OFFER --- */}
      <section className="py-20 bg-white dark:bg-gray-900 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 dark:text-purple-300 mb-10">What I Offer</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Scholarship Listings",
              desc: "Curated scholarships for all levels and countries.",
              href: "/scholarships",
              color: "bg-purple-50 dark:bg-purple-900/30",
              iconColor: "text-purple-600",
              renderIcon: () => <Search className="w-12 h-12" />,
            },
            {
              icon: BookOpenCheck,
              title: "Counseling",
              desc: "1:1 sessions, CV/motivation letter review, interview prep.",
              href: "/counseling/booking",
              color: "bg-pink-50 dark:bg-pink-900/20",
              iconColor: "text-pink-600",
              renderIcon: () => <BookOpenCheck className="w-12 h-12" />,
            },
            {
              icon: Video,
              title: "Webinars & Trainings",
              desc: "Live and recorded sessions to boost your application.",
              href: "/webinars",
              color: "bg-blue-50 dark:bg-blue-900/20",
              iconColor: "text-indigo-600",
              renderIcon: () => <Video className="w-12 h-12" />,
            },
            {
              icon: Banknote,
              title: "International Payments",
              desc: "Secure tuition and fee payments, hassle-free.",
              href: "/payments",
              color: "bg-green-50 dark:bg-green-900/20",
              iconColor: "text-green-600",
              renderIcon: () => <Banknote className="w-12 h-12" />,
            },
          ].map((service, i) => (
            <a key={i} href={service.href} className="bg-white dark:bg-gray-900 text-indigo-600 rounded-2xl shadow-md p-8 text-center flex flex-col items-center hover:scale-105 transition group">
              <div className={`inline-flex items-center justify-center rounded-full w-20 h-20 ${service.color} mb-6`}>
                {service.renderIcon()}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700 dark:text-purple-300 transition">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>
              <span className="text-purple-600 font-medium group-hover:underline">Learn More</span>
            </a>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-20 bg-white dark:bg-gray-900 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 dark:text-purple-300 mb-10">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Search className="w-10 h-10 text-purple-600 mx-auto mb-4" />, title: "Create Profile", desc: "Sign up and tell us about your goals and background." },
            { icon: <BookOpenCheck className="w-10 h-10 text-pink-500 mx-auto mb-4" />, title: "Get Matches", desc: "Receive scholarships curated just for you." },
            { icon: <Video className="w-10 h-10 text-indigo-500 mx-auto mb-4" />, title: "Apply Easily", desc: "Track deadlines and submit applications in one place." },
            { icon: <Banknote className="w-10 h-10 text-green-500 mx-auto mb-4" />, title: "Expert Guidance", desc: "Access counseling, webinars, and resources." },
          ].map((step, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 rounded-2xl shadow-md p-8 text-center flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED SCHOLARSHIPS --- */}
      <section className="py-20 bg-white dark:bg-gray-900 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 dark:text-purple-300 mb-6">Ready to Start Your Journey?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white dark:bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-start hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Scholarship Program {n}</h3>
              <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300 mb-4">Full scholarship for undergraduate students in STEM fields.</p>
              <a href="/scholarships" className="text-purple-600 hover:underline font-medium">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURES/BENEFITS --- */}
      <section className="py-20 bg-white dark:bg-gray-900 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 dark:text-purple-300 mb-10">Why ScholarPath?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Personalized Guidance", description: "Expert advice tailored to your needs and goals." },
            { title: "Proven Success", description: "Real stories from students who achieved their academic dreams." },
            { title: "Streamlined Application Process", description: "Easy-to-use platform to find and apply for scholarships." },
            { title: "Community Support", description: "Join a network of students and experts for motivation and guidance." },
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-5 bg-white dark:bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 shadow hover:shadow-lg transition">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-white dark:bg-gray-900 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 dark:text-purple-300 mb-10">Success Stories</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Amina T.", text: "ScholarPath helped me find a full scholarship abroad! The counseling was amazing and I felt supported at every step." },
            { name: "David K.", text: "The webinar on application essays was a game-changer. I got accepted to 3 out of 5 universities I applied to!" },
            { name: "Sarah M.", text: "The scholarship matching saved me so much time. I wouldn't have found these opportunities on my own." },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <p className="text-gray-700 dark:text-gray-200 dark:text-gray-300 italic mb-4">"{testimonial.text}"</p>
              <p className="font-medium text-purple-700 dark:text-purple-300 dark:text-purple-400">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 bg-white dark:bg-gray-900 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 dark:text-purple-300 mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Is ScholarPath free to use?", a: "Yes! You can search and match with scholarships for free. Some premium services may have a fee." },
            { q: "Do I need to pay to apply for scholarships?", a: "No, applying for scholarships through ScholarPath is free. Some universities may have their own application fees." },
            { q: "Can I get personal counseling?", a: "Absolutely! Our experts are available for one-on-one counseling sessions." },
            { q: "How do I know if I'm eligible for a scholarship?", a: "Our matching system only shows scholarships you are eligible for based on your profile." },
          ].map((faq, i) => (
            <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-900 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-2 text-purple-700 dark:text-purple-300">{faq.q}</h3>
              <p className="text-gray-700 dark:text-gray-200">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER SIGNUP --- */}
      <section className="py-16 bg-white dark:bg-gray-900">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-purple-800 mb-4">Stay Updated</h2>
    <p className="text-gray-700 dark:text-gray-200 dark:text-gray-300 mb-6">
      Get the latest scholarships and tips delivered to your inbox.
    </p>
    <form className="flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="px-6 py-3 rounded-full border border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-900 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-400 outline-none w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

    </main>
  );
}
