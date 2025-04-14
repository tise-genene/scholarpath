"use client";

import { useState, useEffect } from "react";

interface Scholarship {
  title: string;
  description: string;
  deadline: string;
  amount: number;
  country: string;
  eligibility: string;
  applyLink: string;
  level: string;
  isPublished: boolean;
}

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);

  // Sample hardcoded data to simulate an API response
  const sampleScholarship: Scholarship = {
    title: "Test Scholarship",
    description: "This is a test scholarship for demonstration purposes.",
    deadline: "2025-12-31",
    amount: 5000,
    country: "USA",
    eligibility: "Open to all undergraduate students.",
    applyLink: "https://example.com/apply",
    level: "Undergraduate",
    isPublished: true,
  };

  // Simulate data fetching with useEffect (in real-world, it would come from an API)
  useEffect(() => {
    setScholarships([sampleScholarship]); // Set the scholarships with the sample data
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Available Scholarships</h2>

        {/* Map through scholarships and display them */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-blue-600">{scholarship.title}</h3>
              <p className="text-gray-700 mt-2">{scholarship.description}</p>
              <p className="mt-4">
                <strong>Deadline:</strong> {scholarship.deadline}
              </p>
              <p>
                <strong>Amount:</strong> ${scholarship.amount}
              </p>
              <p>
                <strong>Country:</strong> {scholarship.country}
              </p>
              <p>
                <strong>Eligibility:</strong> {scholarship.eligibility}
              </p>
              <p>
                <strong>Level:</strong> {scholarship.level}
              </p>
              <a
                href={scholarship.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
