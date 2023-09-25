import { GetProductDto } from '@/models/product';
import { PRODUCT_URL } from './config';

const products = {
  getAll: async (query?: GetProductDto, options?: RequestInit) => {
    const queryParams = new URLSearchParams();

    Object.entries(query ?? {}).forEach(([key, value]) => {
      queryParams.append(key, value);
    });

    const url = `${PRODUCT_URL}?${queryParams.toString()}`;

    return fetch(url, options);
  },

  getById: async (id: string) => {
    // todo
  },
};

export default products;
