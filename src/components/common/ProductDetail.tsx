'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

type ProductParameter = {
  title: string;
  description: string;
  value: number;
};

type ProductTableRow = {
  article: string;
  name: string;
  color?: string;
  size?: string;
  quantity?: string;
};

type ProductDetailProps = {
  title: string;
  images: string[];

  purposeTitle: string;
  purposeText: string;

  applicationTitle?: string;
  applications?: string[];

  advantagesTitle?: string;
  advantages?: string[];

  characteristicsTitle: string;
  characteristics: string[];

  parametersTitle: string;
  parameters?: ProductParameter[];

  table?: ProductTableRow[];

  tableLabels?: {
    article: string;
    name: string;
    color: string;
    size: string;
    quantity: string;
  };

  tabs: {
    purpose: string;
    characteristics: string;
    parameters: string;
  };
};

export default function ProductDetail({
  title,
  images,
  purposeTitle,
  purposeText,
  applicationTitle,
  applications = [],
  advantagesTitle,
  advantages = [],
  characteristicsTitle,
  characteristics,
  parametersTitle,
  parameters = [],
  table = [],
  tableLabels,
  tabs,
}: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<'purpose' | 'characteristics' | 'parameters'>(
    'purpose'
  );

  return (
    <section className="py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-8">{title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Фотографии */}
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl overflow-hidden"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`}>
                <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Информация */}
        <div>
          {/* Табы */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('purpose')}
              className={`px-4 py-3 font-montserrat text-sm md:text-base font-semibold transition-colors ${
                activeTab === 'purpose'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tabs.purpose}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('characteristics')}
              className={`px-4 py-3 font-montserrat text-sm md:text-base font-semibold transition-colors ${
                activeTab === 'characteristics'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tabs.characteristics}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('parameters')}
              className={`px-4 py-3 font-montserrat text-sm md:text-base font-semibold transition-colors ${
                activeTab === 'parameters'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tabs.parameters}
            </button>
          </div>

          {/* ПРИЗНАЧЕННЯ */}
          {activeTab === 'purpose' && (
            <div className="font-montserrat text-gray-700">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{purposeTitle}</h2>

              <p className="leading-7">{purposeText}</p>

              {applications.length > 0 && (
                <div className="mt-7">
                  {applicationTitle && (
                    <h3 className="font-bold text-gray-900 mb-3">{applicationTitle}</h3>
                  )}

                  <ul className="space-y-2">
                    {applications.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-red-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {advantages.length > 0 && (
                <div className="mt-7">
                  {advantagesTitle && (
                    <h3 className="font-bold text-gray-900 mb-3">{advantagesTitle}</h3>
                  )}

                  <ul className="space-y-2">
                    {advantages.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-red-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* ХАРАКТЕРИСТИКИ */}
          {activeTab === 'characteristics' && (
            <div className="font-montserrat">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
                {characteristicsTitle}
              </h2>

              <ul className="space-y-3 text-gray-700">
                {characteristics.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-red-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {table.length > 0 && tableLabels && (
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-300 text-left">
                        <th className="py-3 px-3">{tableLabels.article}</th>
                        <th className="py-3 px-3">{tableLabels.name}</th>
                        <th className="py-3 px-3">{tableLabels.color}</th>
                        <th className="py-3 px-3">{tableLabels.size}</th>
                        <th className="py-3 px-3">{tableLabels.quantity}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {table.map((row, index) => (
                        <tr key={`${row.article}-${index}`} className="border-b border-gray-200">
                          <td className="py-3 px-3">{row.article}</td>
                          <td className="py-3 px-3">{row.name}</td>
                          <td className="py-3 px-3">{row.color}</td>
                          <td className="py-3 px-3">{row.size}</td>
                          <td className="py-3 px-3">{row.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ПАРАМЕТРИ */}
          {activeTab === 'parameters' && (
            <div className="font-montserrat">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {parametersTitle}
              </h2>

              <div className="space-y-7">
                {parameters.map((parameter, index) => (
                  <div key={index}>
                    <div className="flex justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{parameter.title}</h3>

                        <p className="mt-1 text-sm text-gray-500">{parameter.description}</p>
                      </div>

                      <span className="shrink-0 font-semibold text-gray-900">
                        {parameter.value}/6
                      </span>
                    </div>

                    <div className="grid grid-cols-6 gap-1.5">
                      {Array.from({ length: 6 }).map((_, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`h-2 rounded-full ${
                            itemIndex < parameter.value ? 'bg-red-600' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
