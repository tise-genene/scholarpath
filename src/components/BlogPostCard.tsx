import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="w-full h-full flex flex-col transition-all duration-300 hover:scale-105">
      <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader className="flex-1">
        <span className="text-xs text-purple-600 dark:text-purple-300 font-semibold uppercase tracking-wide">
          {post.category}
        </span>
        <CardTitle className="text-lg font-bold text-blue-900 dark:text-blue-200 mt-2 mb-1">
          {post.title}
        </CardTitle>
        <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-2">
          {post.excerpt}
        </CardDescription>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
          <span>{post.date}</span>
          <span>By {post.author}</span>
          <span>{post.readingTime}</span>
        </div>
      </CardHeader>
    </Card>
  );
}
