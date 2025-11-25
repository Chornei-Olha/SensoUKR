import Header from '@/components/common/Header';
import Partners from '@/components/common/Partners';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';
import { getMessages } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = await getMessages({ locale: params.locale });

  return {
    title: messages.Cooperation.industryTitle,
    description: messages.Cooperation.industryDescription,
    alternates: {
      canonical: messages.Cooperation.Canonical.industry,
    },
    openGraph: {
      title: messages.Cooperation.industryTitle,
      description: messages.Cooperation.industryDescription,
      type: 'website',
      url: messages.Cooperation.Canonical.industry,
      images: [
        {
          url: messages.Cooperation.OG.industryImage,
          width: 1200,
          height: 630,
          alt: messages.Cooperation.industryTitle,
        },
      ],
    },
  };
}

const PartnersPage: React.FC = () => {
  const t = useTranslations('Cooperation');

  return (
    <>
      <h1 className="sr-only">{t('industryH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>
      <Partners />
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default PartnersPage;
