import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const categories = [
  {
    key: 'paintingTapes',
    href: '/painting-tapes',
    image: '/images/category-painting-tapes.png',
  },
  {
    key: 'reinforcedTapes',
    href: '/reinforced-tapes',
    image: '/images/category-reinforced-tapes.png',
  },
  {
    key: 'doubleSidedTapes',
    href: '/double-sided-tapes',
    image: '/images/category-double-sided-tapes.png',
  },
  {
    key: 'aerosolsLubricants',
    href: '/aerosols-lubricants',
    image: '/images/category-aerosols-lubricants.png',
  },
  {
    key: 'adhesives',
    href: '/adhesives',
    image: '/images/category-adhesives.png',
  },
];

export default function Products() {
  const t = useTranslations('ProductsPage');

  return (
    <section className="bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 leading-snug mb-10 md:mb-12">
          {t('title')}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {categories.map((category) => (
            <Link key={category.key} href={category.href} className="group block">
              <article className="h-full bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={t(`categories.${category.key}`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <h2 className="font-montserrat text-lg md:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                    {t(`categories.${category.key}`)}
                  </h2>

                  <span className="shrink-0 text-xl text-gray-400 transition-all duration-300 group-hover:text-red-600 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
