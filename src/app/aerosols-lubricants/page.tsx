import Header from '@/components/common/Header';
import AerosolsLubricants from '@/components/common/AerosolsLubricants';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function AerosolsLubricantsPage() {
  const b = useTranslations('Breadcrumbs');

  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />

        <Breadcrumbs
          items={[
            {
              label: b('products'),
              href: '/products',
            },
            {
              label: b('aerosolsLubricants'),
            },
          ]}
        />
      </div>

      <AerosolsLubricants />

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
