import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class AddressDTO {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  zipeCode: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsObject()
  address: AddressDTO;
}
