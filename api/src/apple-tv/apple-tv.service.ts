import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppleTv } from '../schemas/apple-tv.schema';
import { Model } from 'mongoose';
import { CreateTvShowDto, GetTvShowDto } from './dto/get-tv-show.dto';
import generateFakeFilms from '../mock/generate-fake-films';

@Injectable()
export class AppleTvService {
  constructor(
    @InjectModel(AppleTv.name) private appleTvModel: Model<AppleTv>,
  ) {}

  async getTvShows(dto: GetTvShowDto): Promise<AppleTv[]> {
    const { offset, limit } = dto;

    const dbQuery = this.appleTvModel.find();

    if (limit) {
      dbQuery.limit(limit);
    }

    if (offset) {
      dbQuery.skip(offset);
    }

    return await dbQuery.exec();
  }

  async createTvShow(dto: CreateTvShowDto): Promise<AppleTv> {
    const newTvShow = new this.appleTvModel(dto);

    return newTvShow.save();
  }

  async seedTvShows() {
    const tvShows = await this.appleTvModel.find().exec();

    if (tvShows.length) {
      return;
    }

    const seedTvShows = generateFakeFilms();

    const promises = seedTvShows.map((el) => this.createTvShow(el));

    await Promise.all(promises);
  }
}
