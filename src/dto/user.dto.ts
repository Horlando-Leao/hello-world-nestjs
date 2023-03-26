import { IsNotEmpty, IsString, Length, IsEmail } from 'class-validator';

export abstract class CreateUserDTO {
  @Length(2, 100)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export abstract class UpdateUserDTO {
  @Length(2, 100)
  @IsNotEmpty()
  @IsString()
  name: string;
}

export abstract class ResponseUserDTO {
  name: string;
  email: string;
  createdAt: string;
}
