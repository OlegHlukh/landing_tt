import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Category } from './category.schema';

export type ProductsDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({
    required: true,
  })
  name: string;

  @Prop()
  price: string;

  @Prop()
  imageUrl: string;

  @Prop()
  sale?: number

  @Prop({ type: [{ type: Types.ObjectId, ref: Category.name }] })
  category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
