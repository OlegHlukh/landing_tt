import { FC } from 'react';
import { headerNavLinks } from '@/config/path';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import './mobile-menu.scss';
import logo from 'public/logo.svg';
import Image from 'next/image';
import closeIcon from '@/assets/ios-close-5.svg';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => {
  // const t = useTranslations('header');

  return (
    <div className={`mobile-menu ${open ? 'mobile-menu-active' : ''}`}>
      <div className={'mobile-menu__header'}>
        <img src={logo.src} alt={'logo'} width={40} height={40} />
        <div className={'mobile-menu__close'} onClick={onClose}>
          <img src={closeIcon.src} alt={'logo'} width={40} height={40} />
        </div>
      </div>
      <nav className={'mobile-menu__nav'} onClick={onClose}>
        {headerNavLinks.map((el) => (
          <Link key={el.path} href={el.path}>
            {el.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
