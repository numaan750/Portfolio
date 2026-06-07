'use client';

import { useState, useEffect } from 'react';
import { getReviews, deleteReview } from './actions';
import { Trash2, MessageSquare, Star } from 'lucide-react';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    setLoading(true);
    const data = await getReviews();
    setReviews(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id: string | number) => {
    if (!confirm('Are you sure you want to delete this review?')) return;
    const res = await deleteReview(id as string);
    if (res.success) {
      setReviews(reviews.filter(r => r.id !== id));
    } else {
      alert(res.error || 'Failed to delete review');
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
            View and manage user reviews submitted from your website's case studies.
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.length === 0 ? (
          <div className="glass-panel p-12 text-center text-zinc-400 border border-zinc-800/80 rounded-2xl flex flex-col items-center gap-4">
            <MessageSquare size={48} className="text-zinc-600" />
            <p className="text-lg">No reviews found.</p>
            <p className="text-sm text-zinc-500">When users submit reviews, they will appear here.</p>
          </div>
        ) : (
          reviews.map((review: any) => (
            <div key={review.id} className="glass-panel p-6 sm:p-8 border border-zinc-800/80 rounded-2xl flex flex-col sm:flex-row justify-between items-start gap-6 transition-all hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] relative overflow-hidden group">
              {/* Accent blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl pointer-events-none rounded-full group-hover:bg-purple-500/10 transition-colors" />

              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{review.name}</h3>
                  <span className="text-xs text-zinc-400 font-medium px-2.5 py-1 bg-zinc-900 rounded-md border border-zinc-800/80">
                    {review.role} {review.company ? <span className="text-zinc-500">@ {review.company}</span> : ''}
                  </span>
                </div>
                
                <p className="text-zinc-300 text-base leading-relaxed italic bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">"{review.review}"</p>
                
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
                  {review.caseStudyId && (
                    <span className="bg-purple-500/10 text-purple-400 px-2.5 py-1.5 rounded-md border border-purple-500/20">
                      Case Study: {review.caseStudyId}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleDelete(review.id)}
                className="p-3 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all border border-zinc-800 hover:border-red-500/30 sm:mt-0 mt-2"
                title="Delete Review"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
