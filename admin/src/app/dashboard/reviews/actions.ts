'use server';

import fs from 'fs';
import path from 'path';

// Point to the website's reviews.json
const REVIEWS_FILE = 'd:/portfolio-numaan/website/src/lib/data/reviews.json';

export async function getReviews() {
  try {
    if (!fs.existsSync(REVIEWS_FILE)) {
      return [];
    }
    const data = fs.readFileSync(REVIEWS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading reviews:', error);
    return [];
  }
}

export async function deleteReview(id: string) {
  try {
    if (!fs.existsSync(REVIEWS_FILE)) {
      return { success: false, error: 'Reviews file not found' };
    }
    const data = fs.readFileSync(REVIEWS_FILE, 'utf8');
    let reviews = JSON.parse(data);
    reviews = reviews.filter((r: any) => r.id !== id);
    fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
    return { success: true };
  } catch (error) {
    console.error('Error deleting review:', error);
    return { success: false, error: 'Failed to delete review' };
  }
}
