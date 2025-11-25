import Header from '@/components/common/Header';
import Buyers from '@/components/common/Buyers';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';
import { getMessages } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = await getMessages({ locale: params.locale });

  return {
    title: messages.Cooperation.retailTitle,
    description: messages.Cooperation.retailDescription,
    alternates: {
      canonical: messages.Cooperation.Canonical.retail,
    },
    openGraph: {
      title: messages.Cooperation.retailTitle,
      description: messages.Cooperation.retailDescription,
      type: 'website',
      url: messages.Cooperation.Canonical.retail,
      images: [
        {
          url: messages.Cooperation.OG.retailImage,
          width: 1200,
          height: 630,
          alt: messages.Cooperation.retailTitle,
        },
      ],
    },
  };
}

const BuyersPage: React.FC = () => {
  const t = useTranslations('Cooperation');

  return (
    <>
      <h1 className="sr-only">{t('retailH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>
      <Buyers />
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default BuyersPage;
