"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Optionally log error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#191919] text-center p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-gray-500 mb-6">{error.message || "An unexpected error occurred. Please try again."}</p>
      <button
        className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
