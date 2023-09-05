import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  photo_url: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  available: boolean;
}
