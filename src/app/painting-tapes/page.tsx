import Header from '@/components/common/Header';
import PaintingTapes from '@/components/common/PaintingTapes';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function PaintingTapesPage() {
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
              label: b('paintingTapes'),
            },
          ]}
        />
      </div>

      <PaintingTapes />

      <div className="container mx-auto px-4 md:px-8">
        {/* <ContactForm /> */}
        <Footer />
      </div>
    </>
  );
}
