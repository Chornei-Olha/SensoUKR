'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const boardMembers = [
  {
    id: 1,
    photo: '/images/6.1.webp',
  },
  {
    id: 2,
    photo: '/images/6.2.webp',
  },
  {
    id: 3,
    photo: '/images/6.3.webp',
  },
  {
    id: 4,
    photo: '/images/6.4.webp',
  },
  {
    id: 5,
    photo: '/images/6.5.webp',
  },
];

export default function Partners() {
  const t = useTranslations('Partners');
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);
  return (
    <section className="bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-8 pb-10 md:pb-16 py-10 md:py-16">
        {/* Верхняя часть: текст */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Текст */}
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 leading-snug">
              {t('title')}{' '}
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed font-light font-inter">{t('text')}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 pb-10 md:pb-16 text-center relative">
        <div className="relative">
          {/* Стрелки (десктоп) */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden sm:flex absolute -left-10 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden sm:flex absolute -right-10 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {boardMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="h-[400px] flex justify-center items-center overflow-hidden">
                  <Image
                    src={member.photo}
                    alt="slider"
                    width={900}
                    height={500}
                    className="h-full w-auto object-cover rounded-lg"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Стрелки (мобилка) */}
          <div className="flex justify-center gap-4 sm:hidden mt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Модалка */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-6 relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
