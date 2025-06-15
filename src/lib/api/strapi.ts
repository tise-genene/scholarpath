import { Scholarship } from '../../types/scholarships';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || '';

console.log('Strapi API URL:', STRAPI_API_URL);
console.log('Strapi Token:', STRAPI_TOKEN ? 'Token is present' : 'No token available');

export async function getScholarships(): Promise<Scholarship[]> {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api/scholarships`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Strapi response:', data);
    
    if (!data.data) {
      throw new Error('Invalid response format from Strapi');
    }

    return data.data.map((scholarship: any) => ({
      id: scholarship.id,
      title: scholarship.Title,
      description: scholarship.Description,
      deadline: scholarship.Deadline,
      amount: scholarship.Amount,
      country: scholarship.Country,
      level: scholarship.Level,
      applyNow: scholarship.applyNow,
      howToApply: scholarship.howToApply,
    }));
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    throw error;
  }
}
