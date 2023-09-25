export class GetTvShowDto {
  limit?: number;
  offset?: number;
}

export class CreateTvShowDto {
  name: string;
  genre: string;
  poster: string;
}
