import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(req: Request) {
  if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });

  const cookieToken = req.headers.get('cookie') || '';
  const authHeader = extractBearerFromCookie(cookieToken);

  const res = await fetch(`${BACKEND_URL}/admin/blogs`, {
    headers: {
      'Content-Type': 'application/json',
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
    cache: 'no-store',
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

export async function POST(req: Request) {
  if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });

  const cookieToken = req.headers.get('cookie') || '';
  const authHeader = extractBearerFromCookie(cookieToken);
  const body = await req.json().catch(() => ({}));

  const res = await fetch(`${BACKEND_URL}/admin/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

function extractBearerFromCookie(cookie: string) {
  // Expecting: token=<jwt>;
  const match = cookie.match(/(?:^|;\s*)token=([^;]+)/);
  const token = match?.[1];
  if (!token) return null;
  return `Bearer ${decodeURIComponent(token)}`;
}

