import api from '@/lib/api';

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await api.post('/api/admin/uploads/images', formData);
  return data.url as string;
}
