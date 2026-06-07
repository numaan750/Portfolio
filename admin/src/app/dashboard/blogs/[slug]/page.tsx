'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import api from '@/lib/api';
import RichTextEditor from '@/components/RichTextEditor';
import FeaturedImageUpload from '@/components/FeaturedImageUpload';
import { hasRichTextContent } from '@/lib/richText';

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const currentSlug = params.slug as string;

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await api.get(`/admin/blogs/${currentSlug}`);
        setTitle(data.title);
        setSlug(data.slug);
        setContent(data.content);
        setAuthor(data.author || 'Admin');
        setImageUrl(data.imageUrl || '');
        setImageAlt(data.imageAlt || '');
      } catch (err: any) {
        console.error('Error fetching blog:', err);
        setError('Failed to fetch blog post details.');
      } finally {
        setLoading(false);
      }
    };
    if (currentSlug) fetchBlog();
  }, [currentSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasRichTextContent(content)) {
      setError('Please write the blog content before saving.');
      return;
    }
    setSaving(true);
    setError('');

    try {
      await api.put(`/admin/blogs/${currentSlug}`, {
        title,
        slug,
        content,
        author,
        imageUrl,
        imageAlt,
      });
      router.push('/dashboard/blogs');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to update blog post.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await api.delete(`/admin/blogs/${currentSlug}`);
      router.push('/dashboard/blogs');
    } catch (err) {
      console.error(err);
      setError('Failed to delete blog post.');
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/blogs"
            className="p-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Edit Blog Post</h1>
            <p className="text-sm text-zinc-400 mt-1">Modify or remove your article</p>
          </div>
        </div>

        <button
          onClick={handleDelete}
          className="px-4 py-2.5 bg-red-950/20 hover:bg-red-900/30 border border-red-500/30 text-red-400 hover:text-red-300 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <Trash2 size={16} /> Delete Post
        </button>
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
              onChange={(e) => setTitle(e.target.value)}
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
            disabled={saving}
            className="px-5 py-2.5 gradient-bg hover:opacity-90 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-500/20 disabled:opacity-50"
          >
            <Save size={18} />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
