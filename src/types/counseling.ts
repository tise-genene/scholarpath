export interface FeatureCardData {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface ServiceCardData {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface TestimonialData {
  name: string;
  quote: string;
  location: string;
}

export interface ResourceCardData {
  title: string;
  link: string;
  description: string;
}
