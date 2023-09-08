import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { Order } from './interfaces/order.interface';
import { StatusHelper } from 'src/helpers/order-status';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

export interface UpdatedOrder {
  modifiedCount: number;
}

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_MODEL')
    private orderModel: Model<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const createdOrder = { ...createOrderDto };
    createdOrder.status = StatusHelper.PENDING;
    try {
      return await this.orderModel.create(createdOrder);
    } catch (error) {
      console.error(error);
      throw new ExceptionsHandler(error);
    }
  }

  async findOne(id: string): Promise<Order | HttpException> {
    try {
      const order = await this.orderModel.findById(id);

      if (!order)
        throw new HttpException('Order not updated.', HttpStatus.NOT_FOUND);

      return order;
    } catch (error) {
      console.error(error);
      throw new ExceptionsHandler(error);
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const result = await this.orderModel.updateOne<UpdatedOrder>(
        { _id: id },
        { $set: updateOrderDto },
      );

      if (!result.modifiedCount)
        throw new HttpException('Order not updated.', HttpStatus.NOT_FOUND);

      return { message: 'ok' };
    } catch (error) {
      console.error(error);
      throw new ExceptionsHandler(error);
    }
  }
}
