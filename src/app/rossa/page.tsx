import Header from '@/components/common/Header';
import Rossa from '../../components/common/Rossa';
import Footer from '@/components/common/Footer';
import ContactForm from '../../components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
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
    title: messages.Products.rossaTitle,
    description: messages.Products.rossaDescription,
    alternates: {
      canonical: messages.Products.Canonical.rossa,
    },
    openGraph: {
      title: messages.Products.rossaTitle,
      description: messages.Products.rossaDescription,
      type: 'website',
      url: messages.Products.Canonical.rossa,
      images: [
        {
          url: messages.Products.OG.rossaImage,
          width: 1200,
          height: 630,
          alt: messages.Products.rossaTitle,
        },
      ],
    },
  };
}

export default function Products({ params }: { params: { locale: string } }) {
  const t = useTranslations('Products');
  const b = useTranslations('Breadcrumbs');

  return (
    <>
      <h1 className="sr-only">{t('rossaH1')}</h1>

      <div className="container mx-auto px-4 md:px-8">
        <Header />

        <Breadcrumbs
          items={[
            {
              label: b('products'),
              href: '/products',
            },
            {
              label: b('paintingTapes'),
              href: '/painting-tapes',
            },
            {
              label: 'SENSO ROSSA',
            },
          ]}
        />

        <Rossa />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
