import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Scholarship } from '@/types/scholarships';

export function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  return (
    <Card className="w-full h-full flex flex-col justify-between transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-2">
          {scholarship.title}
        </CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-2">
          {scholarship.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 text-xs mt-2">
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">{scholarship.country}</span>
          <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">{scholarship.level}</span>
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-between text-xs pt-4 border-t border-gray-100 dark:border-gray-700">
        <span className="text-gray-500 dark:text-gray-400">Deadline: {scholarship.deadline}</span>
        <span className="text-green-700 dark:text-green-300 font-semibold">${scholarship.amount.toLocaleString()}</span>
      </CardFooter>
    </Card>
  );
}
