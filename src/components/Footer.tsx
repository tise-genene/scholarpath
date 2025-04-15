"use client";

import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section - Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">ScholarConnect</h4>
          <p className="text-sm mt-1 text-gray-300">
            Empowering your global education journey.
          </p>
          <div className="mt-4 text-gray-300 text-sm">
            <div>123 Scholar St, Education City</div>
            <div>+1 (234) 567-890</div>
            <div>contact@scholarconnect.com</div>
          </div>
        </div>

        {/* Center Section - Services */}
        <div className="text-center md:text-left">
          <h5 className="text-lg font-semibold">Our Services</h5>
          <ul className="text-sm text-gray-300 mt-2">
            <li><a href="/scholarships" className="hover:text-blue-400 transition">Scholarship Search</a></li>
            <li><a href="/counseling" className="hover:text-blue-400 transition">Counseling Services</a></li>
            <li><a href="/webinars" className="hover:text-blue-400 transition">Webinars</a></li>
            <li><a href="/mentoring" className="hover:text-blue-400 transition">Mentoring</a></li>
          </ul>
        </div>

        {/* Right Section - Support Services */}
        <div className="text-center md:text-left">
          <h5 className="text-lg font-semibold">Support</h5>
          <ul className="text-sm text-gray-300 mt-2">
            <li><a href="/faq" className="hover:text-blue-400 transition">FAQ</a></li>
            <li><a href="/contact-us" className="hover:text-blue-400 transition">Contact Us</a></li>
            <li><a href="/help" className="hover:text-blue-400 transition">Help Center</a></li>
          </ul>
        </div>

        {/* Right Section - Call to Action Button */}
        <div className="flex gap-6 text-lg text-white justify-center mt-6">
        <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
          <FaFacebook />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition">
          <FaInstagram />
        </a>
      </div>
      </div>
      <div className="text-sm text-gray-300 text-center md:text-right mt-6">
        <div className="flex justify-center md:justify-end gap-4">
          <a href="/terms-and-conditions" className="hover:text-blue-400 transition">Terms & Conditions</a>
          <a href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</a>
        </div>
      </div>

      <div className="text-sm text-gray-300 text-center mt-6">
        &copy; {currentYear} ScholarConnect. All rights reserved.
      </div>
    </footer>
  );
}
