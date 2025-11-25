import Header from '@/components/common/Header';
import Marrone from '../../components/common/Marrone';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';
import { getMessages } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = await getMessages({ locale: params.locale });

  return {
    title: messages.Products.marroneTitle,
    description: messages.Products.marroneDescription,
    alternates: {
      canonical: messages.Products.Canonical.marrone,
    },
    openGraph: {
      title: messages.Products.marroneTitle,
      description: messages.Products.marroneDescription,
      type: 'website',
      url: messages.Products.Canonical.marrone,
      images: [
        {
          url: messages.Products.OG.marroneImage,
          width: 1200,
          height: 630,
          alt: messages.Products.marroneTitle,
        },
      ],
    },
  };
}

const Products: React.FC = () => {
  const t = useTranslations('Products');

  return (
    <>
      <h1 className="sr-only">{t('marroneH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />
        <Marrone />
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default Products;
