import { Category } from '../schemas/category.schema';

export const generateFakeCategories = () => {
  const seedCategories: Category[] = [
    {
      name: 'IPhone',
    },
    {
      name: 'Watch',
    },
    {
      name: 'iPad',
    },
    {
      name: 'Mac',
    },
    {
      name: 'Vision',
    },
    {
      name: 'Tv & home',
    },
    {
      name: 'Entertainment',
    },
  ];

  return seedCategories;
};
