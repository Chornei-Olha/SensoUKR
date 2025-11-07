'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';

type Feature = {
  title: string;
  subtitle?: string;
  value: number; // сколько красных блоков
  max?: number; // всего блоков
};

export default function Rossa() {
  const t = useTranslations('Rossa');
  const swiperRef = useRef<SwiperType | null>(null);

  const features: Feature[] = [
    {
      title: t('par-title1'),
      subtitle: t('par-text1'),
      value: 6,
      max: 6,
    },
    {
      title: t('par-title2'),
      subtitle: t('par-text2'),
      value: 5,
      max: 6,
    },
    {
      title: t('par-title3'),
      subtitle: t('par-text3'),
      value: 5,
      max: 6,
    },
    {
      title: t('par-title4'),
      subtitle: t('par-text4'),
      value: 5,
      max: 6,
    },
    {
      title: t('par-title5'),
      subtitle: t('par-text5'),
      value: 6,
      max: 6,
    },
  ];

  // const boardMembers = [
  //   {
  //     id: 1,
  //     photo: '/images/3.1.webp',
  //   },
  //   {
  //     id: 2,
  //     photo: '/images/3.2.webp',
  //   },
  //   {
  //     id: 3,
  //     photo: '/images/3.3.webp',
  //   },
  //   {
  //     id: 4,
  //     photo: '/images/3.4.webp',
  //   },
  //   {
  //     id: 5,
  //     photo: '/images/3.5.webp',
  //   },
  // ];

    const locale = useLocale();

  const boardMembers =
    locale === 'en'
      ? [
          { id: 1, photo: '/images/3.1.webp' },
          { id: 2, photo: '/images/3.2.webp' },
          { id: 3, photo: '/images/3.3.webp' },
          { id: 4, photo: '/images/en/1.4.webp' },
          { id: 5, photo: '/images/3.5.webp' },
        ]
      : [
          { id: 1, photo: '/images/3.1.webp' },
          { id: 2, photo: '/images/3.2.webp' },
          { id: 3, photo: '/images/3.3.webp' },
          { id: 4, photo: '/images/ua/3.4.webp' },
          { id: 5, photo: '/images/3.5.webp' },
        ];

  const [tab, setTab] = useState('Призначення');

  return (
    <div className="w-full pt-10">
      {/* Top section with images */}
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
          autoplay={{ delay: 5000 }}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 my-8">
        <button
          onClick={() => setTab('Призначення')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Призначення' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          {t('menu1')}
        </button>
        <button
          onClick={() => setTab('Характеристики')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Характеристики' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          {t('menu2')}
        </button>
        <button
          onClick={() => setTab('Параметри')}
          className={`font-montserrat font-regular text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-full border ${
            tab === 'Параметри' ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          {t('menu3')}
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed font-medium font-montserrat text-sm sm:text-xl">
        {tab === 'Призначення' && (
          <>
            <p className="font-montserrat font-light">{t('mainText')}</p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>{t('text-li1')}</li>
              <li>{t('text-li2')} </li>
              <li>{t('text-li3')} </li>
              <li>{t('text-li4')} </li>
              <li>{t('text-li5')}</li>
              <li>{t('text-li6')} </li>
              <li>{t('text-li7')} </li>
            </ul>
          </>
        )}

        {tab === 'Характеристики' && (
          <div className="overflow-x-auto mt-4">
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>{t('char-li1')}</li>
              <li>{t('char-li2')}</li>
              <li>{t('char-li3')}</li>
              <li>{t('char-li4')}</li>
              <li>{t('char-li5')}</li>
              <li>{t('char-li6')}</li>
            </ul>{' '}
            <table className="min-w-full border border-gray-300 text-xs sm:text-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">{t('table-title-col1')}</th>
                  <th className="border px-3 py-2">{t('table-title-col2')}</th>
                  <th className="border px-3 py-2">{t('table-title-col3')}</th>
                  <th className="border px-3 py-2">{t('table-title-col4')}</th>
                  <th className="border px-3 py-2">
                    {t('table-title-col5')}
                    <br className="text-xs sm:text-lg" />
                    {t('table-title-col5-1')}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">SR24</td>
                  <td className="border px-3 py-2">{t('nameTape')} SENSO ROSSA +120ºC</td>
                  <td className="border px-3 py-2">{t('colorTape')}</td>
                  <td className="border px-3 py-2">24mm*40yd</td>
                  <td className="border px-3 py-2">24</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SR36</td>
                  <td className="border px-3 py-2">{t('nameTape')} SENSO ROSSA +120ºC</td>
                  <td className="border px-3 py-2">{t('colorTape')}</td>
                  <td className="border px-3 py-2">36mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">SR48</td>
                  <td className="border px-3 py-2">{t('nameTape')} SENSO ROSSA +120ºC</td>
                  <td className="border px-3 py-2">{t('colorTape')}</td>
                  <td className="border px-3 py-2">48mm*40yd</td>
                  <td className="border px-3 py-2">12</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {tab === 'Параметри' && (
          <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
            <div className="space-y-6">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Текст */}
                  <div className="mb-2 sm:mb-0">
                    <p className="font-bold text-gray-900">{f.title}</p>
                    {f.subtitle && <p className="text-sm text-gray-600">{f.subtitle}</p>}
                  </div>

                  {/* Шкала */}
                  <div className="flex gap-1">
                    {Array.from({ length: f.max || 8 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-4 ${i < f.value ? 'bg-red-600' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-10 text-left font-semibold">
        <p className="font-regular font-inter text-base md:text-xl mb-6 text-gray-700">
          {t('certification')}
        </p>

        {/* Логотипы */}
        <div className="flex flex-row items-start gap-8">
          <Image
            src="/images/fsc-logo.png"
            alt="FSC сертифікація"
            width={560}
            height={811}
            style={{ height: 'auto', width: '100%', maxWidth: '130px' }}
          />
          <Image
            src="/images/pefc-logo.png"
            alt="PEFC сертифікація"
            width={581}
            height={1079}
            style={{ height: 'auto', width: '100%', maxWidth: '130px' }}
          />
        </div>
      </div>

      {/* Buy buttons */}
      <div className="flex flex-col sm:flex-row justify-start items-left sm:items-center gap-5 my-16 flex-nowrap sm:flex-wrap">
        <p className="whitespace-nowrap font-inter font-regular">{t('shop')}</p>

        <div className="flex flex-row gap-2 sm:gap-6 items-start">
          <a
            href="https://epicentrk.ua/ua/shop/strichka-maliarna-senso-rossa-auto-120-c-36-mm-36-6-m-chervonyi.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <Image
              src="/images/epicentr-logo.png" // 👉 картинка логотипа Эпицентра
              alt="Епіцентр"
              width={492}
              height={163}
              className="object-contain w-auto h-[40px] sm:h-[60px]"
            />
          </a>

          {/* <a
            href="https://rozetka.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <Image
              src="/images/rozetka-logo.png" // 👉 картинка логотипа Розетки
              alt="Розетка"
              width={1864}
              height={431}
              className="object-contain w-auto h-[40px] sm:h-[60px]"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
