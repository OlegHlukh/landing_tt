import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AppleTvDocument = HydratedDocument<AppleTv>;

@Schema()
export class AppleTv {
  @Prop()
  name: string;

  @Prop()
  genre: string;

  @Prop()
  poster: string;
}

export const AppleTvSchema = SchemaFactory.createForClass(AppleTv);
