'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import api from '@/lib/api';
import RichTextEditor from '@/components/RichTextEditor';
import FeaturedImageUpload from '@/components/FeaturedImageUpload';
import { hasRichTextContent } from '@/lib/richText';

export default function EditProject() {
  const router = useRouter();
  const params = useParams();
  const currentSlug = params.slug as string;

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaImage, setMetaImage] = useState('');
  const [metaImageAlt, setMetaImageAlt] = useState('');
  const [category, setCategory] = useState('');
  const [techInput, setTechInput] = useState('');
  const [gradient, setGradient] = useState('');
  const [featured, setFeatured] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await api.get(`/api/admin/projects/${currentSlug}`);
        setTitle(data.title);
        setSlug(data.slug);
        setDescription(data.description || '');
        setUrl(data.url || '');
         setImageUrl(data.imageUrl || '');
        setImageAlt(data.imageAlt || '');
        setMetaTitle(data.metaTitle || '');
        setMetaDescription(data.metaDescription || '');
        setMetaImage(data.metaImage || '');
        setMetaImageAlt(data.metaImageAlt || '');
        setCategory(data.category || 'AI / Full-Stack');
        setTechInput(data.tech ? data.tech.join(', ') : '');
        setGradient(data.gradient || 'from-violet-500 to-pink-500');
        setFeatured(data.featured || false);
      } catch (err: any) {
        console.error('Error fetching project:', err);
        setError('Failed to fetch project details.');
      } finally {
        setLoading(false);
      }
    };
    if (currentSlug) fetchProject();
  }, [currentSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasRichTextContent(description)) {
      setError('Please write a project description before saving.');
      return;
    }
    setSaving(true);
    setError('');

    // Parse tech input to array of strings
    const techArray = techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      await api.put(`/api/admin/projects/${currentSlug}`, {
        title,
        slug,
        description,
        url,
        imageUrl,
        imageAlt,
        metaTitle,
        metaDescription,
        metaImage,
        metaImageAlt,
        category,
        tech: techArray,
        gradient,
        featured,
      });
      router.push('/dashboard/projects');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to update project.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await api.delete(`/api/admin/projects/${currentSlug}`);
      router.push('/dashboard/projects');
    } catch (err) {
      console.error(err);
      setError('Failed to delete project.');
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
            href="/dashboard/projects"
            className="p-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Edit Project</h1>
            <p className="text-sm text-zinc-400 mt-1">Modify or remove your project showcase</p>
          </div>
        </div>

        <button
          onClick={handleDelete}
          className="px-4 py-2.5 bg-red-950/20 hover:bg-red-900/30 border border-red-500/30 text-red-400 hover:text-red-300 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <Trash2 size={16} /> Delete Project
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
              Project Title
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
              Live URL (Optional)
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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

        {/* SEO Metadata Section */}
        <div className="border-t border-zinc-800/80 pt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white">SEO / Metadata Settings</h3>
            <p className="text-xs text-zinc-400 mt-1">Configure meta tags for Google Search and social previews</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Meta Title
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="SEO Title (Google Search)"
                className="w-full rounded-lg glass-input p-3 text-sm"
              />
            </div>

            <div>
              <FeaturedImageUpload
                imageUrl={metaImage}
                imageAlt={metaImageAlt}
                onImageUrlChange={setMetaImage}
                onImageAltChange={setMetaImageAlt}
                label="SEO Meta / OpenGraph Image"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Meta Description
            </label>
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Brief description summarizing the project (approx. 150-160 characters)..."
              rows={3}
              className="w-full rounded-lg glass-input p-3 text-sm bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-purple-500 text-white"
            />
          </div>
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
