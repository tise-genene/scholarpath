'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
  video_embed: string;
  category: {
    name: string;
  };
  thumbnailUrl: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/posts?populate=*');
        interface ApiResponse {
          data: any[];
        }

        const rawData = (res.data as ApiResponse).data;

        const parsedPosts = rawData.map((post: any) => {
          const title = post.title || post.attributes?.title || 'Untitled';
          const content = post.content || post.attributes?.content || '';
          const video_embed = post.video_embed || post.attributes?.video_embed || '';
          const category = post.category?.name || post.attributes?.category?.name || 'Uncategorized';

          // 🧠 Handle image safely
          const image = post.downloads?.[0]?.url ||
                        post.downloads?.[0]?.formats?.thumbnail?.url ||
                        post.attributes?.downloads?.[0]?.url ||
                        post.attributes?.downloads?.[0]?.formats?.thumbnail?.url ||
                        '';

          const fullImageUrl = image
            ? `http://localhost:1337${image}`
            : 'https://via.placeholder.com/300x200?text=No+Image';

          return {
            id: post.id,
            title,
            content,
            video_embed,
            category: { name: category },
            thumbnailUrl: fullImageUrl,
          };
        });

        setPosts(parsedPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-xl shadow p-4 bg-white hover:shadow-lg transition-all">
            <img
              src={post.thumbnailUrl}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-1">Category: {post.category.name}</p>
            <p className="text-gray-700 text-sm line-clamp-3">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

