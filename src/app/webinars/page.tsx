"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaVideo } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { webinars } from '@/data/webinars';
import { WebinarCard } from '@/components/WebinarCard';

export default function WebinarPage() {
  return (
    <section className="min-h-screen w-full py-16 px-4 md:px-10 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Soft Glows */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 opacity-30 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 opacity-40 rounded-full blur-3xl z-0" />

      {/* Webinar Header */}
      <motion.div
        className="max-w-10xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold text-purple-800 dark:text-purple-300 text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          Live Scholarship Webinar
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-200 text-lg text-center mb-10 max-w-3xl mx-auto">
          Unlock your scholarship success with tips on applications, interviews, and discovering the best international opportunities! 
          <br />Gain insider knowledge, avoid common mistakes, and supercharge your chances of winning big!
        </p>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="text-purple-600 dark:text-purple-300 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Date</h4>
            <p className="text-gray-800 dark:text-gray-100">April 25, 2025</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Save the date — you won't want to miss this!</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-purple-600 dark:text-purple-300 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Time</h4>
            <p className="text-gray-800 dark:text-gray-100">4:00 PM (GMT+3)</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Be there early — spots fill fast!</p>
          </div>
          <div className="flex flex-col items-center">
            <FaVideo className="text-purple-600 dark:text-purple-300 text-3xl mb-2" />
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Platform</h4>
            <p className="text-gray-800 dark:text-gray-100">Zoom</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Join from anywhere, anytime.</p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <motion.button
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(147,51,234,0.5)",
            }}
          >
            Reserve My Spot
          </motion.button>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
            Limited seats available — secure yours now before it's too late!
          </p>
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

        <div className="grid md:grid-cols-3 gap-8">
          {webinars.map((webinar, idx) => (
            <WebinarCard key={idx} webinar={webinar} />
          ))}
        </div>
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
          {/* Past Card 1 */}
          <Card className="transition-transform hover:scale-105">
  <CardHeader>
    <CardTitle className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
      Scholarship Application Tips
    </CardTitle>
    <CardDescription className="mb-4 text-gray-800 dark:text-gray-100">
      Replay our top strategies for acing scholarship applications and boosting your chances of standing out!
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <a
      href="#replay1"
      className="bg-purple-600 text-white px-6 py-2 rounded-full mt-4 inline-block hover:bg-purple-700 w-full text-center"
    >
      Watch Replay
    </a>
  </CardFooter>
</Card>

          {/* Past Card 2 */}
          <Card className="transition-transform hover:scale-105">
  <CardHeader>
    <CardTitle className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
      Writing a Winning CV
    </CardTitle>
    <CardDescription className="mb-4 text-gray-800 dark:text-gray-100">
      Discover how to craft a CV that tells your unique story and leaves a lasting impression on review committees.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <a
      href="#replay2"
      className="bg-purple-600 text-white px-6 py-2 rounded-full mt-4 inline-block hover:bg-purple-700 w-full text-center"
    >
      Watch Replay
    </a>
  </CardFooter>
</Card>

          {/* Past Card 3 */}
          <Card className="transition-transform hover:scale-105">
  <CardHeader>
    <CardTitle className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
      Choosing the Right Scholarship
    </CardTitle>
    <CardDescription className="mb-4 text-gray-800 dark:text-gray-100">
      Replay and learn how to align your goals and strengths with the scholarships that fit you best.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <a
      href="#replay3"
      className="bg-purple-600 text-white px-6 py-2 rounded-full mt-4 inline-block hover:bg-purple-700 w-full text-center"
    >
      Watch Replay
    </a>
  </CardFooter>
</Card>
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
  );
}
