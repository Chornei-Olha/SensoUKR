import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    key: 'paintingTapes',
    title: 'Малярні стрічки',
    href: '/painting-tapes',
    image: '/images/1.1.webp',
  },
  {
    key: 'reinforcedTapes',
    title: 'Армовані стрічки',
    href: '/reinforced-tapes',
    image: '/images/5.1.webp',
  },
  {
    key: 'doubleSidedTapes',
    title: 'Двосторонні стрічки',
    href: '/double-sided-tapes',
    image: '/images/1.1.webp',
  },
  {
    key: 'aerosolsLubricants',
    title: 'Аерозолі та мастила',
    href: '/aerosols-lubricants',
    image: '/images/1.1.webp',
  },
  {
    key: 'adhesives',
    title: 'Клеї',
    href: '/adhesives',
    image: '/images/1.1.webp',
  },
];

export default function Products() {
  return (
    <section className="bg-[#F3F4F6]">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Заголовок */}
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 leading-snug mb-10 md:mb-12">
          Продукція SENSO
        </h1>

        {/* Категории */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {categories.map((category) => (
            <Link key={category.key} href={category.href} className="group block">
              <article className="h-full bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Изображение */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Нижняя часть карточки */}
                <div className="flex items-center justify-between gap-4 px-5 py-5">
                  <h2 className="font-montserrat text-lg md:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                    {category.title}
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
