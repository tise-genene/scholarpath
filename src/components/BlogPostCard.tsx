'use client';

import Link from 'next/link';

type Props = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
};

export function BlogPostCard({ id, title, content, imageUrl, publishedAt }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{new Date(publishedAt).toLocaleDateString()}</p>
        <p className="mt-2 text-sm line-clamp-3">{content}</p>
        <Link href={`/blog/${id}`} className="text-blue-600 mt-2 block hover:underline">
          Read more →
        </Link>
      </div>
    </div>
  );
}
