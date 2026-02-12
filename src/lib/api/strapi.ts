import { Scholarship } from '../../types/scholarships';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || '';

console.log('Strapi API URL:', STRAPI_API_URL);
console.log('Strapi Token:', STRAPI_TOKEN ? 'Token is present' : 'No token available');

const sampleScholarships: Scholarship[] = [
  {
    title: "Master's in Computer Science",
    description: "Full tuition waiver for international students pursuing Master's in Computer Science at University of Technology",
    deadline: "2025-07-30",
    amount: 25000,
    country: "Germany",
    level: "Master's",
    applyNow: "https://apply.example.com/cs-masters",
    howToApply: "Submit your application through our online portal. Required documents: CV, transcripts, and motivation letter.",
  },
  {
    title: "PhD Research Fellowship",
    description: "Fully funded PhD fellowship in Renewable Energy Research",
    deadline: "2025-08-15",
    amount: 30000,
    country: "UK",
    level: "PhD",
    applyNow: "https://apply.example.com/phd-fellowship",
    howToApply: "Submit your research proposal, academic transcripts, and two reference letters.",
  },
  {
    title: "Undergraduate Scholarship",
    description: "Merit-based scholarship for undergraduate students in Engineering",
    deadline: "2025-09-01",
    amount: 15000,
    country: "Canada",
    level: "Bachelor's",
    applyNow: "https://apply.example.com/ug-scholarship",
    howToApply: "Complete the online application form and submit your academic records.",
  },
];

export async function getScholarships(): Promise<Scholarship[]> {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api/scholarships`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.error('HTTP error! status:', response.status);
      return sampleScholarships;
    }

    const data = await response.json();
    console.log('Strapi response:', data);
    
    if (!data.data) {
      console.error('Invalid response format from Strapi');
      return sampleScholarships;
    }

    return data.data.map((scholarship: any) => ({
      id: scholarship.id,
      title: scholarship.Title,
      description: scholarship.Description,
      deadline: scholarship.Deadline,
      amount: scholarship.Amount,
      country: scholarship.Country,
      level: scholarship.Level,
      applyNow: scholarship.ApplyNow,
      howToApply: scholarship.HowToApply,
    }));
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    return sampleScholarships;
  }
}
