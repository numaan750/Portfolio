import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const reviewsFilePath = path.join(process.cwd(), 'src', 'lib', 'data', 'reviews.json');

// Ensure the file exists
if (!fs.existsSync(reviewsFilePath)) {
  fs.writeFileSync(reviewsFilePath, JSON.stringify([]), 'utf8');
}

export async function GET() {
  const data = fs.readFileSync(reviewsFilePath, 'utf8');
  const reviews = JSON.parse(data);
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const newReview = await request.json();
    const data = fs.readFileSync(reviewsFilePath, 'utf8');
    const reviews = JSON.parse(data);
    // Simple validation
    if (!newReview.name || !newReview.content) {
      return NextResponse.json({ error: 'Missing name or content' }, { status: 400 });
    }
    reviews.push({ id: Date.now(), ...newReview });
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2), 'utf8');
    return NextResponse.json({ success: true, review: newReview }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
