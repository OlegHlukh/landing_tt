import { GetTvShowDto } from '@/models/tv-show';
import { TV_SHOW_URL } from '@/api/config';

const tvShow = {
  getAll: async (query?: GetTvShowDto, options?: RequestInit) => {
    const queryParams = new URLSearchParams();

    Object.entries(query ?? {}).forEach(([key, value]) => {
      queryParams.append(key, value);
    });

    const url = `${TV_SHOW_URL}?${queryParams.toString()}`;

    return fetch(url, options);
  },
};

export default tvShow;
