import { Cache } from 'cache-manager';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async create(createCartDto: CreateCartDto) {
    await this.cacheManager.set(
      createCartDto.user_id,
      createCartDto,
      6000 * 600,
    );

    return createCartDto;
  }

  async findOne(id: string) {
    const cart = await this.cacheManager.get(id);
    return cart;
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    await this.cacheManager.del(id);

    await this.cacheManager.set(
      updateCartDto.user_id,
      updateCartDto,
      6000 * 600,
    );

    return updateCartDto;
  }

  async remove(id: string) {
    return await this.cacheManager.del(id);
  }
}
