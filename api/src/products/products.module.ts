import { Module, OnModuleInit } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schemas/products.schema';
import { Category, CategorySchema } from '../schemas/category.schema';
import { CategoryService } from '../category/category.service';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
    CategoryModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule implements OnModuleInit {
  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
  ) {}

  async onModuleInit() {
    await this.categoryService.seed();
    await this.productService.seedProduct();
  }
}
