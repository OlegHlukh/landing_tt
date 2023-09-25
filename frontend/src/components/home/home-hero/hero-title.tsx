import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button/button';

const LeftTextDecorator: FC = () => {
  return <div className='text-decorator-left' />;
};

const RightTextDecorator: FC = () => {
  return <div className='text-decorator-right' />;
};

export const HeroTitle = () => {
  const t = useTranslations('home');

  return (
    <div className={'home-hero__title-container'}>
      <h1 className='home-hero__title'>
        <div className={'home-hero__row'}>
          Elevating Life <LeftTextDecorator />
        </div>
        <div className={'home-hero__row'}>To Pro-Level Precision</div>
        <div className={'home-hero__row'}>
          <RightTextDecorator /> With Vision Pro
        </div>
      </h1>
      <p className={'home-hero__description'}>{t('titleDescription')}</p>
      <div>
        <Button text={'Pre-Order Now'} />
      </div>
    </div>
  );
};
