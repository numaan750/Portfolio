'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileText, Briefcase, BookOpen, Plus, ArrowUpRight } from 'lucide-react';
import api from '@/lib/api';

export default function DashboardHome() {
  const [stats, setStats] = useState({ blogs: 0, projects: 0, casestudies: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [blogsRes, projectsRes, caseStudiesRes] = await Promise.all([
          api.get('/api/blogs'),
          api.get('/api/projects'),
          api.get('/api/casestudies'),
        ]);
        setStats({
          blogs: blogsRes.data.length || 0,
          projects: projectsRes.data.length || 0,
          casestudies: caseStudiesRes.data.length || 0,
        });
      } catch (err) {
        console.error('Error fetching statistics:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Blogs',
      description: 'Write, edit, and publish articles.',
      count: stats.blogs,
      href: '/dashboard/blogs',
      createHref: '/dashboard/blogs/create',
      icon: FileText,
      color: 'from-purple-500/20 to-purple-700/20',
      border: 'border-purple-500/30',
      textColor: 'text-purple-400',
    },
    {
      title: 'Projects',
      description: 'Showcase your development work.',
      count: stats.projects,
      href: '/dashboard/projects',
      createHref: '/dashboard/projects/create',
      icon: Briefcase,
      color: 'from-pink-500/20 to-pink-700/20',
      border: 'border-pink-500/30',
      textColor: 'text-pink-400',
    },
    {
      title: 'Case Studies',
      description: 'Detailed analysis of specific projects.',
      count: stats.casestudies,
      href: '/dashboard/casestudies',
      createHref: '/dashboard/casestudies/create',
      icon: BookOpen,
      color: 'from-indigo-500/20 to-indigo-700/20',
      border: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
    },
  ];

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard Overview</h1>
        <p className="text-sm text-zinc-400 mt-1">Manage and monitor all dynamic content on your portfolio website</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all hover:scale-[1.02] duration-300 border ${card.border}`}
            >
              {/* Card accent bg */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} blur-3xl pointer-events-none rounded-full`} />

              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-zinc-900 border border-zinc-800 ${card.textColor}`}>
                  <Icon size={24} />
                </div>
                <div className="text-4xl font-extrabold text-white tracking-tight">
                  {card.count}
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-1">{card.title}</h2>
              <p className="text-sm text-zinc-400 mb-6">{card.description}</p>

              <div className="flex items-center gap-3">
                <Link
                  href={card.href}
                  className="flex-1 text-center bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  Manage <ArrowUpRight size={16} />
                </Link>
                <Link
                  href={card.createHref}
                  className="p-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors"
                  title={`Add new ${card.title}`}
                >
                  <Plus size={18} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Quick Tips or Info Panel */}
      <div className="glass-panel rounded-2xl p-6 border border-zinc-800/80">
        <h3 className="text-lg font-bold text-zinc-200 mb-2">Welcome to your new portfolio engine!</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          This admin panel connects securely to your MongoDB database using JWT authorization. Any additions, updates, or deletions you make to your blogs, projects, or case studies will be immediately populated to the public API and instantly reflected on your live portfolio.
        </p>
      </div>
    </div>
  );
}
