import Header from '@/components/common/Header';
import DoubleSidedTapes from '@/components/common/DoubleSidedTapes';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function DoubleSidedTapesPage() {
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
              label: b('doubleSidedTapes'),
            },
          ]}
        />
      </div>

      <DoubleSidedTapes />

      <div className="container mx-auto px-4 md:px-8">
        {/* <ContactForm /> */}
        <Footer />
      </div>
    </>
  );
}
