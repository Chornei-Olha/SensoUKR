'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>('');

  const t = useTranslations('Header');

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('MYNEXTAPP_LOCALE='))
      ?.split('=')[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      const initialLocale = browserLocale === 'en' ? 'en' : 'ua';

      setLocale(initialLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${initialLocale};`;
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  const linkClass = (href: string) =>
    `px-3 py-1 rounded-full transition-colors ${
      pathname === href ? 'bg-red-600 text-white' : 'hover:text-red-600'
    }`;

  const productItems = [
    {
      href: '/painting-tapes',
      label: t('products1'),
    },
    {
      href: '/reinforced-tapes',
      label: t('products2'),
    },
    {
      href: '/double-sided-tapes',
      label: t('products3'),
    },
    {
      href: '/aerosols-lubricants',
      label: t('products4'),
    },
    {
      href: '/adhesives',
      label: t('products5'),
    },
  ];

  const collaborationItems = [
    {
      href: '/industry',
      label: t('menu3-1'),
    },
    {
      href: '/dealers',
      label: t('menu3-2'),
    },
    {
      href: '/retail',
      label: t('menu3-3'),
    },
  ];

  return (
    <header className="border-b shadow-sm">
      <div className="flex items-center justify-between py-5">
        {/* Логотип */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/images/logo.webp"
              alt="Senso Logo"
              width={133}
              height={55}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium font-montserrat text-gray-700 mx-auto relative">
          <Link href="/" className={linkClass('/')}>
            {t('menu1')}
          </Link>

          {/* ПРОДУКЦІЯ */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <Link
              href="/products"
              className={`${linkClass('/products')} flex items-center space-x-1`}
            >
              <span>{t('menu2')}</span>

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  productOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </Link>

            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.18,
                    ease: 'easeOut',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[300px] z-50"
                >
                  <div className="bg-white rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-gray-100 p-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/item flex items-center justify-between gap-4 rounded-lg px-4 py-3 font-montserrat text-[14px] font-medium text-gray-800 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <span>{item.label}</span>

                        <span className="text-lg text-gray-300 transition-all duration-200 group-hover/item:text-red-600 group-hover/item:translate-x-1">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* СПІВПРАЦЯ */}
          <div
            className="relative"
            onMouseEnter={() => setCollabOpen(true)}
            onMouseLeave={() => setCollabOpen(false)}
          >
            <button
              type="button"
              className="flex items-center space-x-1 px-3 py-1 rounded-full transition-colors hover:text-red-600"
            >
              <span>{t('menu3')}</span>

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  collabOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <AnimatePresence>
              {collabOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.18,
                    ease: 'easeOut',
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[300px] z-50"
                >
                  <div className="bg-white rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-gray-100 p-2">
                    {collaborationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/item flex items-center justify-between gap-4 rounded-lg px-4 py-3 font-montserrat text-[14px] font-medium text-gray-800 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <span>{item.label}</span>

                        <span className="text-lg text-gray-300 transition-all duration-200 group-hover/item:text-red-600 group-hover/item:translate-x-1">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* КОНТАКТИ */}
          <Link href="/contacts" className={linkClass('/contacts')}>
            {t('menu4')}
          </Link>
        </nav>

        {/* Соцмережі зліва */}
        <div className="absolute left-[25px] top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-[46px] bg-black/10 rounded-[36px] px-[15px] py-[25px] z-20">
          {[
            {
              text: 'YOUTUBE',
              href: 'https://www.youtube.com/',
            },
            {
              text: 'INSTAGRAM',
              href: 'https://www.instagram.com/senso_tm_ua/',
            },
          ].map(({ text, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-krona-one font-normal font-montserrat leading-[15px] text-center text-global-10 hover:underline"
              style={{ writingMode: 'vertical-rl' }}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Перемикач мови — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => changeLocale('ua')}
            className={`border p-2 font-medium font-inter rounded-md text-sm ${
              locale === 'ua' ? 'bg-red-500 text-white' : ''
            }`}
          >
            UA
          </button>

          <button
            onClick={() => changeLocale('en')}
            className={`border p-2 font-medium font-inter rounded-md text-sm ${
              locale === 'en' ? 'bg-red-500 text-white' : ''
            }`}
          >
            EN
          </button>
        </div>

        {/* BURGER */}
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t min-h-screen">
          <div className="flex flex-col space-y-4 items-center px-4 py-3">
            {/* ГОЛОВНА */}
            <Link
              href="/"
              className={`${linkClass('/')} flex justify-center items-center w-full`}
              onClick={() => setIsOpen(false)}
            >
              {t('menu1')}
            </Link>

            {/* ПРОДУКЦІЯ — MOBILE */}
            <div className="w-full">
              <div
                className={`flex justify-center items-center ${
                  pathname === '/products' ? 'bg-red-600 text-white rounded-full' : ''
                }`}
              >
                <Link href="/products" className="py-2 pl-4" onClick={() => setIsOpen(false)}>
                  {t('menu2')}
                </Link>

                <button
                  type="button"
                  onClick={() => setProductOpen(!productOpen)}
                  className="py-2 pl-4 pr-4"
                  aria-label="Toggle products submenu"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      productOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              </div>

              {productOpen && (
                <div className="mt-3 px-4">
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    {productItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 font-montserrat text-sm font-medium text-gray-800 transition-colors hover:bg-red-50 hover:text-red-600 ${
                          index !== productItems.length - 1 ? 'border-b border-gray-200' : ''
                        }`}
                      >
                        <span>{item.label}</span>

                        <span className="text-red-600">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* СПІВПРАЦЯ — MOBILE */}
            <div className="w-full">
              <div className="flex justify-center items-center">
                <span className="py-2 pl-4">{t('menu3')}</span>

                <button
                  type="button"
                  onClick={() => setCollabOpen(!collabOpen)}
                  className="py-2 pl-4 pr-4"
                  aria-label="Toggle cooperation submenu"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      collabOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              </div>

              {collabOpen && (
                <div className="mt-3 px-4">
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    {collaborationItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 font-montserrat text-sm font-medium text-gray-800 transition-colors hover:bg-red-50 hover:text-red-600 ${
                          index !== collaborationItems.length - 1 ? 'border-b border-gray-200' : ''
                        }`}
                      >
                        <span>{item.label}</span>

                        <span className="text-red-600">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* КОНТАКТИ */}
            <Link
              href="/contacts"
              className={`${linkClass('/contacts')} flex justify-center items-center w-full`}
              onClick={() => setIsOpen(false)}
            >
              {t('menu4')}
            </Link>

            {/* МОВИ */}
            <div className="flex justify-center gap-3 pt-[100px]">
              <button
                type="button"
                onClick={() => changeLocale('ua')}
                className={`border px-5 py-2 font-bold rounded-md text-sm ${
                  locale === 'ua' ? 'bg-red-500 text-white' : ''
                }`}
              >
                UA
              </button>

              <button
                type="button"
                onClick={() => changeLocale('en')}
                className={`border px-5 py-2 font-bold rounded-md text-sm ${
                  locale === 'en' ? 'bg-red-500 text-white' : ''
                }`}
              >
                EN
              </button>
            </div>

            {/* СОЦМЕРЕЖІ */}
            <div className="mt-auto border-t pt-6 flex justify-center gap-6">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.png" alt="Youtube" width={24} height={24} />
              </a>

              <a
                href="https://www.instagram.com/senso_tm_ua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
