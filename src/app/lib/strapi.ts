const API_URL = 'http://localhost:1337/api';

export async function fetchScholarships() {
  const res = await fetch(`${API_URL}/scholarships?populate=category`);
  const data = await res.json();
  return data.data;
}