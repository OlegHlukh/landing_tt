'use client';

import { FC } from 'react';
import { TvShow } from '@/models/tv-show';
import Image from 'next/image';
import { FILE_URL } from '@/api/config';
import './tv-show-card.scss';
import Button from '@/components/ui/button/button';

interface TvShowCardProps {
  tvShow: TvShow;
  isActive: boolean;
  handleChange: (value: string) => void;
}

const TvShowCard: FC<TvShowCardProps> = ({
  tvShow,
  isActive,
  handleChange,
}) => {
  const imageScr = `${FILE_URL}/${tvShow.poster}`;

  return (
    <div
      className={`tv-show ${isActive && 'tv-show-isActive'}`}
      onClick={() => {
        handleChange(tvShow._id);
      }}
    >
      {tvShow.poster && (
        <Image
          src={imageScr}
          alt={tvShow.name}
          fill
          objectPosition={'center'}
          objectFit={'cover'}
          quality={isActive ? 100 : 40}
        />
      )}
      {isActive ? (
        <div className={'tv-show__active-container'}>
          <div className={'tv-show__active-header'}>
            <div className={'tv-show__active-name'}>{tvShow.name}</div>
            <div className={'tv-show__genre'}>{tvShow.genre}</div>
          </div>
          <div className={'tv-show__button'}>
            <Button text={'Steam now'} />
          </div>
        </div>
      ) : (
        <>
          <div className={'tv-show__blur'} />
          <span className={'tv-show__name'}>{tvShow.name}</span>
        </>
      )}
    </div>
  );
};

export default TvShowCard;
