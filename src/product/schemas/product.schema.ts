import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    photo_url: String,
    price: Number,
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

ProductSchema.index({ available: 1 });
