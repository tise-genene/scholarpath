"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { packages, Package } from "@/types/counseling";
import { useRouter } from "next/navigation";
import { BookingData, BookingFormData } from "@/types/booking";

export default function BookingForm() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<string>("basic");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    date: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    date: ""
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      date: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setSubmitted(true);
      
      // Prepare booking data
      const packageDetails = packages.find(p => p.id === selectedPackage);
      if (!packageDetails) {
        throw new Error('Package not found');
      }

      const bookingData: BookingData = {
        ...formData,
        package: selectedPackage,
        packageDetails
      };

      // Redirect to payments page
      router.push(`/payments?bookingData=${encodeURIComponent(JSON.stringify(bookingData))}`);
    } catch (error) {
      console.error('Error processing booking:', error);
      setSubmitted(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-xl dark:shadow-none p-8"
        >
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Book a Counseling Session
            </h1>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Choose Your Package
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-none p-6 hover:shadow-xl dark:hover:shadow-lg transition-all cursor-pointer ${
                      selectedPackage === pkg.id ? "border-2 border-purple-600 dark:border-purple-500" : ""
                    }`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {pkg.name}
                      </h3>
                      <span className="text-xl font-bold text-purple-600 dark:text-purple-500">
                        {pkg.price.toLocaleString('en-ET', {
                          style: 'currency',
                          currency: 'ETB'
                        })}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {pkg.duration}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="mr-2">✅</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 ${
                      errors.name ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 ${
                      errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 ${
                    errors.date ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                  }`}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your goals or concerns..."
                  className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 border-gray-300 dark:border-gray-600"
                  rows={4}
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-500">
                    {packages.find(p => p.id === selectedPackage)?.price.toLocaleString('en-ET', {
                      style: 'currency',
                      currency: 'ETB'
                    })}
                  </span>
                  <span className="text-gray-600">
                    {packages.find(p => p.id === selectedPackage)?.duration}
                  </span>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 18px rgba(147,51,234,0.5)",
                  }}
                  className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
                  disabled={Object.values(errors).some(error => error !== "")}
                >
                  {submitted ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Book Now"
                  )}
                </motion.button>
              </div>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-green-700">
                    Your consultation has been booked successfully!
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}