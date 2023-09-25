export interface Product {
  _id: string;
  categoryId: number;
  name: string;
  imageUrl: string;
  price: string;
  sale?: number;
}

export interface GetProductDto {
  q?: string;
  limit?: number;
  offset?: number;
  category?: string;
}
