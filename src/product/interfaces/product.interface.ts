import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly description: string;
  readonly photo_url: string;
  readonly price: number;
  readonly available: boolean;
}
