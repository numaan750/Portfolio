'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import api from '@/lib/api';
import RichTextEditor from '@/components/RichTextEditor';
import FeaturedImageUpload from '@/components/FeaturedImageUpload';
import { hasRichTextContent } from '@/lib/richText';

export default function CreateBlog() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Admin');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasRichTextContent(content)) {
      setError('Please write the blog content before publishing.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      await api.post('/api/admin/blogs', { title, slug, content, author, imageUrl, imageAlt });
      router.push('/dashboard/blogs');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to create blog post. Ensure the slug is unique.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/blogs"
          className="p-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Create Blog Post</h1>
          <p className="text-sm text-zinc-400 mt-1">Compose and publish a new article</p>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800/80">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="e.g. My First Blog Post"
              className="w-full rounded-lg glass-input p-3 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Slug
            </label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="e.g. my-first-blog-post"
              className="w-full rounded-lg glass-input p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Author
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Admin"
              className="w-full rounded-lg glass-input p-3 text-sm"
            />
          </div>
        </div>

        <FeaturedImageUpload
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          onImageUrlChange={setImageUrl}
          onImageAltChange={setImageAlt}
          label="Blog Featured Image"
        />

        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Content
          </label>
          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Write your blog post content here..."
            minHeight={360}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800/80">
          <Link
            href="/dashboard/blogs"
            className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-sm font-semibold rounded-xl text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 gradient-bg hover:opacity-90 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-500/20 disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? 'Creating...' : 'Publish Post'}
          </button>
        </div>
      </form>
    </div>
  );
}
