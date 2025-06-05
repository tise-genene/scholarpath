"use client";

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  instructor: string;
  duration: string;
  category: string;
  isPremium: boolean;
  outline: Array<{
    title: string;
    duration: string;
    videoUrl: string;
  }>;
}

export default function CourseDetailsPage() {
  const params = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${params.id}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Course not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="relative h-64">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {course.title}
            </h1>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 dark:text-gray-400">
                  Duration: {course.duration}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Category: {course.category}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">
                  Instructor: {course.instructor}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  course.isPremium ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {course.isPremium ? 'Premium' : 'Free'}
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {course.description}
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Course Outline
              </h3>
              <ul className="space-y-2">
                {course.outline.map((section, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-purple-600 dark:text-purple-400">{index + 1}.</span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {section.title}
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {section.duration}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {course.isPremium && (
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {course.price.toLocaleString('en-ET', { 
                    style: 'currency', 
                    currency: 'ETB' 
                  })}
                </span>
                <button className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
                  Enroll Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
