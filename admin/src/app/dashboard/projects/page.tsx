'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, Search, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';
import api from '@/lib/api';
import { richTextToPlainText } from '@/lib/richText';

interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get('/admin/projects');
      setProjects(data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await api.delete(`/admin/projects/${slug}`);
      setProjects(projects.filter(project => project.slug !== slug));
    } catch (err) {
      console.error('Error deleting project:', err);
      alert('Failed to delete project.');
    }
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    richTextToPlainText(project.description).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Manage Projects</h1>
          <p className="text-sm text-zinc-400 mt-1">Showcase your portfolio, apps, and packages</p>
        </div>
        <Link
          href="/dashboard/projects/create"
          className="gradient-bg hover:opacity-90 active:scale-[0.98] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <Plus size={18} /> Add Project
        </Link>
      </div>

      {/* Search panel */}
      <div className="flex items-center gap-3 glass-panel rounded-xl p-3 border border-zinc-800/80">
        <Search className="text-zinc-500 ml-2" size={18} />
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-zinc-500 focus:ring-0"
        />
      </div>

      {loading ? (
        <div className="flex h-48 items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 border border-zinc-800/80 text-center">
          <p className="text-zinc-400">No projects found. Add your first project!</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="glass-panel rounded-2xl border border-zinc-800/60 flex flex-col justify-between overflow-hidden transition-all hover:scale-[1.01] hover:border-zinc-700/80 duration-200"
            >
              <div>
                {/* Project Image Preview */}
                <div className="h-44 w-full bg-zinc-900 border-b border-zinc-800/80 relative flex items-center justify-center overflow-hidden">
                  {project.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={project.imageUrl} 
                      alt={project.imageAlt || project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-zinc-600">
                      <ImageIcon size={32} />
                      <span className="text-xs">No image provided</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                    <span className="text-[10px] bg-zinc-800 text-zinc-300 font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider">
                      /{project.slug}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                    {richTextToPlainText(project.description) || 'No description provided.'}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-zinc-800/20 mt-2">
                <div className="flex items-center gap-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-xs font-semibold"
                    >
                      <LinkIcon size={12} /> Live Link
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/dashboard/projects/${project.slug}`}
                    className="p-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold px-3 py-2"
                  >
                    <Edit2 size={13} /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(project.slug)}
                    className="p-2 bg-zinc-900 border border-zinc-800 hover:border-red-950 rounded-lg text-zinc-400 hover:text-red-400 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold px-3 py-2"
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
