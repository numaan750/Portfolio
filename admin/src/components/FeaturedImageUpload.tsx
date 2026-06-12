'use client';

import { useState, useEffect } from 'react';
import { ImageUp, Loader2, Trash2, AlertCircle, Check } from 'lucide-react';
import { uploadImage, validateImage } from '@/lib/uploadImage';

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
  const [validating, setValidating] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // Validate image URL periodically to detect if it becomes inaccessible
  useEffect(() => {
    if (!imageUrl) {
      setIsValid(true);
      return;
    }

    const validateImageUrl = async () => {
      setValidating(true);
      const valid = await validateImage(imageUrl);
      setIsValid(valid);
      if (!valid) {
        setError('Image is no longer accessible. Please re-upload.');
      }
      setValidating(false);
    };

    validateImageUrl();
  }, [imageUrl]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    // Validate file size
    if (file.size > 5 * 1024 * 1024) {
      setError('File must be smaller than 5 MB.');
      return;
    }

    setUploading(true);
    setError('');
    setIsValid(true);
    
    try {
      const url = await uploadImage(file);
      onImageUrlChange(url);
      setError('');
    } catch (uploadError: unknown) {
      setError(getUploadError(uploadError));
      setIsValid(false);
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
            {/* Image with fallback if broken */}
            <img
              src={imageUrl}
              alt={imageAlt || 'Image preview'}
              className="absolute inset-0 w-full h-full object-contain bg-zinc-950/30"
              onError={() => {
                setIsValid(false);
                setError('Image failed to load. It may have been deleted.');
              }}
            />

            {/* Status indicator */}
            <div className="absolute left-1.5 top-1.5 flex items-center gap-1 rounded-lg bg-zinc-950/90 px-2 py-1">
              {validating ? (
                <Loader2 size={12} className="animate-spin text-blue-400" />
              ) : isValid ? (
                <Check size={12} className="text-green-400" />
              ) : (
                <AlertCircle size={12} className="text-red-400" />
              )}
              <span className="text-xs font-medium text-white">
                {validating ? 'Checking...' : isValid ? 'OK' : 'Issue'}
              </span>
            </div>

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

      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm font-semibold text-zinc-300 transition-colors hover:border-purple-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
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
      {error && (
        <div className="flex items-start gap-2 rounded-lg bg-red-500/10 border border-red-500/20 p-3">
          <AlertCircle size={14} className="mt-0.5 text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-300">{error}</p>
        </div>
      )}
    </div>
  );
}
