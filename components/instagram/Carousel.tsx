'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center bg-black">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-2 left-0 right-0 flex justify-center gap-1 z-10 px-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-0.5 flex-1 rounded-full transition-all ${
              index === activeIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
