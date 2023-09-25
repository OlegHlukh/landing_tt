'use client';

import { FC } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import earth from '@/assets/globe.asia.australia.svg';
import './styles.scss';

const LanguageSelect: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className={'language-select'}>
      <img width={24} height={24} src={earth.src} alt={'earth icon'} />

      <select
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value;

          router.replace(pathname, { locale: nextLocale });
        }}
      >
        <option value={'en'}>USA, english</option>
        <option value={'ua'}>Українська</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
