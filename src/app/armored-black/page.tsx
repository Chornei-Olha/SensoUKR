import Header from '@/components/common/Header';
import ProductDetail from '@/components/common/ProductDetail';
import ContactForm from '@/components/common/ContactForm';
import Footer from '@/components/common/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function ArmoredBlackPage() {
  const t = useTranslations('ArmoredBlack');
  const b = useTranslations('Breadcrumbs');

  const applications = Array.from({ length: 9 }, (_, index) => t(`applications.${index + 1}`));

  const advantages = Array.from({ length: 7 }, (_, index) => t(`advantages.${index + 1}`));

  const characteristics = Array.from({ length: 9 }, (_, index) =>
    t(`characteristics.${index + 1}`)
  );

  const parameters = Array.from({ length: 5 }, (_, index) => ({
    title: t(`parameters.${index + 1}.title`),
    description: t(`parameters.${index + 1}.description`),
    value: Number(t(`parameters.${index + 1}.value`)),
  }));

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
              href: '/reinforced-tapes',
            },
            {
              label: 'SENSO BLACK',
            },
          ]}
        />

        <ProductDetail
          title={t('title')}
          images={['/images/5.1.webp']}
          purposeTitle={t('purposeTitle')}
          purposeText={t('purposeText')}
          applicationTitle={t('applicationTitle')}
          applications={applications}
          advantagesTitle={t('advantagesTitle')}
          advantages={advantages}
          characteristicsTitle={t('characteristicsTitle')}
          characteristics={characteristics}
          parametersTitle={t('parametersTitle')}
          parameters={parameters}
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
              article: t('table.row.article'),
              name: t('table.row.name'),
              color: t('table.row.color'),
              size: t('table.row.size'),
              quantity: t('table.row.quantity'),
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
