import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function POST(req: Request) {
  if (!BACKEND_URL) {
    return NextResponse.json({ error: 'BACKEND_URL not set' }, { status: 500 });
  }

  const authHeader = req.headers.get('authorization') || extractBearerFromCookie(req.headers.get('cookie') || '');

  try {
    const formData = await req.formData();

    // Forward the multipart/form-data to Express backend
    const res = await fetch(`${BACKEND_URL}/admin/uploads/images`, {
      method: 'POST',
      headers: {
        ...(authHeader ? { Authorization: authHeader } : {}),
      },
      body: formData,
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error('Image upload route error:', err);
    return NextResponse.json({ error: 'Image upload failed' }, { status: 500 });
  }
}

function extractBearerFromCookie(cookie: string) {
  const match = cookie.match(/(?:^|;\s*)token=([^;]+)/);
  const token = match?.[1];
  if (!token) return null;
  return `Bearer ${decodeURIComponent(token)}`;
}
