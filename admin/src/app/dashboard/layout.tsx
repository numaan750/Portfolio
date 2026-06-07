'use client';
import { useApp } from '@/context/AppContext';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText, Briefcase, BookOpen, MessageSquare, LogOut, Menu, X } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useApp();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Client-side authentication check
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Clear cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.push('/login');
  };

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Blogs', href: '/dashboard/blogs', icon: FileText },
    { name: 'Projects', href: '/dashboard/projects', icon: Briefcase },
    { name: 'Case Studies', href: '/dashboard/casestudies', icon: BookOpen },
    { name: 'Reviews', href: '/dashboard/reviews', icon: MessageSquare },
  ];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#09090b]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#09090b] text-[#f4f4f5]">
      {/* Mobile Sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md transition-transform duration-300 md:static md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-zinc-800/80">
          <Link href="/dashboard" className="text-xl font-bold tracking-tight gradient-text">
            Admin Console
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-zinc-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/15 text-purple-400 border-l-2 border-purple-500'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-zinc-800/80 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-x-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-800/80 px-6 bg-zinc-950/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-zinc-400 hover:text-white cursor-pointer"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-300">
              {pathname === '/dashboard' ? 'Overview' : pathname.split('/').slice(2).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' / ')}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-xs font-semibold text-zinc-300">Numaan Ali</p>
              <p className="text-[10px] text-purple-400 uppercase tracking-wider">Administrator</p>
            </div>
            <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center font-bold text-white text-sm">
              NA
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
