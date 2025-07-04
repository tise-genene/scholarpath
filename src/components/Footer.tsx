'use client';

import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="relative z-10 bg-purple-950 dark:bg-gray-950 text-white px-6 py-16 overflow-hidden border-t-2 border-white/20 dark:border-gray-700/70">
      {/* Glow/Blur Background */}
      

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-xl font-bold mb-3">Tegegn Pathway</h4>
          <p className="text-gray-200 dark:text-gray-300">Empowering your global education journey.</p>
          <div className="mt-4 space-y-1 text-gray-400 dark:text-gray-400 text-xs">
            <div>Tegegn From Verona, Italy</div>
            <div>+39 351 350 2026</div>
            <div>contact on <a href="https://t.me/Tegegnpathway">Telegram</a></div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h5 className="text-lg font-semibold mb-3">Our Services</h5>
          <ul className="space-y-2 text-gray-300 dark:text-gray-400">
            <li><a href="/scholarships" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">🎓 Scholarship Search</a></li>
            <li><a href="/counseling" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">🧠 Counseling</a></li>
            <li><a href="/webinars" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">📹 Webinars</a></li>
            <li><a href="/mentoring" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">🤝 Mentoring</a></li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h5 className="text-lg font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-gray-300 dark:text-gray-400">
            <li><a href="/faq" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">❓ FAQ</a></li>
            <li><a href="/contact-us" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">📬 Contact Us</a></li>
            <li><a href="/help" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">💬 Help Center</a></li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h5 className="text-lg font-semibold mb-3">Connect With Us</h5>
          <div className="flex gap-4 text-xl">
            <a href="https://t.me/Tegegnpathway" className="hover:text-blue-400 transition"><FaTelegram /></a>
            <a href="https://www.linkedin.com/in/tegegn-tise-1b989a198/" className="hover:text-blue-500 transition"><FaLinkedin /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Links */}
      <div className="relative mt-12 border-t border-purple-700 pt-6 text-center text-xs text-gray-400 dark:text-gray-400 space-y-2">
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/terms-and-conditions" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">Terms & Conditions</a>
          <a href="/privacy-policy" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">Privacy Policy</a>
        </div>
        <p>&copy; {currentYear} <a href="https://t.me/Tegegnpathway" className="hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 transition">Tegegn Pathway</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}
