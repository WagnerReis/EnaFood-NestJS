import { Document } from 'mongoose';

export interface Address extends Document {
  readonly city: string;
  readonly street: string;
  readonly number: number;
  readonly zipCode: string;
}

export interface User extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly address: object;
}
