"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";
import { ScholarshipCard } from '@/components/ScholarshipCard';
import { getScholarships } from '@/lib/api/strapi';
import { Scholarship } from '@/types/scholarships';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ScholarshipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    level: "",
    country: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });


  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  const fetchScholarships = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getScholarships();
      setScholarships(data);
    } catch (error: any) {
      console.error('Error fetching scholarships:', error);
      setError(error.message || 'Failed to fetch scholarships');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  const handleRetry = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      fetchScholarships();
    }
  };

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       scholarship.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = !filters.level || scholarship.level === filters.level;
    const matchesCountry = !filters.country || scholarship.country === filters.country;

    return matchesSearch && matchesLevel && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 px-6 sm:px-10 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold text-purple-800 dark:text-purple-300 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Scholarships
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover thousands of scholarships from around the world to fund your education.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-2 flex flex-col sm:flex-row gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search scholarships..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Search className="mr-2 h-5 w-5" />
              Search
            </button>
          </motion.div>

          {/* Quick Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filters.level === 'Undergraduate' ? 'bg-purple-100 text-purple-700 dark:text-purple-300' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:bg-gray-800'}`}
              onClick={() => setFilters({...filters, level: filters.level === 'Undergraduate' ? '' : 'Undergraduate'})}
            >
              🎓 Undergraduate
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filters.level === 'Graduate' ? 'bg-blue-100 text-blue-700' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:bg-gray-800'}`}
              onClick={() => setFilters({...filters, level: filters.level === 'Graduate' ? '' : 'Graduate'})}
            >
              📚 Graduate
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filters.country === 'USA' ? 'bg-red-100 text-red-700' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:bg-gray-800'}`}
              onClick={() => setFilters({...filters, country: filters.country === 'USA' ? '' : 'USA'})}
            >
              🇺🇸 US Universities
            </button>
          </motion.div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20 px-6 sm:px-10 bg-white dark:bg-gray-900" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Scholarships</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Browse through our curated list of scholarships from top institutions worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
            {error ? (
              <div className="col-span-3 text-center py-12">
                <p className="text-red-600 dark:text-red-400">{error}</p>
                <button
                  onClick={handleRetry}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  disabled={retryCount >= maxRetries}
                >
                  {retryCount >= maxRetries ? 'Max retries reached' : 'Retry'}
                </button>
              </div>
            ) : loading ? (
              <div className="col-span-3 text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading scholarships...</p>
              </div>
            ) : filteredScholarships.length === 0 ? (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No scholarships found matching your criteria.</p>
              </div>
            ) : (
              filteredScholarships.map((scholarship, index) => (
                <ScholarshipCard key={index} scholarship={scholarship} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Top Study Destinations Section */}
      <section className="py-20 px-6 sm:px-10 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-blue-900 dark:text-blue-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🌍 Top Study Destinations
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { country: "USA", flag: "🇺🇸", description: "Known for Ivy League and fully funded opportunities." },
              { country: "UK", flag: "🇬🇧", description: "Home to Chevening, Commonwealth, and other major awards." },
              { country: "Germany", flag: "🇩🇪", description: "Free tuition and DAAD-funded options for all levels." },
              { country: "Canada", flag: "🇨🇦", description: "Generous government and university scholarships." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.flag} {item.country}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <div className="py-20 px-6 sm:px-10 bg-white dark:bg-gray-900 dark:bg-[#191919] text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-purple-800 dark:text-purple-400 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🎯 How We Help You Win Scholarships
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Profile Review", desc: "We evaluate your academic and extracurricular strengths." },
              { title: "Opportunity Match", desc: "We connect you with the right scholarships." },
              { title: "Essay Support", desc: "We review and refine your statements to make them stand out." },
              { title: "Submission Strategy", desc: "We guide you on how and when to apply for maximum success." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-purple-100 dark:bg-purple-900/30 rounded-xl shadow-md p-6 hover:shadow-xl transition hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 dark:text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <section className="py-20 px-6 sm:px-10 bg-white dark:bg-gray-900 dark:bg-[#191919]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-pink-700 dark:text-pink-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🌟 Success Stories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Liya from Ethiopia",
                quote: "Thanks to the support I received, I secured a fully funded scholarship in Germany!",
                country: "Germany",
                image: "/tegegn.jpg",
              },
              {
                name: "Samuel from Kenya",
                quote: "This platform gave me the tools and confidence to apply abroad — now I'm studying in the UK.",
                country: "UK",
                image: "/tegegn.jpg",
              },
              {
                name: "Fatima from Nigeria",
                quote: "I was guided every step of the way — from essays to interviews. I got a scholarship in Canada!",
                country: "Canada",
                image: "/tegegn.jpg",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition hover:scale-105"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-300">{story.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{story.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 dark:text-gray-300 italic">&quot;{story.quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
