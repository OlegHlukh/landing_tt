'use client';

import burgerMenuIcon from '@/assets/menu-burger.svg';
import { FC, useReducer, useState } from 'react';
import './burger-menu.scss';
import MobileMenu from '@/components/layout/header/components/mobile-menu/mobile-menu';

const BurgerMenu: FC = () => {
  const [open, toggleOpen] = useReducer((state) => !state, false);

  return (
    <>
      <img
        className={'burger-menu'}
        src={burgerMenuIcon.src}
        alt={'burger menu icon'}
        height={30}
        width={30}
        onClick={toggleOpen}
      />
      <MobileMenu open={open} onClose={toggleOpen} />
    </>
  );
};

export default BurgerMenu;
