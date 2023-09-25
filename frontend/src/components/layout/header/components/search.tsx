'use client';

import { FC } from 'react';
import TextInput from '@/components/ui/text-input/text-input';
import Image from 'next/image';
import searchIcon from '@/assets/magnifyingglass.svg';

const Search: FC = () => {
  return (
    <TextInput
      placeholder={'Search'}
      icon={<Image src={searchIcon} alt={'search icon'} />}
    />
  );
};

export default Search;
