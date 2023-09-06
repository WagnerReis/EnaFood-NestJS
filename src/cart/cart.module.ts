import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      store: 'memory',
      ttl: 6000 * 600,
    }),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
