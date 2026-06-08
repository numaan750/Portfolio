'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import api from '@/lib/api';
import RichTextEditor from '@/components/RichTextEditor';
import FeaturedImageUpload from '@/components/FeaturedImageUpload';
import { hasRichTextContent } from '@/lib/richText';

export default function CreateProject() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [category, setCategory] = useState('AI / Full-Stack');
  const [techInput, setTechInput] = useState('');
  const [gradient, setGradient] = useState('from-violet-500 to-pink-500');
  const [featured, setFeatured] = useState(false);
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
    if (!hasRichTextContent(description)) {
      setError('Please write a project description before creating it.');
      return;
    }
    setLoading(true);
    setError('');

    // Parse tech input to array of strings
    const techArray = techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      await api.post('/api/admin/projects', {
        title,
        slug,
        description,
        url,
        imageUrl,
        imageAlt,
        category,
        tech: techArray,
        gradient,
        featured,
      });
      router.push('/dashboard/projects');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to create project. Ensure the slug is unique.');
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'AI / Full-Stack',
    'E-Commerce',
    'SaaS / Productivity',
    'Dashboard / Admin',
    'Real Estate',
    'General',
  ];

  const gradients = [
    { label: 'Purple to Pink', value: 'from-violet-500 to-pink-500' },
    { label: 'Cyan to Blue', value: 'from-cyan-500 to-blue-500' },
    { label: 'Emerald to Teal', value: 'from-emerald-500 to-teal-500' },
    { label: 'Orange to Red', value: 'from-orange-500 to-red-500' },
    { label: 'Indigo to Purple', value: 'from-indigo-500 to-purple-500' },
    { label: 'Sky to Indigo', value: 'from-sky-500 to-indigo-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/projects"
          className="p-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Create Project</h1>
          <p className="text-sm text-zinc-400 mt-1">Showcase a new coding project</p>
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
              Project Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="e.g. Portfolio Website"
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
              placeholder="e.g. portfolio-website"
              className="w-full rounded-lg glass-input p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Live URL (Optional)
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-lg glass-input p-3 text-sm"
            />
          </div>
        </div>

        <FeaturedImageUpload
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          onImageUrlChange={setImageUrl}
          onImageAltChange={setImageAlt}
          label="Project Featured Image"
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg glass-input p-3 text-sm bg-zinc-900 border border-zinc-800"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-zinc-950 text-white">
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Gradient Styling
            </label>
            <select
              value={gradient}
              onChange={(e) => setGradient(e.target.value)}
              className="w-full rounded-lg glass-input p-3 text-sm bg-zinc-900 border border-zinc-800"
            >
              {gradients.map((g) => (
                <option key={g.value} value={g.value} className="bg-zinc-950 text-white">
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center pt-6">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 rounded border-zinc-800 text-purple-600 focus:ring-purple-500 bg-zinc-900"
              />
              <span className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Featured Project
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Tech Stack (Comma-separated)
          </label>
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="e.g. Next.js, Node.js, Express, MongoDB, Tailwind"
            className="w-full rounded-lg glass-input p-3 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Description
          </label>
          <RichTextEditor
            value={description}
            onChange={setDescription}
            placeholder="Tell the visitors about the technology stack, challenges, and solutions in this project..."
            minHeight={240}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800/80">
          <Link
            href="/dashboard/projects"
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
            {loading ? 'Creating...' : 'Create Project'}
          </button>
        </div>
      </form>
    </div>
  );
}
