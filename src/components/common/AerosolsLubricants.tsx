import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const products = [
  {
    key: 'serieTecnico',
    href: '/serie-tecnico',
    image: '/images/serie-tecnico.png',
  },
  {
    key: 'olioSilicone',
    href: '/olio-di-silicone',
    image: '/images/olio-silicone.png',
  },
];

export default function AerosolsLubricants() {
  const t = useTranslations('AerosolsLubricants');

  return (
    <section className="bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 leading-snug mb-10">
          {t('title')}
        </h1>

        <div className="w-full border-t border-gray-200">
          {products.map((product) => (
            <Link
              key={product.key}
              href={product.href}
              className="group block border-b border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm"
            >
              <div className="flex items-center gap-5 sm:gap-8 py-6 px-2 sm:px-4">
                <div className="relative w-[110px] sm:w-[150px] aspect-[4/5] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  {' '}
                  <Image
                    src={product.image}
                    alt={t(`products.${product.key}.title`)}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <p className="font-montserrat text-sm text-gray-500 mb-1">
                      {t(`products.${product.key}.type`)}
                    </p>

                    <h2 className="font-montserrat text-xl sm:text-2xl font-semibold text-gray-900 transition-colors group-hover:text-red-600">
                      {t(`products.${product.key}.title`)}
                    </h2>

                    <p className="mt-3 font-montserrat text-sm sm:text-base text-gray-600">
                      {t(`products.${product.key}.formats`)}
                    </p>
                  </div>

                  <span className="shrink-0 text-xl text-gray-400 transition-all duration-300 group-hover:text-red-600 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
