import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Scholarship } from '@/types/scholarships';

export function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  // Format description text with better spacing and typography
  const formatDescription = (text: string) => {
    // Split into sections based on common separators
    const sections = text.split(/\n|\n\n/).filter(Boolean);
    
    // Process each section
    return sections.map((section, sectionIndex) => {
      // Split section into paragraphs
      const paragraphs = section.split('. ').filter(Boolean);
      
      // Process each paragraph
      return paragraphs.map((paragraph, paragraphIndex) => {
        // Split paragraph into lines
        const lines = paragraph.split(/\s{2,}/).filter(Boolean);
        
        // Format each line
        return lines.map((line, lineIndex) => (
          <p key={`${sectionIndex}-${paragraphIndex}-${lineIndex}`} className="mb-2 leading-relaxed">
            {line}.&nbsp;
          </p>
        ));
      });
    });
  };

  const formattedDescription = formatDescription(scholarship.description);

  // Handle link opening with error handling
  const handleLinkClick = (url: string | undefined) => {
    if (!url) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Get button classes based on URL availability
  const getButtonClasses = (url: string | undefined, color: 'blue' | 'purple') => {
    if (!url) {
      return `px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg transition duration-200 flex items-center gap-3 text-lg font-medium cursor-not-allowed opacity-50`;
    }
    return `px-6 py-3 bg-${color}-600 text-white rounded-lg hover:bg-${color}-700 transition duration-200 flex items-center gap-3 text-lg font-medium`;
  };

  return (
    <Card className="w-full h-full flex flex-col justify-between transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 hover:shadow-lg hover:dark:shadow-gray-700">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-4">
          {scholarship.title}
        </CardTitle>
        <div className="space-y-4">
          <CardDescription className="text-base text-gray-600 dark:text-gray-300">
            {formattedDescription}
          </CardDescription>
          <div className="flex flex-wrap gap-2 text-xs mt-2">
            <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
              <span className="dark:bg-blue-900/20 dark:text-blue-200">{scholarship.country}</span>
            </span>
            <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">
              <span className="dark:bg-purple-900/20 dark:text-purple-200">{scholarship.level}</span>
            </span>
          </div>
        </div>
      </CardHeader>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-4">
          <button 
            onClick={() => handleLinkClick(scholarship.applyNow)}
            className={getButtonClasses(scholarship.applyNow, 'blue')}
            disabled={!scholarship.applyNow}
          >
            <span>{scholarship.applyNow ? 'Apply Now' : 'No Application Link'}</span>
          </button>
          <button 
            onClick={() => handleLinkClick(scholarship.howToApply)}
            className={getButtonClasses(scholarship.howToApply, 'purple')}
            disabled={!scholarship.howToApply}
          >
            <span>{scholarship.howToApply ? 'How to Apply' : 'No Guide Available'}</span>
          </button>
        </div>
        <CardFooter className="flex items-center justify-between text-xs pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-300">Deadline: {scholarship.deadline}</span>
          <span className="text-green-700 dark:text-green-300 font-semibold">${scholarship.amount.toLocaleString()}</span>
        </CardFooter>
      </div>
    </Card>
  );
}
