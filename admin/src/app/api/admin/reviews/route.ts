import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(req: Request) {
  return forward(req, `${BACKEND_URL}/admin/reviews`);
}

export async function POST(req: Request) {
  return forward(req, `${BACKEND_URL}/admin/reviews`, 'POST');
}

async function forward(req: Request, url: string, method = 'GET') {
  if (!BACKEND_URL) return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });

  const authHeader = req.headers.get('authorization') || extractBearerFromCookie(req.headers.get('cookie') || '');
  const body = method === 'POST' ? await req.json().catch(() => ({})) : undefined;
  const res = await fetch(url, {
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