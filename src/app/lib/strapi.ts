const API_URL = 'http://localhost:1337/api';
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export async function fetchScholarships() {
  const res = await fetch(`${API_URL}/scholarships?populate=category`);
  const data = await res.json();
  return data.data;
}

export async function fetchPosts() {
  const res = await fetch(`${STRAPI_API_URL}/api/posts?populate=*`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 }, // Optional cache
  });

  if (!res.ok) throw new Error("Failed to fetch blog posts");
  const json = await res.json();
  return json.data;
}
