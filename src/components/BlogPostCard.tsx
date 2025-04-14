import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ post }: { post: any }) {
  const { title, slug, content, image } = post;
  const imageUrl = image?.data?.attributes?.url;

  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-xl transition bg-white">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={300}
          className="rounded-md mb-4"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">
        {content?.substring(0, 120)}...
      </p>
      <Link href={`/blog/${slug}`} className="text-blue-600 font-semibold hover:underline">
        Read More →
      </Link>
    </div>
  );
}
