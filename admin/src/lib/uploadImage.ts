import api from '@/lib/api';

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const { data } = await api.post('/api/admin/uploads/images', formData);
    
    // Return the optimized URL which is permanent Cloudinary URL
    if (!data.url) {
      throw new Error('No image URL returned from server');
    }
    
    return data.url;
  } catch (error) {
    console.error('Image upload error:', error);
    throw error;
  }
}

// Validate that an image URL is still accessible
export async function validateImage(url: string) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Image validation error:', error);
    return false;
  }
}
