import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from '../schemas/category.schema';
import { Model } from 'mongoose';
import { generateFakeCategories } from '../mock/generate-fake-categories';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findByName(name: string): Promise<CategoryDocument> {
    return this.categoryModel.findOne({ name }).exec();
  }

  async createCategory(category: Category): Promise<Category> {
    const newCategory = new this.categoryModel(category);

    return newCategory.save();
  }

  async seed() {
    const categories = await this.findAll();

    if (categories.length) {
      return;
    }

    const seedCategories = generateFakeCategories();

    const promises = seedCategories.map((el) => this.createCategory(el));

    await Promise.all(promises);
  }
}
