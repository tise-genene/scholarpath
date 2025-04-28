'use client';

import './globals.css';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Search,
  CalendarCheck,
  BookOpenCheck,
  Download,
  Video,
  Banknote,
  UploadCloud,
  X,
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
  const [searchTerm, setSearchTerm] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [receipt, setReceipt] = useState<File | null>(null);

  const filteredFeatures = FEATURES.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0]);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-indigo-50 to-rose-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>

      {/* Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPaymentModal(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold text-purple-600 mb-4">Pay with Local Bank</h2>
            <p className="text-gray-700 mb-2">
              Please use the following account details to make your payment via CBE:
            </p>
            <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-800 space-y-2 mb-4">
              <p><strong>Account Name:</strong> ABC Payments PLC</p>
              <p><strong>Bank:</strong> Commercial Bank of Ethiopia</p>
              <p><strong>Account Number:</strong> 1000456789123</p>
              <p><strong>Branch:</strong> Bole Branch</p>
            </div>

            <label className="block mb-3 font-medium text-gray-700">Upload Payment Receipt:</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleUpload}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2"
            />

            {receipt && (
              <p className="text-green-600 mt-2 text-sm">✅ {receipt.name} selected</p>
            )}

            <button
              onClick={() => alert('Receipt submitted (mock logic)')}
              className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit Receipt
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Your Pathway to <span className="text-purple-600">Global Opportunities</span>
            </h1>
            <p className="text-lg text-gray-600">
              Discover and apply to scholarships that align with your goals and dreams.
            </p>

            {/* Search Bar */}
            <div className="relative w-full max-w-md mx-auto md:mx-0 flex z-10">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:ring-2 focus:ring-purple-400 outline-none text-gray-900 bg-white"
              />
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition-colors"
                type="button"
              >
                Go
              </button>
            </div>

            {/* Feature Results */}
            {searchTerm && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredFeatures.length > 0 ? (
                  filteredFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <h3 className="text-xl font-semibold text-purple-600">{feature.title}</h3>
                      <p className="text-gray-600 mt-2">{feature.description}</p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-full">No matching features found.</p>
                )}
              </div>
            )}

            {/* Animated Action Buttons */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="mt-10 space-y-8"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Get Started</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.button
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    <BookOpenCheck size={20} />
                    Explore Scholarships
                  </motion.button>
                  <motion.button
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-center justify-center gap-2 border-2 border-purple-500 text-purple-600 px-6 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
                  >
                    <CalendarCheck size={20} />
                    Book Consultation
                  </motion.button>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Stay Informed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.button
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-600 transition"
                  >
                    <Video size={20} />
                    Join Webinar
                  </motion.button>
                  <motion.button
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
                  >
                    <Download size={20} />
                    Download Resources
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section + Payment Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={() => setShowPaymentModal(true)}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-medium shadow-md transition"
            >
              <Banknote size={18} />
              Pay with Local Bank
            </button>
            <img
              src="/tegegn.jpg"
              alt="Scholarship illustration"
              className="w-full max-w-md object-contain rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
