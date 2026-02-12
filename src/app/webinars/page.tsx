"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaVideo, FaGraduationCap } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { WebinarCard } from '@/components/WebinarCard';
import { useState, useEffect } from 'react';
import { getWebinars } from '@/lib/api/webinars';
import { Webinar } from '@/types/webinars';

export default function WebinarPage() {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getWebinars();
        setWebinars(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch webinars');
        console.error('Error fetching webinars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  return (
    <section className="min-h-screen w-full py-2 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">


      {/* Webinar Hero Section */}
      <motion.div
        className="w-full max-w-screen-xl mx-auto px-4 md:px-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 relative z-10 mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Icon */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 md:-mr-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-xl"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaGraduationCap className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Gateway to Global Scholarship Success
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
            Join our expert-led webinars to unlock the secrets of winning international scholarships. 
            Get personalized guidance, insider tips, and direct access to scholarship opportunities worldwide.
          </p>

          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Free Webinar
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <FaCalendarAlt className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">What We Offer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Expert-led sessions on:</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Application strategies</li>
                    <li>Interview preparation</li>
                    <li>Scholarship hunting tips</li>
                    <li>Essay writing guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <FaClock className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Who Should Attend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Perfect for:</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Students seeking international scholarships</li>
                    <li>Parents supporting their children's education</li>
                    <li>Education consultants</li>
                    <li>School counselors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <FaVideo className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">What You'll Learn</h3>
                  <p className="text-gray-600 dark:text-gray-300">Key insights on:</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>How to find the right scholarships</li>
                    <li>Common application mistakes to avoid</li>
                    <li>How to stand out in the selection process</li>
                    <li>Time management for scholarship applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Why Join Us</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Expert panelists with years of experience</li>
                  <li>Interactive Q&A sessions</li>
                  <li>Access to exclusive scholarship resources</li>
                  <li>Networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Soft Divider Line --- */}
      <div className="my-24 border-t border-purple-300/50 w-3/4 mx-auto"></div>

      {/* Upcoming Webinars */}
      <motion.div
        className="max-w-10xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-6">Upcoming Webinars</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Stay ahead of the game with our lineup of expert-led sessions. Learn, grow, and unlock new opportunities!
        </p>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading webinars...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {webinars.filter(w => !w.isPast).map((webinar, idx) => (
              <WebinarCard key={idx} webinar={webinar} />
            ))}
          </div>
        )}
      </motion.div>

      {/* --- Soft Divider Line --- */}
      <div className="my-24 border-t border-purple-300/50 w-3/4 mx-auto"></div>

      {/* Past Webinars */}
      <motion.div
        className="max-w-10xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-6">Past Webinars</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Missed a session? No worries. Catch up and learn at your own pace — your future self will thank you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {webinars.filter(w => w.isPast).map((webinar, idx) => (
            <Card key={idx} className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                  {webinar.title}
                </CardTitle>
                <CardDescription className="mb-4 text-gray-800 dark:text-gray-100">
                  {webinar.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <a
                  href={webinar.link}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full mt-4 inline-block hover:bg-purple-700 w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Replay
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* --- Final Call to Action --- */}
      <motion.div
        className="text-center mb-24 max-w-10xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Final CTA can be added here if you want */}
      </motion.div>
    </section>
  )}
