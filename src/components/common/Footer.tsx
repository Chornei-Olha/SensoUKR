import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaPhone, FaWhatsapp, FaTelegramPlane, FaViber } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer id="footer" className="pb-5">
      <p className="mb-10 text-black font-montserrat font-bold">
        {t('slogan1')} <br />
        {t('slogan2')}
      </p>

      {/* Центральная часть футера */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Левая колонка */}
        <div className="gap-6 text-sm text-center md:text-left md:items-start flex flex-col items-center">
          <p className="font-semibold font-inter mb-1">{t('menu')}</p>
          <ul className="space-y-4 font-inter font-regular">
            <li>
              <Link href="/" className="hover:text-red-500 transition-colors">
                {t('menu1')}
              </Link>
            </li>
            {/* <li>
              <Link href="#slider1" className="hover:text-red-500 transition-colors">
                {t('menu2')}
              </Link>
            </li> */}
            <li>
              <Link href="/industry" className="hover:text-red-500 transition-colors">
                {t('menu3')}
              </Link>
            </li>
            <li>
              <Link href="/dealers" className="hover:text-red-500 transition-colors">
                {t('menu4')}
              </Link>
            </li>
            <li>
              <Link href="/retail" className="hover:text-red-500 transition-colors">
                {t('menu5')}
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-red-500 transition-colors">
                {t('menu6')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Центр */}
        <div className="flex flex-col items-center">
          <Image src="/images/logo.webp" alt="Senso logo" width={267} height={112} priority />
        </div>

        {/* Правая колонка */}
        <div className="text-sm ml-0 sm:ml-auto">
          <p className="mb-2 font-semibold font-inter">{t('address')}</p>
          <p className="mb-3 font-inter font-regular">
            {t('street')} <br />
            {t('everyday')} <br />
            {t('weekend')}
          </p>

          <p className="my-3 font-semibold font-inter">{t('telephone')}</p>

          {/* --- Первый телефон --- */}
          <div className="flex items-center gap-2 mb-2">
            <FaPhone className="text-md" />
            <a href="tel:+380445852108" className="hover:text-red-600 font-inter font-regular">
              +38 (044) 585 21 08 {t('office')}
            </a>
          </div>

          {/* --- Второй телефон --- */}
          <div className="flex flex-col gap-3 flex-wrap">
            <div className="flex items-center sm:items-left gap-1">
              <FaPhone className="text-lg==nd" />
              <a href="tel:+380993413857" className="hover:text-red-600 font-inter font-regular">
                +38 (099) 341 38 57 {t('sale')}
              </a>
            </div>
            <div className="flex items-center gap-5 sm:gap-3 text-3xl sm:text-xl text-red-600">
              <a href="https://wa.me/380993413857" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500 transition-colors" />
              </a>
              <a href="https://t.me/U_P_H_I" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="hover:text-sky-500 transition-colors" />
              </a>
              <a href="viber://chat?number=+380993413857">
                <FaViber className="hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>

          <p className="my-3 font-semibold font-inter">E-mail:</p>
          <a
            href="mailto:info@senso-tape.com.ua"
            className="hover:text-red-600 font-inter font-regular"
          >
            info@senso-tape.com.ua
          </a>
        </div>
      </div>

      <p className="text-xs mt-6 font-inter font-light">©2025</p>
      <p className="text-xs font-inter font-light">
        Created by{' '}
        <a
          href="https://impuls-studio.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline font-inter font-light"
        >
          Impulse Studio
        </a>
      </p>
    </footer>
  );
}
