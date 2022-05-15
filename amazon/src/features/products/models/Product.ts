export interface Product {
  name: string;
  price: number;
  description?: string;
}

export interface ProductDocument extends Product {
  _id: string;
  __v: number;
}
