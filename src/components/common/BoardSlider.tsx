'use client';

import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import 'swiper/css';

export default function BoardSlider() {
  const t = useTranslations('BoardSlider');

  const boardMembers = [
    {
      id: 1,
      photo: '/images/general.webp',
      name: t('title1'),
      description: t('text1'),
    },
    {
      id: 2,
      photo: '/images/banner02.jpg',
      name: t('title2'),
      description: t('text2'),
    },
    {
      id: 3,
      photo: '/images/banner03.jpg',
      name: t('title3'),
      description: t('text3'),
    },
    {
      id: 4,
      photo: '/images/banner04.jpeg',
      name: t('title4'),
      description: t('text4'),
    },
  ];
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Рассчитать максимальную высоту карточек
  useLayoutEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
      const max = Math.max(...heights);
      setMaxHeight(max);
    }
  }, []);

  return (
    <section className="py-10 md:py-16 text-center relative">
      <div className="relative">
        {/* Стрелки (десктоп) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
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
          className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
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

        {/* Стрелки (мобилка) */}
        <div className="flex justify-center gap-4 sm:hidden mb-4">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {boardMembers.map((member, index) => (
            <SwiperSlide key={member.id}>
              <div
                ref={(el) => (cardRefs.current[index] = el!)}
                style={{ height: maxHeight || 'auto' }}
                className="flex flex-col p-2 border rounded-xl shadow-md bg-white"
              >
                <div className="relative mb-2 flex-shrink-0">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={700}
                    height={200}
                    className="w-full object-contain rounded-lg"
                    priority
                  />
                </div>
                <h3 className="font-bold font-inter text-[20px] mt-2">{member.name}</h3>
                <p className="font-regular font-inter text-[16px] mt-2 flex-grow overflow-hidden">
                  {member.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
            <h3 className="text-xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line text-left">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
