import { FC } from 'react';
import './styles.scss';
import { copyrightNavLinks } from '@/config/path';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSelect from '@/components/layout/footer/components/language-select';

export const Copyrights: FC = () => {
  const t = useTranslations('footer');

  return (
    <div className='copyrights'>
      <span>Copyright © 2023 Apple Inc. All rights reserved.</span>
      <div>
        <nav>
          <ul className={'copyrights__nav'}>
            {copyrightNavLinks.map((el) => (
              <li className={'copyrights__nav-items'}>
                <Link href={el.path}>{t(el.title)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <LanguageSelect />
      </div>
    </div>
  );
};
