import { fetchPosts } from "@/app/lib/strapi";
import BlogPostCard from "@/components/BlogPostCard";

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post: any) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
