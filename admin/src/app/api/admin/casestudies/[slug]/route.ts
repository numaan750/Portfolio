import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(req: Request, context: { params: Promise<{ slug: string }> }) {
  if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });

  const { slug } = await context.params;

  const authHeader = extractBearerFromCookie(req.headers.get('cookie') || '');

  const res = await fetch(`${BACKEND_URL}/admin/casestudies/${encodeURIComponent(slug)}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
    cache: 'no-store',
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

export async function PUT(req: Request, context: { params: Promise<{ slug: string }> }) {
  if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });

  const { slug } = await context.params;

  const authHeader = extractBearerFromCookie(req.headers.get('cookie') || '');
  const body = await req.json().catch(() => ({}));

  const res = await fetch(`${BACKEND_URL}/admin/casestudies/${encodeURIComponent(slug)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE(req: Request, context: { params: Promise<{ slug: string }> }) {
  if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });

  const { slug } = await context.params;

  const authHeader = extractBearerFromCookie(req.headers.get('cookie') || '');

  const res = await fetch(`${BACKEND_URL}/admin/casestudies/${encodeURIComponent(slug)}`, {
    method: 'DELETE',
    headers: {
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

function extractBearerFromCookie(cookie: string) {
  const match = cookie.match(/(?:^|;\s*)token=([^;]+)/);
  const token = match?.[1];
  if (!token) return null;
  return `Bearer ${decodeURIComponent(token)}`;
}

