import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FeatureCardData, ServiceCardData, TestimonialData, ResourceCardData } from '@/types/counseling';

export function FeatureCard({ Icon, title, desc }: FeatureCardData) {
  return (
    <Card className="w-full sm:w-80 transition-all duration-300 hover:scale-105">
      <CardHeader className="flex flex-col items-center text-center">
        <Icon className="text-3xl text-blue-600 mb-2" />
        <CardTitle className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400">{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export function ServiceCard({ Icon, title, desc }: ServiceCardData) {
  return (
    <Card className="w-full sm:w-80 transition-all duration-300 hover:scale-105">
      <CardHeader className="flex flex-col items-center text-center">
        <Icon className="text-2xl text-purple-600 mb-2" />
        <CardTitle className="text-md font-semibold text-purple-900 dark:text-purple-200 mb-2">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400">{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export function TestimonialCard({ name, quote, location }: TestimonialData) {
  return (
    <Card className="w-full sm:w-80 transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardDescription className="italic text-gray-700 dark:text-gray-300 mb-2">“{quote}”</CardDescription>
        <CardTitle className="text-sm font-semibold text-blue-900 dark:text-blue-200">{name}</CardTitle>
        <div className="text-xs text-gray-500 dark:text-gray-400">{location}</div>
      </CardHeader>
    </Card>
  );
}

export function ResourceCard({ title, link, description }: ResourceCardData) {
  return (
    <Card className="w-full sm:w-80 transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">{title}</a>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
