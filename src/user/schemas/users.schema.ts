import * as mongoose from 'mongoose';

export const AddresSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    number: Number,
    zipCode: String,
  },
  {
    _id: false,
  },
);

export const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  address: AddresSchema,
});
