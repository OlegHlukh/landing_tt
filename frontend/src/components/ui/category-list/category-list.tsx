import { FC, Suspense } from 'react';
import api from '@/api';
import type { Category as CategoryType } from '@/models/category';
import Category from '@/components/ui/category/category';
import './category-list.scss';

const CategoryList: FC = async () => {
  const categories = await getCategories();

  return (
    <Suspense fallback={'Loading'}>
      <div className={'category-list'}>
        <Category label={'All products'} value={'all'} />
        {categories?.map((el) => <Category value={el.name} label={el.name} />)}
      </div>
    </Suspense>
  );
};

export default CategoryList;

const getCategories = async (): Promise<CategoryType[]> => {
  const response = await api.category.getAll();

  if (!response.ok) {
    throw new Error('Something going wrong');
  }

  return response.json();
};
