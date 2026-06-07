import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const reviewsFilePath = path.join(process.cwd(), 'src', 'lib', 'data', 'reviews.json');

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));
    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }
    const data = fs.readFileSync(reviewsFilePath, 'utf8');
    const reviews = JSON.parse(data);
    const filtered = reviews.filter((r: any) => r.id !== id);
    if (filtered.length === reviews.length) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    fs.writeFileSync(reviewsFilePath, JSON.stringify(filtered, null, 2), 'utf8');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
