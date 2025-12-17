import Header from '@/components/common/Header';
import Dealers from '@/components/common/Dealers';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';
import { getMessages } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages({ locale: params.locale });

  return {
    title: messages.Cooperation.dealersTitle,
    description: messages.Cooperation.dealersDescription,
    alternates: {
      canonical: messages.Cooperation.Canonical.dealers,
    },
    openGraph: {
      title: messages.Cooperation.dealersTitle,
      description: messages.Cooperation.dealersDescription,
      type: 'website',
      url: messages.Cooperation.Canonical.dealers,
      images: [
        {
          url: messages.Cooperation.OG.dealersImage,
          width: 1200,
          height: 630,
          alt: messages.Cooperation.dealersTitle,
        },
      ],
    },
  };
}

export default function PartnersPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('Cooperation');

  return (
    <>
      <h1 className="sr-only">{t('dealersH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>

      <Dealers />

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
