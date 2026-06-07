import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  if (!BACKEND_URL) {
    return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });
  }

    const { slug } = await context.params;

  const res = await fetch(`${BACKEND_URL}/api/casestudies/${encodeURIComponent(slug)}`, {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return NextResponse.json({ error: 'Failed to fetch case study', details: text }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

