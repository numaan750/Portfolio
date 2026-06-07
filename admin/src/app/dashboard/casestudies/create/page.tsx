'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import api from '@/lib/api';
import RichTextEditor from '@/components/RichTextEditor';
import FeaturedImageUpload from '@/components/FeaturedImageUpload';
import { hasRichTextContent } from '@/lib/richText';

export default function CreateCaseStudy() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasRichTextContent(description) || !hasRichTextContent(content)) {
      setError('Please complete both the summary and detailed content.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      await api.post('/admin/casestudies', {
        title,
        slug,
        description,
        content,
        imageUrl,
        imageAlt,
      });
      router.push('/dashboard/casestudies');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to create case study. Ensure the slug is unique.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/casestudies"
          className="p-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Create Case Study</h1>
          <p className="text-sm text-zinc-400 mt-1">Compose a new project breakdown</p>
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
              Case Study Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="e.g. Scaling a Real-Time Chat App"
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
              placeholder="e.g. scaling-a-real-time-chat-app"
              className="w-full rounded-lg glass-input p-3 text-sm"
            />
          </div>
        </div>

        <FeaturedImageUpload
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          onImageUrlChange={setImageUrl}
          onImageAltChange={setImageAlt}
          label="Case Study Featured Image"
        />

        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Description / Summary
          </label>
          <RichTextEditor
            value={description}
            onChange={setDescription}
            placeholder="A brief 1-2 sentence description explaining the case study topic..."
            minHeight={150}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Detailed Content
          </label>
          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Describe the architectural design, bottlenecks encountered, optimizations, and results..."
            minHeight={360}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800/80">
          <Link
            href="/dashboard/casestudies"
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
            {loading ? 'Creating...' : 'Create Case Study'}
          </button>
        </div>
      </form>
    </div>
  );
}
