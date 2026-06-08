'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, Search, Calendar } from 'lucide-react';
import api from '@/lib/api';
import { richTextToPlainText } from '@/lib/richText';

interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
}

export default function CaseStudiesList() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCaseStudies = async () => {
    try {
      const { data } = await api.get('/api/admin/casestudies');
      setCaseStudies(data);
    } catch (err) {
      console.error('Error fetching case studies:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    try {
      await api.delete(`/api/admin/casestudies/${slug}`);
      setCaseStudies(caseStudies.filter(cs => cs.slug !== slug));
    } catch (err) {
      console.error('Error deleting case study:', err);
      alert('Failed to delete case study.');
    }
  };

  const filteredCaseStudies = caseStudies.filter(cs =>
    cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    richTextToPlainText(cs.description).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Manage Case Studies</h1>
          <p className="text-sm text-zinc-400 mt-1">Write in-depth engineering breakdowns and project retrospectives</p>
        </div>
        <Link
          href="/dashboard/casestudies/create"
          className="gradient-bg hover:opacity-90 active:scale-[0.98] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <Plus size={18} /> Add Case Study
        </Link>
      </div>

      {/* Search panel */}
      <div className="flex items-center gap-3 glass-panel rounded-xl p-3 border border-zinc-800/80">
        <Search className="text-zinc-500 ml-2" size={18} />
        <input
          type="text"
          placeholder="Search case studies by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-zinc-500 focus:ring-0"
        />
      </div>

      {loading ? (
        <div className="flex h-48 items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      ) : filteredCaseStudies.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 border border-zinc-800/80 text-center">
          <p className="text-zinc-400">No case studies found. Write your first case study!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs._id}
              className="glass-panel rounded-xl p-5 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all hover:border-zinc-700/80 duration-200"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white leading-snug">{cs.title}</h3>
                  <span className="text-[10px] bg-zinc-850 text-zinc-300 font-semibold px-2 py-0.5 rounded">
                    /{cs.slug}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                  {richTextToPlainText(cs.description)}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Calendar size={13} className="text-purple-400" />
                  {new Date(cs.createdAt).toLocaleDateString()}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/dashboard/casestudies/${cs.slug}`}
                  className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-all"
                  title="Edit case study"
                >
                  <Edit2 size={16} />
                </Link>
                <button
                  onClick={() => handleDelete(cs.slug)}
                  className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-red-950 rounded-lg text-zinc-400 hover:text-red-400 transition-all cursor-pointer"
                  title="Delete case study"
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
