import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  return forward(req, context, 'PUT');
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  return forward(req, context, 'DELETE');
}

async function forward(req: Request, context: { params: Promise<{ id: string }> }, method: 'PUT' | 'DELETE') {
  if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });

  const { id } = await context.params;
  const authHeader = req.headers.get('authorization') || extractBearerFromCookie(req.headers.get('cookie') || '');
  const body = method === 'PUT' ? await req.json().catch(() => ({})) : undefined;
  const res = await fetch(`${BACKEND_URL}/admin/reviews/${encodeURIComponent(id)}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(authHeader ? { Authorization: authHeader } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

function extractBearerFromCookie(cookie: string) {
  const match = cookie.match(/(?:^|;\s*)token=([^;]+)/);
  const token = match?.[1];
  return token ? `Bearer ${decodeURIComponent(token)}` : null;
}