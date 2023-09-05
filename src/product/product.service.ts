import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const createProduct = new this.productModel(createProductDto);
    return createProduct.save();
  }

  findAll({ page, limit, sort }) {
    const products = this.productModel.find(
      {},
      {},
      { skip: page * limit, limit, sort },
    );
    return products;
  }

  findAvailables({ page, limit, sort }) {
    const availableProducts = this.productModel.find(
      { available: true },
      {},
      { skip: page * limit, limit, sort },
    );
    return availableProducts;
  }

  findOne(id: string) {
    const product = this.productModel.findOne({ _id: id });
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne({ _id: id }, { $set: updateProductDto });
  }

  remove(id: string) {
    return this.productModel.deleteOne({ _id: id });
  }
}
