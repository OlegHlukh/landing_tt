import { Module, OnModuleInit } from '@nestjs/common';
import { AppleTvService } from './apple-tv.service';
import { AppleTvController } from './apple-tv.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppleTv, AppleTvSchema } from '../schemas/apple-tv.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AppleTv.name,
        schema: AppleTvSchema,
      },
    ]),
  ],
  providers: [AppleTvService],
  controllers: [AppleTvController],
})
export class AppleTvModule implements OnModuleInit {
  constructor(private readonly appleTvService: AppleTvService) {}

  async onModuleInit() {
    await this.appleTvService.seedTvShows();
  }
}
