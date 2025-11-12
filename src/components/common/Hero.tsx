'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section>
      <div className="py-10 md:py-16">
        {/* Верхняя часть: текст + маленькое изображение */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Текст */}
          <div className="md:max-w-5xl">
            <h1 className="text-3xl md:text-4xl text-gray-900 leading-snug font-montserrat font-medium">
              {t('title')}{' '}
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed font-montserrat font-light">
              {t('mainText')}
            </p>
          </div>

          {/* Маленькое фото */}
          <div className="flex-shrink-0 relative">
            <Image
              src="/images/logo-bg.png"
              alt="Senso Small Banner"
              width={1244}
              height={495}
              className="object-cover w-full sm:w-[350px] h-auto"
              priority
            />
            {/* <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span> */}
          </div>
        </div>

        {/* Большое фото */}
        <div className="mt-8 relative">
          <Image
            src="/images/bg.png"
            alt="Senso Tape Rolls"
            width={5568}
            height={2096}
            className="w-full h-auto object-cover"
            priority
          />
          {/* <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span> */}
        </div>
      </div>
    </section>
  );
}
