import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(
  _req: Request,
  context: { params: { slug: string } }
) {
  if (!BACKEND_URL) {
    return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });
  }

  const { slug } = context.params;
  const res = await fetch(`${BACKEND_URL}/api/blogs/${encodeURIComponent(slug)}`, {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return NextResponse.json({ error: 'Failed to fetch blog', details: text }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

