import Header from '@/components/common/Header';
import ReinforcedTapes from '@/components/common/ReinforcedTapes';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function ReinforcedTapesPage() {
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
              label: b('reinforcedTapes'),
            },
          ]}
        />
      </div>

      <ReinforcedTapes />

      <div className="container mx-auto px-4 md:px-8">
        {/* <ContactForm /> */}
        <Footer />
      </div>
    </>
  );
}
