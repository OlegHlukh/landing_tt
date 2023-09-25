import { FC } from 'react';
import './home-hero.scss';
import Image from 'next/image';
import homeHeroSrc from '@/assets/home-hero.png';
import { HeroTitle } from './hero-title';

export const HomeHero: FC = () => {
  return (
    <section className='home-hero'>
      <HeroTitle />
      <div className='home-hero__image-container'>
        <Image
          src={homeHeroSrc}
          alt={'home hero'}
          priority={true}
          quality={100}
          objectFit='cover'
          objectPosition='center'
          loading='eager'
          fill
        />
      </div>
    </section>
  );
};

export default HomeHero;
