'use client';

import { TvShow } from '@/models/tv-show';
import { FC, useCallback, useEffect, useState } from 'react';
import TvShowCard from '@/components/ui/tv-show-card/tv-show-card';

interface TvShowsListProps {
  list: TvShow[];
}

const TvShowList: FC<TvShowsListProps> = ({ list }) => {
  const [activeTvShow, setActiveTvShow] = useState('');

  useEffect(() => {
    const activeIndex = Math.floor(list.length / 2);

    const active = list[activeIndex];

    setActiveTvShow(active._id);
  }, [list.length]);

  const handleChange = useCallback((value: string) => {
    setActiveTvShow(value);
  }, []);

  return (
    <div className={'tv-section__list'}>
      {list?.map((el) => (
        <TvShowCard
          tvShow={el}
          isActive={el._id === activeTvShow}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default TvShowList;
