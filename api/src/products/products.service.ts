import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/products.schema';
import { Model } from 'mongoose';
import { CategoryService } from '../category/category.service';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductDto } from './dto/get-product.dto';
import { generateFakeProducts } from '../mock/generate-fake-products';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>, private categoryService: CategoryService) {}

  async createProduct(product: CreateProductDto): Promise<Product> {
    const category = await this.categoryService.findByName(product.category)

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const newProduct = new this.productModel({
      name: product.name,
      imageUrl: product.imageUrl,
      category,
      price: product.price
    });

    return newProduct.save()
  }

  async getProducts(query?: GetProductDto): Promise<Product[]> {
    const {
      category,
      offset,
      q,
      limit
    } = query ?? {};

    const dbQuery = this.productModel.find().sort({name: -1});

    if (category) {
      const categoryFilter = await this.categoryService.findByName(category);

      dbQuery.where('category').equals(categoryFilter?._id)
    }

    if (offset) {
      dbQuery.skip(offset)
    }

    if (limit) {
      dbQuery.limit(limit);
    }

    if(q) {
      dbQuery.where('name').regex(new RegExp(q, 'i'))
    }

    return dbQuery.exec();
  }

  async seedProduct() {
    const products = await this.getProducts();

    if (products.length) {
      return;
    }

    const seedProducts = generateFakeProducts();

    const promises = seedProducts.map(el => this.createProduct(el));

    await Promise.all(promises);
  }
}
