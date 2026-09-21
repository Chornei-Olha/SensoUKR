import Header from '@/components/common/Header';
import ProductDetail from '@/components/common/ProductDetail';
import ContactForm from '@/components/common/ContactForm';
import Footer from '@/components/common/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function SteelGrayPage() {
  const t = useTranslations('SteelGray');
  const b = useTranslations('Breadcrumbs');

  const advantages = Array.from({ length: 5 }, (_, index) => t(`advantages.${index + 1}`));

  const characteristics = Array.from({ length: 4 }, (_, index) =>
    t(`characteristics.${index + 1}`)
  );

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
              label: b('glue'),
              href: '/adhesives',
            },
            {
              label: t('title'),
            },
          ]}
        />

        <ProductDetail
          title={t('title')}
          images={['/images/1.1.webp']}
          purposeTitle={t('purposeTitle')}
          purposeText={t('purposeText')}
          advantagesTitle={t('advantagesTitle')}
          advantages={advantages}
          characteristicsTitle={t('characteristicsTitle')}
          characteristics={characteristics}
          tabs={{
            purpose: t('tabs.purpose'),
            characteristics: t('tabs.characteristics'),
          }}
          tableLabels={{
            article: t('table.article'),
            name: t('table.name'),
            color: t('table.color'),
            size: t('table.size'),
            quantity: t('table.quantity'),
          }}
          table={[
            {
              article: t('table.rows.1.article'),
              name: t('table.rows.1.name'),
              color: t('table.rows.1.color'),
              size: t('table.rows.1.size'),
              quantity: t('table.rows.1.quantity'),
            },
          ]}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
