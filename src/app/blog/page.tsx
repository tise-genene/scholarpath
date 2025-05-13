'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const SAMPLE_POSTS = [
  {
    id: 1,
    title: 'The Ultimate Scholarship Resource Guide',
    category: 'Scholarship Guides',
    date: 'April 28, 2025',
    excerpt: 'Comprehensive guide to finding and applying for scholarships in 2025',
    image: '/resources-guide.jpg',
    author: 'Tegegn Gebre',
    readingTime: '10 min read',
  },
  {
    id: 2,
    title: 'Mastering Scholarship Applications',
    category: 'Application Tips',
    date: 'April 25, 2025',
    excerpt: 'Step-by-step guide to creating a winning scholarship application',
    image: '/application-tips.jpg',
    author: 'Tegegn Gebre',
    readingTime: '8 min read',
  },
  {
    id: 3,
    title: 'Understanding Financial Aid Options',
    category: 'Financial Aid',
    date: 'April 20, 2025',
    excerpt: 'Complete guide to financial aid for international students',
    image: '/financial-aid.jpg',
    author: 'Tegegn Gebre',
    readingTime: '7 min read',
  },
  {
    id: 4,
    title: 'Study Abroad 101',
    category: 'Study Abroad',
    date: 'April 15, 2025',
    excerpt: 'Everything you need to know about studying abroad and scholarships',
    image: '/study-abroad.jpg',
    author: 'Tegegn Gebre',
    readingTime: '9 min read',
  },
  {
    id: 5,
    title: 'Scholarship Success Stories',
    category: 'Scholarship Guides',
    date: 'April 10, 2025',
    excerpt: 'Real success stories from students who won scholarships',
    image: '/success-stories.jpg',
    author: 'Tegegn Gebre',
    readingTime: '6 min read',
  },
];

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
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Resources & Blog</h1>
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_POSTS.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={post.id === 1}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
                    <span className="text-purple-600 dark:text-purple-400 font-medium">{post.readingTime}</span>
                  </div>
                </div>
              </motion.article>
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

