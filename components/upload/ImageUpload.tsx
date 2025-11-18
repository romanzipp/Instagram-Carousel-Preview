'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

const PROFILE_IMAGES = [
  '/users/user_1.jpeg',
  '/users/user_2.jpeg',
  '/users/user_3.jpeg',
  '/users/user_4.jpeg',
  '/users/user_5.jpeg',
  '/users/user_kvfd.jpeg',
];

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [slideCount, setSlideCount] = useState<number>(3);
  const [username, setUsername] = useState<string>('dielinkefulda');
  const [profileImage, setProfileImage] = useState<string>('/users/user_kvfd.jpeg');
  const [isProcessing, setIsProcessing] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSlideCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSlideCount(parseInt(e.target.value));
  };

  const handleSubmit = async () => {
    if (!file) return;

    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('slideCount', slideCount.toString());
      formData.append('username', username);
      formData.append('profileImage', profileImage);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      router.push(`/preview/${data.id}`);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900">Instagram Carousel Preview</h1>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload your image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {preview && (
        <div className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <img src={preview} alt="Preview" className="w-full h-auto" />
        </div>
      )}

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Image
        </label>
        <div className="grid grid-cols-3 gap-3">
          {PROFILE_IMAGES.map((imagePath) => (
            <button
              key={imagePath}
              type="button"
              onClick={() => setProfileImage(imagePath)}
              className={`relative aspect-square rounded-full overflow-hidden border-4 transition-all ${
                profileImage === imagePath
                  ? 'border-blue-500 scale-95'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={imagePath}
                alt="Profile option"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of slides
        </label>
        <select
          value={slideCount}
          onChange={handleSlideCountChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num} slides
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!file || isProcessing}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-full transition-colors"
      >
        {isProcessing ? 'Processing...' : 'Generate Preview'}
      </button>
    </div>
  );
}
