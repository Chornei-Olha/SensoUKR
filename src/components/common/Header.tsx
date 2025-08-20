'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'UA' | 'IT'>('UA');
  const [productOpen, setProductOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'UA' ? 'IT' : 'UA'));
  };
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>('');
  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('MYNEXTAPP_LOCALE='))
      ?.split('=')[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};router.refresh()`;
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  };

  // хелпер для стилей активной ссылки
  const linkClass = (href: string) =>
    `px-3 py-1 rounded-full transition-colors ${
      pathname === href ? 'bg-red-600 text-white' : 'hover:text-red-600'
    }`;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header className="border-b shadow-sm">
      <div className="flex items-center justify-between py-5">
        {/* Лого */}
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

        {/* Десктоп меню по центру */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 mx-auto relative">
          <Link href="/" className={linkClass('/')}>
            Головна
          </Link>

          {/* Выпадающее меню Продукція */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-red-600">
              <span>Продукція</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${productOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 overflow-hidden"
                >
                  <Link href="/blanco" className="block px-4 py-2 hover:bg-red-100">
                    Senso Blanco
                  </Link>
                  <Link href="/marrone" className="block px-4 py-2 hover:bg-red-100">
                    Senso Marrone
                  </Link>
                  <Link href="/rossa" className="block px-4 py-2 hover:bg-red-100">
                    Senso Rossa
                  </Link>

                  <Link href="/oro" className="block px-4 py-2 hover:bg-red-100">
                    Senso Oro
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Выпадающее меню Співпраця */}
          <div
            className="relative"
            onMouseEnter={() => setCollabOpen(true)}
            onMouseLeave={() => setCollabOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-red-600">
              <span>Співпраця</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${collabOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            <AnimatePresence>
              {collabOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 overflow-hidden"
                >
                  <Link href="/partnersPage" className="block px-4 py-2 hover:bg-red-100">
                    {' '}
                    Партнери{' '}
                  </Link>{' '}
                  <Link href="/dealersPage" className="block px-4 py-2 hover:bg-red-100">
                    {' '}
                    Дилери{' '}
                  </Link>{' '}
                  <Link href="/buyersPage" className="block px-4 py-2 hover:bg-red-100">
                    {' '}
                    Сервіси{' '}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#footer" className={linkClass('#footer')}>
            Контакти
          </Link>
        </nav>

        <div className="absolute left-[25px] top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-[46px] bg-black/10 rounded-[36px] px-[15px] py-[25px] z-20">
          {[
            { text: 'TWITTER', href: 'https://twitter.com/yourprofile' },
            { text: 'FACEBOOK', href: 'https://facebook.com/yourprofile' },
            { text: 'INSTAGRAM', href: 'https://instagram.com/yourprofile' },
          ].map(({ text, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-krona-one font-normal leading-[15px] text-center text-global-10 hover:underline"
              style={{ writingMode: 'vertical-rl' }}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Кнопка переключения языка (десктоп) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => changeLocale('ua')}
            className={`border p-2 font-bold rounded-md text-sm ${locale === 'ua' && 'bg-red-500 text-white'}`}
          >
            UA
          </button>
          <button
            onClick={() => changeLocale('en')}
            className={`border p-2 font-bold rounded-md text-sm ${locale === 'en' && 'bg-red-500 text-white'}`}
          >
            EN
          </button>
        </div>

        {/* Мобильная кнопка (бургер) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t h-screen">
          <div className="flex flex-col space-y-4 items-center px-4 py-3">
            <Link
              href="/"
              className={`${linkClass('/')} flex justify-center items-center w-full`}
              onClick={() => setIsOpen(false)}
            >
              {' '}
              Головна
            </Link>

            <div>
              <button
                className="w-full flex justify-left items-center gap-2 hover:bg-gray-100 rounded"
                onClick={() => setProductOpen(!productOpen)}
              >
                <span>Продукція</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${productOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {productOpen && (
                <div className="flex flex-col pl-4 mt-1 space-y-1">
                  <Link href="/blanco" onClick={() => setIsOpen(false)}>
                    Senco Blanco
                  </Link>
                  <Link href="/marrone" onClick={() => setIsOpen(false)}>
                    Senso Marrone
                  </Link>
                  <Link href="/rossa" onClick={() => setIsOpen(false)}>
                    Senso Rossa
                  </Link>
                  <Link href="/oro" onClick={() => setIsOpen(false)}>
                    Senso Oro
                  </Link>
                </div>
              )}
            </div>

            {/* Мобильное выпадающее меню */}
            <div>
              <button
                className="w-full flex justify-left items-center gap-2 hover:bg-gray-100 rounded"
                onClick={() => setCollabOpen(!collabOpen)}
              >
                <span>Співпраця</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${collabOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {collabOpen && (
                <div className="flex flex-col pl-4 mt-1 space-y-1">
                  <Link href="/partnersPage" onClick={() => setIsOpen(false)}>
                    Партнери
                  </Link>
                  <Link href="/dealersPage" onClick={() => setIsOpen(false)}>
                    Дилери
                  </Link>
                  <Link href="/buyersPage" onClick={() => setIsOpen(false)}>
                    Сервіси
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#footer"
              className={`${linkClass('#footer')} flex justify-center items-center w-full`}
              onClick={() => setIsOpen(false)}
            >
              Контакти
            </Link>

            {/* Кнопка переключения языка внутри мобильного меню */}
            <div className="flex justify-center gap-3 pt-[100px]">
              <button
                onClick={() => changeLocale('ua')}
                className={`border px-5 py-2 font-bold rounded-md text-sm ${locale === 'ua' && 'bg-red-500 text-white'}`}
              >
                UA
              </button>
              <button
                onClick={() => changeLocale('en')}
                className={`border px-5 py-2 font-bold rounded-md text-sm ${locale === 'en' && 'bg-red-500 text-white'}`}
              >
                EN
              </button>
            </div>
            {/* Соцсети внизу */}
            <div className="mt-auto border-t pt-6 flex justify-center gap-6">
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>{' '}
        </nav>
      )}
    </header>
  );
}
