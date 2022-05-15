import { ProductDocument } from './Product';

export interface CartItem extends ProductDocument {
  quantity: number;
}

export type Cart = CartItem[];
