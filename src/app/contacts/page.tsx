import Header from '@/components/common/Header';
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
    title: messages.Cooperation.contactsTitle,
    description: messages.Cooperation.contactsDescription,
    alternates: {
      canonical: messages.Cooperation.Canonical.contacts,
    },
    openGraph: {
      title: messages.Cooperation.contactsTitle,
      description: messages.Cooperation.contactsDescription,
      type: 'website',
      url: messages.Cooperation.Canonical.contacts,
      images: [
        {
          url: messages.Cooperation.OG.contactsImage,
          width: 1200,
          height: 630,
          alt: messages.Cooperation.contactsTitle,
        },
      ],
    },
  };
}

export default function ContactsPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('Cooperation');

  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
