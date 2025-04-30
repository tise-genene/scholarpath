'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Resources & Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Access valuable resources and expert insights to guide your scholarship journey
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Scholarship Guides', 'Application Tips', 'Financial Aid', 'Study Abroad'].map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">{category}</h3>
                <p className="text-gray-600">Browse articles in this category</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_POSTS.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={post.id === 1}
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-gray-500">{post.readingTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest scholarship tips and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border border-purple-300 focus:ring-2 focus:ring-purple-400 outline-none w-full sm:w-auto"
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
    </div>
  );
}

