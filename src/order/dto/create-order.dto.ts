import { ArrayMinSize, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ItemsDTO } from 'src/cart/dto/create-cart.dto';
import { AddressDTO } from 'src/user/dto/create-user.dto';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  // @IsString()
  // @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  payment_method: string;

  @IsNumber()
  total: number;

  @ArrayMinSize(1)
  items: [ItemsDTO];

  @IsNotEmpty()
  destination: AddressDTO;
}
