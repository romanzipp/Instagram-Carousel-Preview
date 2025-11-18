'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/instagram/Header';
import Stories from '@/components/instagram/Stories';
import Carousel from '@/components/instagram/Carousel';
import Navigation from '@/components/instagram/Navigation';
import { getPreviewData } from '@/lib/urlGenerator';

export default function PreviewPage() {
  const params = useParams();
  const id = params?.id as string;
  const [slides, setSlides] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const data = getPreviewData(id);
      setSlides(data);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!slides) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-4 p-6">
        <h1 className="text-2xl font-bold text-gray-900">Preview Not Found</h1>
        <p className="text-gray-600">This preview does not exist or has expired.</p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors"
        >
          Create New Preview
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative pb-16">
          <Header />
          <Stories />
          <Carousel slides={slides} />
          <Navigation />
        </div>
      </div>
    </div>
  );
}
