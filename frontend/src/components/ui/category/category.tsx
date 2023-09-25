'use client';

import { FC, useCallback } from 'react';
import './category.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveCategory } from '@/store/features/product-slice';

interface CategoryProps {
  label: string;
  value: string;
}

const Category: FC<CategoryProps> = ({ label, value }) => {
  const { activeCategory } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const isActive = activeCategory === value;

  const handleChangeCategory = useCallback(() => {
    dispatch(setActiveCategory(value));
  }, [value]);

  return (
    <div
      className={`category ${isActive && 'category-isActive'}`}
      onClick={handleChangeCategory}
    >
      {label}
    </div>
  );
};

export default Category;
