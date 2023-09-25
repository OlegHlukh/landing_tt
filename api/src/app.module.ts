import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { AppleTvModule } from './apple-tv/apple-tv.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    CategoryModule,
    ProductsModule,
    AppleTvModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'landing'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
