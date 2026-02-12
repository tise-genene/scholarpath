import { WebinarRegistration } from '@/types/webinar-registration';

export async function registerForWebinar(data: WebinarRegistration) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/webinar-registrations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
    body: JSON.stringify({
      data: {
        webinar: data.webinarId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        institution: data.institution,
        academicLevel: data.academicLevel.trim() // Remove any trailing spaces
      }
    })
  });

  if (!response.ok) {
    throw new Error('Failed to register for webinar');
  }

  return response.json();
}
