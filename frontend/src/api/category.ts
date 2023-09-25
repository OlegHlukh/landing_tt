import { CATEGORY_URL } from '@/api/config';

const category = {
  getAll: async () => {
    return fetch(CATEGORY_URL);
  },
};

export default category;
