'use client';

import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Trash2, MessageSquare, Star, Plus, X, Edit2 } from 'lucide-react';

interface ReviewFormData {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const emptyForm: ReviewFormData = { name: '', role: 'Client', company: '', content: '', rating: 5 };

export default function ReviewsPage() {
  const { reviews, reviewsLoading: loading, fetchReviews, createReview, updateReview, deleteReview } = useApp();
  const [form, setForm] = useState<ReviewFormData>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchReviews().catch(() => alert('Failed to load reviews.'));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;
    try {
      await deleteReview(id);
    } catch {
      alert('Failed to delete review.');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    try {
      if (editingId) await updateReview(editingId, form);
      else await createReview(form);
      setForm(emptyForm);
      setEditingId(null);
      setFormOpen(false);
    } catch {
      alert('Failed to save review.');
    } finally {
      setSaving(false);
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
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <MessageSquare className="text-purple-500" size={32} />
            Reviews Management
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Add and manage the testimonials shown on your website.
          </p>
        </div>
        <button onClick={() => { setEditingId(null); setForm(emptyForm); setFormOpen(true); }} className="gradient-bg text-white text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2">
          <Plus size={18} /> Add Review
        </button>
      </div>

      {formOpen && (
        <form onSubmit={handleSubmit} className="glass-panel p-6 border border-zinc-800/80 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">{editingId ? 'Edit Review' : 'Add Review'}</h2>
            <button type="button" onClick={() => setFormOpen(false)} className="text-zinc-400 hover:text-white"><X size={18} /></button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {(['name', 'role', 'company'] as const).map((field) => (
              <input key={field} required={field === 'name'} value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm text-white outline-none focus:border-purple-500" />
            ))}
            <input type="number" min="1" max="5" required value={form.rating} onChange={(event) => setForm({ ...form, rating: Number(event.target.value) })} placeholder="Rating" className="rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm text-white outline-none focus:border-purple-500" />
          </div>
          <textarea required rows={4} value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} placeholder="Review content" className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm text-white outline-none focus:border-purple-500" />
          <button disabled={saving} className="gradient-bg text-white text-sm font-semibold py-2.5 px-5 rounded-xl disabled:opacity-50">{saving ? 'Saving...' : editingId ? 'Update Review' : 'Save Review'}</button>
        </form>
      )}

      <div className="grid gap-6">
        {reviews.length === 0 ? (
          <div className="glass-panel p-12 text-center text-zinc-400 border border-zinc-800/80 rounded-2xl flex flex-col items-center gap-4">
            <MessageSquare size={48} className="text-zinc-600" />
            <p className="text-lg">No reviews found.</p>
            <p className="text-sm text-zinc-500">When users submit reviews, they will appear here.</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="glass-panel p-6 sm:p-8 border border-zinc-800/80 rounded-2xl flex flex-col sm:flex-row justify-between items-start gap-6 transition-all hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] relative overflow-hidden group">
              {/* Accent blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl pointer-events-none rounded-full group-hover:bg-purple-500/10 transition-colors" />

              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{review.name}</h3>
                  <span className="text-xs text-zinc-400 font-medium px-2.5 py-1 bg-zinc-900 rounded-md border border-zinc-800/80">
                    {review.role} {review.company ? <span className="text-zinc-500">@ {review.company}</span> : ''}
                  </span>
                </div>
                
                <p className="text-zinc-300 text-base leading-relaxed italic bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">&quot;{review.content}&quot;</p>
                
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 pt-2">
                  <div className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1.5 rounded-md border border-zinc-800">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                  {review.createdAt && (
                    <span className="bg-zinc-900 px-2.5 py-1.5 rounded-md border border-zinc-800">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2 sm:mt-0 mt-2">
                <button onClick={() => { setEditingId(review._id); setForm({ name: review.name, role: review.role || 'Client', company: review.company || '', content: review.content, rating: review.rating || 5 }); setFormOpen(true); }} className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-all border border-zinc-800" title="Edit Review">
                  <Edit2 size={20} />
                </button>
                <button onClick={() => handleDelete(review._id)} className="p-3 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all border border-zinc-800 hover:border-red-500/30" title="Delete Review">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
