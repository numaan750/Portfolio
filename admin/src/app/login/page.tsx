'use client';

import { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-zinc-950 to-black pointer-events-none" />
      <div className="w-full max-w-md glass-panel rounded-2xl p-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight gradient-text">Admin Panel</h2>
          <p className="mt-2 text-sm text-zinc-400">Sign in to manage your portfolio</p>
        </div>
        {error && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com" className="w-full rounded-lg glass-input p-3 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" className="w-full rounded-lg glass-input p-3 text-sm" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full rounded-lg gradient-bg px-4 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50 text-sm cursor-pointer">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}