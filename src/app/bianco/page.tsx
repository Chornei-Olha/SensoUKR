import Header from '@/components/common/Header';
import Bianco from '../../components/common/Bianco';
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
    title: messages.Products.biancoTitle,
    description: messages.Products.biancoDescription,
    alternates: {
      canonical: messages.Products.Canonical.bianco,
    },
    openGraph: {
      title: messages.Products.biancoTitle,
      description: messages.Products.biancoDescription,
      type: 'website',
      url: messages.Products.Canonical.bianco,
      images: [
        {
          url: messages.Products.OG.biancoImage,
          width: 1200,
          height: 630,
          alt: messages.Products.biancoTitle,
        },
      ],
    },
  };
}

export default function Products({ params }: { params: { locale: string } }) {
  const t = useTranslations('Products');

  return (
    <>
      <h1 className="sr-only">{t('biancoH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />
        <Bianco />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
