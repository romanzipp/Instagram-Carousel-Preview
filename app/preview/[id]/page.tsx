'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/instagram/Header';
import Stories from '@/components/instagram/Stories';
import PostHeader from '@/components/instagram/PostHeader';
import Carousel from '@/components/instagram/Carousel';
import PostDetails from '@/components/instagram/PostDetails';
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
    <div className="min-h-screen bg-gray-100 md:flex md:items-center md:justify-center md:p-4">
      <div className="w-full min-h-screen md:min-h-0 md:max-w-[375px] bg-white md:rounded-3xl md:shadow-2xl overflow-hidden md:overflow-y-auto flex flex-col">
        <Header />
        <Stories />
        <div className="flex-1 flex flex-col overflow-y-auto">
          <PostHeader />
          <Carousel slides={slides} />
          <PostDetails />
        </div>
        <Navigation />
      </div>
    </div>
  );
}
