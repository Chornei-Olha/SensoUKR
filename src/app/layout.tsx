import React from 'react';
import '../styles/index.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

type Messages = {
  TabTitles: { home: string };
  Meta: { description: string };
};

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = (await getMessages({ locale: params.locale })) as Messages;
  return {
    openGraph: {
      type: 'website',
      locale: 'uk_UA',
      siteName: 'SENSO Ukraine',
      url: 'https://senso-tape.com.ua/',
    },
    icons: {
      icon: [{ url: '/favicon.png', type: 'image/png' }],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SENSO Ukraine',
    url: 'https://senso-ukr.vercel.app',
    logo: 'https://senso-ukr.vercel.app/logo.png',
    description: 'Італійські малярні стрічки SENSO для професійного застосування.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UA',
    },
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
