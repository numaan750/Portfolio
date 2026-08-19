import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET() {
  try {
    if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });
    const response = await fetch(`${BACKEND_URL}/api/reviews`, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    const data = await response.json();
    return NextResponse.json(data, {
      status: response.status,
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
