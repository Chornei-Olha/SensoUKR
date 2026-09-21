import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const products = [
  {
    key: 'steelGray',
    href: '/steel-gray',
    image: '/images/steel-gray.png',
  },
  {
    key: 'stoneBeige',
    href: '/stone-beige',
    image: '/images/stone-beige.png',
  },
  {
    key: 'totalBlack',
    href: '/total-black',
    image: '/images/total-black.png',
  },
  {
    key: 'epoxyGray',
    href: '/epoxy-gray',
    image: '/images/epoxy-gray.png',
  },
  {
    key: 'epoxyClear',
    href: '/epoxy-clear',
    image: '/images/epoxy-clear.png',
  },
];

export default function Glue() {
  const t = useTranslations('Glue');

  return (
    <section className="bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 leading-snug mb-10">
          {t('title')}
        </h1>

        <div className="w-full border-t border-gray-200">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group block border-b border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-sm"
            >
              <div className="flex gap-5 sm:gap-8 py-6 px-2 sm:px-4">
                <div className="relative w-[110px] sm:w-[150px] aspect-[4/5] shrink-0 overflow-hidden rounded-lg bg-white">
                  {' '}
                  <Image
                    src={product.image}
                    alt={t(`products.${product.key}.title`)}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center min-w-0">
                  <p className="font-montserrat text-sm text-gray-500 mb-1">
                    {t(`products.${product.key}.type`)}
                  </p>

                  <h2 className="font-montserrat text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {t(`products.${product.key}.title`)}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-montserrat text-sm sm:text-base text-gray-600">
                    <span>{t(`products.${product.key}.color`)}</span>
                    <span>{t(`products.${product.key}.weight`)}</span>
                    <span>{t(`products.${product.key}.temperature`)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
