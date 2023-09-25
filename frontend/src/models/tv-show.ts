export interface TvShow {
  _id: string;
  name: string;
  poster: string;
  genre: string;
}

export interface GetTvShowDto {
  limit?: number;
  offset?: number;
}
