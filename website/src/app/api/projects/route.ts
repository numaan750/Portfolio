import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET() {
  if (!BACKEND_URL) {
    return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });
  }

  const res = await fetch(`${BACKEND_URL}/api/projects`, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return NextResponse.json({ error: 'Failed to fetch projects', details: text }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}

