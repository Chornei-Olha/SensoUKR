import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function SensoMaskingTape() {
  const t = useTranslations('MaskingTape');

  return (
    <section className="py-0 md:py-16">
      {/* Верхний блок */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Фото слева */}
        <div className="md:w-1/2 w-full -ml-[calc((100vw-100%)/2)]">
          <Image
            src="/images/left-bg.png"
            alt="Маляр красит авто"
            width={1459}
            height={1884}
            className="hidden sm:block w-auto h-[300px] sm:h-[428px] object-cover"
            priority
          />
        </div>
        <div className="md:w-1/2 w-full -ml-[calc((100vw-100%)/2)]">
          <Image
            src="/images/left-bg.webp"
            alt="Маляр красит авто"
            width={1459}
            height={1884}
            className="block sm:hidden w-[100%] object-contain h-[470px] sm:h-[428px] "
            priority
          />
        </div>

        {/* Текст справа */}
        <div className="w-full pt-5 text-lg sm:text-xl md:text-2xl">
          <p className="text-gray-800 leading-relaxed mb-4 font-montserrat font-medium">
            {t('text1')}{' '}
          </p>
          <p className="text-gray-500 leading-relaxed font-inter font-light">{t('text2')} </p>
        </div>
      </div>

      {/* Нижний блок */}
      <div className="pt-10 text-left font-semibold">
        <h2 className="text-2xl md:text-4xl mb-6 leading-snug font-montserrat font-semibold">
          {t('text3')}{' '}
        </h2>
        <p className="text-base md:text-xl mb-6 text-gray-700 font-montserrat font-semibold">
          {t('certification')}{' '}
        </p>

        {/* Логотипы */}
        <div className="flex flex-row items-start gap-8">
          <Image
            src="/images/fsc-logo.png"
            alt="FSC сертифікація"
            width={560}
            height={811}
            className="w-full max-w-[70px] sm:max-w-[130px] h-auto"
          />
          <Image
            src="/images/pefc-logo.png"
            alt="PEFC сертифікація"
            width={581}
            height={1079}
            className="w-full max-w-[70px] sm:max-w-[130px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
