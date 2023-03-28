import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
}

export abstract class UpdateUserDTO {
  @Length(2, 100)
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
}

export abstract class ResponseUserDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  createdAt: string;
}

export abstract class FindAllUsersByEmailDTO {
  @Type(() => String)
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]), {
    toClassOnly: true,
  })
  @ApiProperty()
  usersEmail?: string[];
}

export abstract class FindAllUsersByNameDTO {
  @Type(() => String)
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]), {
    toClassOnly: true,
  })
  @ApiProperty()
  usersName: string[];
}

export class FindUserByEmailDTO {
  @IsEmail()
  @ApiProperty()
  userEmail: string;
}
