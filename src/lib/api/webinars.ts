import { Webinar } from '@/types/webinars';

const sampleWebinars: Webinar[] = [
  {
    id: 1,
    title: "Mastering Scholarship Applications",
    date: "2025-06-20",
    time: "15:00",
    platform: "Zoom",
    description: "Learn the secrets to crafting winning scholarship applications from our expert panel.",
    link: "https://zoom.us/j/123456789",
    isPast: false,
  },
  {
    id: 2,
    title: "Study Abroad 101",
    date: "2025-06-25",
    time: "10:00",
    platform: "Google Meet",
    description: "Everything you need to know about studying abroad - from applications to visas.",
    link: "https://meet.google.com/abc-def-ghi",
    isPast: false,
  },
  {
    id: 3,
    title: "Interview Preparation Workshop",
    date: "2025-07-05",
    time: "14:00",
    platform: "Teams",
    description: "Get ready for your scholarship interviews with practical tips and mock sessions.",
    link: "https://teams.microsoft.com/l/meetup-join/123456789",
    isPast: false,
  },
];

export async function getWebinars(): Promise<Webinar[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/webinars`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.error('HTTP error! status:', response.status);
      return sampleWebinars;
    }

    const data = await response.json();
    console.log('Raw Strapi response:', JSON.stringify(data, null, 2));

    if (!data.data) {
      console.error('Invalid response format from Strapi');
      return sampleWebinars;
    }

    return data.data.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      date: item.attributes.date,
      time: item.attributes.time,
      platform: item.attributes.platform,
      description: item.attributes.description,
      link: item.attributes.link,
      isPast: item.attributes.isPast,
    }));
  } catch (error) {
    console.error('Error fetching webinars:', error);
    return sampleWebinars;
  }
}
