import Header from '@/components/common/Header';
import ProductDetail from '@/components/common/ProductDetail';
import ContactForm from '@/components/common/ContactForm';
import Footer from '@/components/common/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function FixCrystalPage() {
  const t = useTranslations('FixCrystal');
  const b = useTranslations('Breadcrumbs');

  const advantages = Array.from({ length: 4 }, (_, index) => t(`advantages.${index + 1}`));

  const characteristics = Array.from({ length: 5 }, (_, index) =>
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
              label: b('doubleSidedTapes'),
              href: '/double-sided-tapes',
            },
            {
              label: 'FIX-CRYSTAL',
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
          parametersTitle=""
          parameters={[]}
          tabs={{
            purpose: t('tabs.purpose'),
            characteristics: t('tabs.characteristics'),
            parameters: t('tabs.parameters'),
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
            {
              article: t('table.rows.2.article'),
              name: t('table.rows.2.name'),
              color: t('table.rows.2.color'),
              size: t('table.rows.2.size'),
              quantity: t('table.rows.2.quantity'),
            },
            {
              article: t('table.rows.3.article'),
              name: t('table.rows.3.name'),
              color: t('table.rows.3.color'),
              size: t('table.rows.3.size'),
              quantity: t('table.rows.3.quantity'),
            },
            {
              article: t('table.rows.4.article'),
              name: t('table.rows.4.name'),
              color: t('table.rows.4.color'),
              size: t('table.rows.4.size'),
              quantity: t('table.rows.4.quantity'),
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
