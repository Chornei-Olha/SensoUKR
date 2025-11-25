import Header from '@/components/common/Header';
import Hero from '../components/common/Hero';
import ProductSlider from '../components/common/ProductSlider';
import SensoMaskingTape from '../components/common/SensoMaskingTape';
import BoardSlider from '../components/common/BoardSlider';
import Footer from '@/components/common/Footer';
import { getMessages } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = await getMessages({ locale: params.locale });

  return {
    title: messages.Cooperation.mainTitle,
    description: messages.Cooperation.mainDescription,
    alternates: {
      canonical: messages.Cooperation.Canonical.main,
    },
    openGraph: {
      title: messages.Cooperation.mainTitle,
      description: messages.Cooperation.mainDescription,
      type: 'website',
      url: messages.Cooperation.Canonical.main,
      images: [
        {
          url: messages.Cooperation.OG.mainImage,
          width: 1200,
          height: 630,
          alt: messages.Cooperation.mainTitle,
        },
      ],
    },
  };
}
const HomePage: React.FC = () => {
  const t = useTranslations('Cooperation');

  return (
    <div className="container mx-auto px-4 md:px-8 bg-white">
      <h1 className="sr-only">{t('mainH1')}</h1>

      <Header />
      <Hero />
      <ProductSlider />
      <SensoMaskingTape />
      <BoardSlider />
      <Footer />
    </div>
  );
};
export default HomePage;
