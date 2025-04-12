// src/app/page.tsx
import { fetchScholarships } from './lib/strapi';

export default async function Home() {
  const scholarships = await fetchScholarships();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Scholarships</h1>
      <ul className="space-y-4">
      {scholarships.map((s: any) => (
        <li key={s.id} className="p-4 bg-white shadow rounded">
          <h2 className="text-xl text-black font-semibold">{s.title.trim()}</h2>
          <p className='text-black'>📅 Deadline: {s.deadline}</p>
          <p className='text-black'>🌍 Country: {s.country?.[0]?.children?.[0]?.text || 'N/A'}</p>
          <p className='text-black'>✅ Eligibility: {s.eligibility?.[0]?.children?.[0]?.text || 'N/A'}</p>
          <a
            href={s.applyLink?.trim()}
            className="text-blue-500 underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now →
          </a>
        </li>
      ))}
      </ul>
    </div>
  );
}
