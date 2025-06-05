"use client"

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookingData } from '@/types/booking';

const BookPayPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [receiptUrl, setReceiptUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Get booking data from URL
  const bookingDataStr = searchParams.get('bookingData');
  const bookingData: BookingData = bookingDataStr ? JSON.parse(bookingDataStr) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setIsSubmitting(false);
      setReceiptUrl('');
    } catch (error) {
      console.error('Payment error:', error);
      setIsSubmitting(false);
    }
  };

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Booking Data Found</h2>
          <p className="text-gray-600">Please try booking a consultation first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-xl dark:shadow-none p-8"
        >
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Payment Information
          </h1>

          <div className="space-y-6">
            {success ? (
              <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500 dark:text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-green-800 dark:text-green-300">
                    Payment processed successfully!
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Booking Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Package
                      </label>
                      <input
                        type="text"
                        value={bookingData.packageDetails.name}
                        disabled
                        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Price
                      </label>
                      <input
                        type="text"
                        value={bookingData.packageDetails.price.toLocaleString('en-ET', {
                          style: 'currency',
                          currency: 'ETB'
                        })}
                        disabled
                        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Upload Payment Receipt
                  </h3>
                  <div className="flex flex-col items-center space-y-4">
                    {receiptUrl ? (
                      <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                        <img
                          src={receiptUrl}
                          alt="Payment receipt"
                          className="w-full h-full object-contain"
                        />
                        <button
                          onClick={() => setReceiptUrl('')}
                          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <label className="w-full max-w-md cursor-pointer">
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center text-gray-600 dark:text-gray-400 hover:border-purple-400 transition-colors">
                          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm">Click to upload payment receipt</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">(PNG, JPG, PDF up to 5MB)</p>
                        </div>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              const file = e.target.files[0];
                              const reader = new FileReader();
                              reader.onload = (e) => {
                                if (e.target?.result) {
                                  setReceiptUrl(e.target.result as string);
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!receiptUrl || isSubmitting}
                  className="w-full bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing Payment...' : 'Submit Payment'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookPayPage;
