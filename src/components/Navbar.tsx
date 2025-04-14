// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">
            Tegegnpathway
          </span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:text-gray-800 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} text-white md:text-gray-800`}>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/scholarships" className="hover:text-blue-600">
            Scholarships
          </Link>
          <Link href="/counseling" className="hover:text-blue-600">
            Counseling
          </Link>
          <Link href="/webinars" className="hover:text-blue-600">
            Webinars
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/contactus" className="hover:text-blue-600">
           Contact Us
          </Link>
          <Link href="/LOGIN" className="hover:text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
