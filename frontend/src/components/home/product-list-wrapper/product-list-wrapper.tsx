'use client';

import { FC, useEffect } from 'react';
import ProductList from '@/components/ui/product-list/product-list';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { fetchProducts } from '@/store/features/product-slice';

const ProductListWrapper: FC = () => {
  const dispatch = useAppDispatch();
  const { products, activeCategory, isLoading } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (activeCategory === 'all') {
      dispatch(fetchProducts({ limit: 8 }));

      return;
    }

    dispatch(
      fetchProducts({
        category: activeCategory,
        limit: 8,
      })
    );
  }, [activeCategory]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return <ProductList list={products} />;
};

export default ProductListWrapper;
