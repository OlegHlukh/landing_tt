import { FC } from 'react';
import './header.scss';
import Link from 'next/link';
import { headerNavLinks } from '@/config/path';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container/container';
import Image from 'next/image';
import logo from 'public/logo.svg';
import { NavLink } from '@/components/layout/nav-link';
import IconButton from '@/components/ui/icon-button/icon-button';
import personIconSrc from '@/assets/person.svg';
import pugIconSrc from '@/assets/bag.svg';
import Search from '@/components/layout/header/components/search';

export const Header: FC = () => {
  const t = useTranslations('header');

  return (
    <header className={'header'}>
      <Container>
        <nav className={'header__nav'}>
          <div>
            <ul className={'header__items'}>
              {headerNavLinks.map((el, index) => (
                <li key={index} className={'header__nav-link'}>
                  <NavLink
                    href={el.path}
                    label={t(el.title)}
                    activeClassName={`header__nav-link_isActive`}
                    className={'header__nav_link'}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image src={logo} alt={'logo'} />
          </div>
          <div className='button-container'>
            <Search />
            <IconButton icon={<Image src={pugIconSrc} alt={'Person icon'} />} />
            <IconButton
              icon={<Image src={personIconSrc} alt={'Person icon'} />}
            />
          </div>
        </nav>
      </Container>
    </header>
  );
};
