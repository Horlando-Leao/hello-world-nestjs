import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  Length,
  IsEmail,
  IsArray,
} from 'class-validator';

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

export abstract class FindAllUsersByEmailDTO {
  @Type(() => String)
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]), {
    toClassOnly: true,
  })
  usersEmail?: string[];
}

export abstract class FindAllUsersByNameDTO {
  @Type(() => String)
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]), {
    toClassOnly: true,
  })
  usersName: string[];
}

export class FindUserByEmailDTO {
  @IsEmail()
  userEmail: string;
}
