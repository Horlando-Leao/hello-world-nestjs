import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IsEmail, isEmail, IS_EMAIL } from 'class-validator';
import {
  CreateUserDTO,
  FindAllUsersByNameDTO,
  FindUserByEmailDTO,
  UpdateUserDTO,
} from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: CreateUserDTO): any {
    return { data };
  }

  @Get()
  findAll(@Query() usersName: FindAllUsersByNameDTO): any {
    return { usersName };
  }

  @Get(':userEmail')
  find(@Param() userEmail: FindUserByEmailDTO): any {
    return { userEmail };
  }

  @Put(':userEmail')
  update(
    @Param('userEmail') userEmail: string,
    @Body() data: UpdateUserDTO,
  ): any {
    return { userEmail, ...data };
  }
}
