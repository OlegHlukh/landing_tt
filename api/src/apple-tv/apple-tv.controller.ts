import { Controller, Get, Query } from '@nestjs/common';
import { AppleTvService } from './apple-tv.service';
import { GetTvShowDto } from './dto/get-tv-show.dto';

@Controller('apple-tv')
export class AppleTvController {
  constructor(private readonly appleTvService: AppleTvService) {}

  @Get('/')
  async getTvShows(@Query() query: GetTvShowDto) {
    return this.appleTvService.getTvShows(query);
  }
}
