import * as mongoose from 'mongoose';
import { ProductSchema } from 'src/product/schemas/product.schema';

export const DestinationSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
});

export const OrderSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    destination: DestinationSchema,
    items: [ProductSchema],
  },
  {
    timestamps: true,
  },
);
