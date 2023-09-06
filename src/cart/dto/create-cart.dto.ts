import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class ItemsDTO {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export class CreateCartDto {
  @IsString()
  status: string;

  @IsArray()
  items: [ItemsDTO];

  @IsString()
  @IsNotEmpty()
  user_id: string;
}
