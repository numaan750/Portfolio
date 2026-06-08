'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, Search, Calendar, User } from 'lucide-react';
import api from '@/lib/api';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  author: string;
  createdAt: string;
}

export default function BlogsList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      // Admin endpoints read from /api/admin/blogs
      const { data } = await api.get('/api/admin/blogs');
      setBlogs(data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    try {
      await api.delete(`/api/admin/blogs/${slug}`);
      setBlogs(blogs.filter(blog => blog.slug !== slug));
    } catch (err) {
      console.error('Error deleting blog:', err);
      alert('Failed to delete blog.');
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Manage Blogs</h1>
          <p className="text-sm text-zinc-400 mt-1">Publish news, insights, and coding tips</p>
        </div>
        <Link
          href="/dashboard/blogs/create"
          className="gradient-bg hover:opacity-90 active:scale-[0.98] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <Plus size={18} /> Add Blog Post
        </Link>
      </div>

      {/* Search and filter panel */}
      <div className="flex items-center gap-3 glass-panel rounded-xl p-3 border border-zinc-800/80">
        <Search className="text-zinc-500 ml-2" size={18} />
        <input
          type="text"
          placeholder="Search by title or slug..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-zinc-500 focus:ring-0"
        />
      </div>

      {loading ? (
        <div className="flex h-48 items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 border border-zinc-800/80 text-center">
          <p className="text-zinc-400">No blog posts found. Write your first one!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="glass-panel rounded-xl p-5 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all hover:border-zinc-700/80 duration-200"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white leading-snug">{blog.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <User size={13} className="text-purple-400" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-purple-400" />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">
                    /{blog.slug}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/dashboard/blogs/${blog.slug}`}
                  className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-all"
                  title="Edit post"
                >
                  <Edit2 size={16} />
                </Link>
                <button
                  onClick={() => handleDelete(blog.slug)}
                  className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-red-950 rounded-lg text-zinc-400 hover:text-red-400 transition-all cursor-pointer"
                  title="Delete post"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
