import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const products = [
  { title: 'SENSO BIANCO – AUTO + 80°C', image: '/images/product1.webp', link: '/bianco' },
  { title: 'SENSO MARRONE – AUTO + 110°C', image: '/images/product3.webp', link: '/marrone' },
  { title: 'SENSO ROSSA – AUTO + 120°C', image: '/images/product2.webp', link: '/rossa' },
  { title: 'SENSO ORO – AUTO + 130°C', image: '/images/product4.webp', link: '/oro' },
  { title: 'SENSO DUCT TAPE', image: '/images/5.1.webp', link: '/duct' },
];

export default function ProductSlider() {
  const t = useTranslations('ProductSlider');

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy(); // очищаем старую навигацию
      swiperRef.current.navigation.init(); // инициализируем заново
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section id="slider1">
      <div className="py-2 md:py-4">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <div className="bg-white rounded-xl shadow-md relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={1320}
                    height={1608}
                    className="object-contain w-full h-[auto]"
                  />
                  <h3 className="absolute top-2 left-2 text-xl leading-snug font-montserrat font-bold">
                    {product.title.includes('–') ? (
                      <>
                        {product.title.split('–')[0]} –
                        <br />
                        {product.title.split('–')[1]}
                      </>
                    ) : (
                      product.title
                    )}
                  </h3>
                </div>

                <Link
                  href={product.link}
                  className="mt-2 text-lg text-gray-500 hover:text-gray-700 text-left font-montserrat font-extralight"
                >
                  {t('text')}{' '}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки навигации снизу */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            ref={prevRef}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            ref={nextRef}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
