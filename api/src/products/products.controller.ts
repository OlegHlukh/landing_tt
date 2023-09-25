import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { GetProductDto } from './dto/get-product.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/')
  async getAllProduct(@Query() getProductQuery: GetProductDto) {
    return this.productService.getProducts(getProductQuery)
  }
}
