import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const products = [
  {
    key: 'Bianco',
    title: 'SENSO BIANCO',
    href: '/bianco',
    image: '/images/1.1.webp',
    charCount: 6,
  },
  {
    key: 'Marrone',
    title: 'SENSO MARRONE',
    href: '/marrone',
    image: '/images/2.1.webp',
    charCount: 6,
  },
  {
    key: 'Rossa',
    title: 'SENSO ROSSA',
    href: '/rossa',
    image: '/images/3.1.webp',
    charCount: 6,
  },
  {
    key: 'Oro',
    title: 'SENSO ORO',
    href: '/oro',
    image: '/images/4.1.webp',
    charCount: 6,
  },
  {
    key: 'Duct',
    title: 'SENSO ARMORED',
    href: '/armored',
    image: '/images/5.1.webp',
    charCount: 7,
  },
];

export default function ProductsPage() {
  const t = useTranslations();

  return (
    <section className="bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-8 pb-10 md:pb-16 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 leading-snug mb-10">
          {t('allProducts.title')}
        </h1>

        <div className="w-full border-t border-gray-200">
          {products.map((product) => {
            const characteristics = Array.from({ length: product.charCount }, (_, index) =>
              t(`${product.key}.char-li${index + 1}`)
            );

            return (
              <Link
                key={product.href}
                href={product.href}
                className="group block border-b border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm cursor-pointer"
              >
                <div className="flex gap-5 sm:gap-8 py-6 px-2 sm:px-4">
                  <div className="relative w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h2 className="font-montserrat text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {product.title}
                    </h2>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 font-montserrat text-sm sm:text-base text-gray-600">
                      {characteristics.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
