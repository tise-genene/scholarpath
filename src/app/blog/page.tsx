'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { blogPosts } from '@/data/blog';
import { BlogPostCard } from '@/components/BlogPostCard';


export default function BlogPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#191919] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-[#191919]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 className="text-5xl font-bold text-purple-800 dark:text-purple-300 text-center mb-8">
              Resources &amp; Blog
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access valuable resources and expert insights to guide your scholarship journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Scholarship Guides', 'Application Tips', 'Financial Aid', 'Study Abroad'].map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">{category}</h3>
                <p className="text-gray-600 dark:text-gray-300">Browse articles in this category</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white dark:bg-[#191919]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Posts</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our latest articles and resources to help you with your scholarship journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {blogPosts.map((post) => (
  <BlogPostCard key={post.id} post={post} />
))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest scholarship tips and updates
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none w-full bg-white dark:bg-gray-700 dark:text-white"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

