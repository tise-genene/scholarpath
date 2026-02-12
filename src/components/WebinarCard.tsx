import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Webinar } from '@/types/webinars';
import { WebinarRegistrationForm } from './WebinarRegistrationForm';
import { useState } from 'react';

export function WebinarCard({ webinar }: { webinar: Webinar }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <Card className="w-full h-full flex flex-col justify-between transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-2">
          {webinar.title}
        </CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-2">
          {webinar.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 text-xs mt-2">
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">{webinar.platform}</span>
          <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">{webinar.date}</span>
          <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">{webinar.time}</span>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col items-center justify-between text-xs pt-4 border-t border-gray-100 dark:border-gray-700">
        {showForm ? (
          <WebinarRegistrationForm webinarId={webinar.id} />
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white text-center py-3 px-6 rounded-full font-bold transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700"
          >
            Register
          </button>
        )}
      </CardFooter>
    </Card>
  );
}
