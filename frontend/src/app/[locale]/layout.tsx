import '../globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header/header';
import { Providers } from '@/components/providers/root-provider';
import { ReactNode } from 'react';
import Footer from '@/components/layout/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Landing tt',
  description: 'Landing test task',
};

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: LayoutProps) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
