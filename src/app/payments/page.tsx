'use client';

import React from 'react';
import Link from 'next/link';

const PaymentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Payment Information
          </h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">
                International Payment Assistance
              </h2>
              <p className="text-gray-600 mb-4">
                For international payment assistance, please contact our team directly via Telegram.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://t.me/Tegegnpathway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact Support on Telegram
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Important Notes:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Our team will assist you with international payment options and methods.
                </li>
                <li>
                  Please wait for confirmation before making any payments.
                </li>
                <li>
                  We will provide you with specific payment instructions based on your location.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;