import { CreateProductDto } from '../products/dto/create-product.dto';

export const generateFakeProducts = () => {
  const seedProducts: CreateProductDto[] = [
    {
      name: 'IPhone 15 pro',
      price: 'from 1000 $',
      imageUrl: 'apple-15.jpg',
      category: 'IPhone',
    },
    {
      name: 'IPhone 14 pro',
      price: 'from 900 $',
      imageUrl: 'iPhone-14-pro.jpg',
      category: 'IPhone',
    },
    {
      name: 'IPhone 15 pro',
      price: 'from 900 $',
      imageUrl: 'apple-15.jpg',
      category: 'IPhone',
    },
    {
      name: 'IPhone 14 pro',
      price: 'from 900 $',
      imageUrl: '',
      category: 'IPhone',
    },
    {
      name: 'IPhone 15 pro',
      price: 'from 1200 $',
      imageUrl: 'apple-15.jpg',
      category: 'IPhone',
    },
    {
      name: 'IPhone 14 pro',
      price: 'from 900 $',
      imageUrl: '',
      category: 'IPhone',
    },
    {
      name: 'IPhone 14 pro',
      price: 'from 900 $',
      imageUrl: '',
      category: 'IPhone',
    },
    {
      name: 'IPhone 14 pro',
      price: 'from 900 $',
      imageUrl: '',
      category: 'IPhone',
    },
    {
      name: 'Watch',
      price: 'from 900 $',
      imageUrl: '',
      category: 'Watch',
    },
    {
      name: 'iPad',
      price: 'from 900 $',
      imageUrl: '',
      category: 'iPad',
    },
    {
      name: 'Mac',
      price: 'from 900 $',
      imageUrl: '',
      category: 'Mac',
    },
    {
      name: 'Vision',
      price: 'from 900 $',
      imageUrl: '',
      category: 'Vision',
    },
    {
      name: 'Tv & home',
      price: 'from 900 $',
      imageUrl: '',
      category: 'Tv & home',
    },
    {
      name: 'Entertainment',
      price: 'from 900 $',
      imageUrl: '',
      category: 'Entertainment',
    },
  ];

  return seedProducts;
};
