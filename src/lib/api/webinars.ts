import { Webinar } from '@/types/webinars';

export async function getWebinars(): Promise<Webinar[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/webinars`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Raw Strapi response:', JSON.stringify(data, null, 2));

    if (!data.data) {
      throw new Error('Invalid response format from Strapi');
    }

    return data.data.map((webinar: any) => {
      return {
        id: webinar.id,
        title: webinar.Title || 'Untitled Webinar',
        date: webinar.Date || new Date().toISOString().split('T')[0],
        time: webinar.Time || '00:00',
        platform: webinar.Platform || 'Unknown',
        description: webinar.Description || 'No description available',
        link: webinar.Link || '#',
        isPast: webinar.isPast || false,
      };
    });
  } catch (error) {
    console.error('Error fetching webinars:', error);
    throw error;
  }
}
