import Header from '@/components/common/Header';
import Products from '@/components/common/Products';
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

export default function PartnersPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('Cooperation');

  return (
    <>
      <h1 className="sr-only">{t('productsH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>

      <Products />

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
