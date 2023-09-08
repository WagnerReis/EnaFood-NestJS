import { Document } from 'mongoose';
import { Product } from 'src/product/interfaces/product.interface';
import { Address } from 'src/user/interfaces/user.interface';

export interface Order extends Document {
  readonly user_id: string;
  readonly status: string;
  readonly payment_method: string;
  readonly total: number;
  readonly items: [Product];
  readonly destination: Address;
}
