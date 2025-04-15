// src/app/page.tsx
import { fetchScholarships } from './lib/strapi';

export default async function Home() {
  const scholarships = await fetchScholarships();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Landing Page Coming Soon</h1>
    </div>
  );
}
