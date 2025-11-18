'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps {
  imageUrl: string;
  slideCount: number;
}

export default function Carousel({ imageUrl, slideCount }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full aspect-[4/5] bg-black">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {Array.from({ length: slideCount }).map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-black"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: `center ${(index / (slideCount - 1)) * 100}%`,
                backgroundRepeat: 'no-repeat',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
