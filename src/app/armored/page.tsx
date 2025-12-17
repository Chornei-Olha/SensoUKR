import Header from '@/components/common/Header';
import Duct from '../../components/common/Duct';
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
    title: messages.Products.armoredTitle,
    description: messages.Products.armoredDescription,
    alternates: {
      canonical: messages.Products.Canonical.armored,
    },
    openGraph: {
      title: messages.Products.armoredTitle,
      description: messages.Products.armoredDescription,
      type: 'website',
      url: messages.Products.Canonical.armored,
      images: [
        {
          url: messages.Products.OG.armoredImage,
          width: 1200,
          height: 630,
          alt: messages.Products.armoredTitle,
        },
      ],
    },
  };
}

export default function Products({ params }: { params: { locale: string } }) {
  const t = useTranslations('Products');

  return (
    <>
      <h1 className="sr-only">{t('armoredH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />
        <Duct />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
