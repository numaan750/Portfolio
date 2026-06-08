'use client';

import { useState } from 'react';
import { ImageUp, Loader2, Trash2 } from 'lucide-react';
import { uploadImage } from '@/lib/uploadImage';

function getUploadError(error: unknown) {
  const uploadError = error as { response?: { data?: { error?: string } } };
  return uploadError.response?.data?.error || 'Image upload failed.';
}

interface FeaturedImageUploadProps {
  imageUrl: string;
  imageAlt: string;
  onImageUrlChange: (value: string) => void;
  onImageAltChange: (value: string) => void;
  label?: string;
}

export default function FeaturedImageUpload({
  imageUrl,
  imageAlt,
  onImageUrlChange,
  onImageAltChange,
  label = 'Featured Image',
}: FeaturedImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    setUploading(true);
    setError('');
    try {
      onImageUrlChange(await uploadImage(file));
    } catch (uploadError: unknown) {
      setError(getUploadError(uploadError));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
        {label}
      </label>

      {imageUrl && (
        <div className="relative w-48 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-md">
          <div className="relative w-full aspect-[16/9]">
            <img
              src={imageUrl}
              alt={imageAlt || 'Image preview'}
              className="absolute inset-0 w-full h-full object-contain bg-zinc-950/30"
            />

            <button
              type="button"
              onClick={() => onImageUrlChange('')}
              className="absolute right-1.5 top-1.5 rounded-lg border border-red-500/30 bg-zinc-950/90 p-1.5 text-red-400 hover:text-red-300"
              title="Remove image"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      )}

      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm font-semibold text-zinc-300 transition-colors hover:border-purple-500 hover:text-white">
        {uploading ? <Loader2 size={18} className="animate-spin" /> : <ImageUp size={18} />}
        {uploading ? 'Uploading...' : imageUrl ? 'Replace Image' : 'Upload Image'}
        <input
          type="file"
          accept="image/*"
          disabled={uploading}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <input
        type="text"
        required={Boolean(imageUrl)}
        value={imageAlt}
        onChange={(event) => onImageAltChange(event.target.value)}
        placeholder="Alt text: describe the image for accessibility and SEO"
        className="w-full rounded-lg glass-input p-3 text-sm"
      />

      <p className="text-xs text-zinc-500">JPG, PNG, WebP or GIF. Maximum size 5 MB.</p>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
