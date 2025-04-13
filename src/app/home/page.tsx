// src/app/page.tsx
import { fetchScholarships } from '../lib/strapi';

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/back.jpg')" }} // Make sure this image exists in public/images/
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Your Gateway to <span className="text-blue-600">Scholarships</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Discover and apply to scholarships that match your dreams and goals.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
