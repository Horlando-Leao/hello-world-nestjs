import { Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(data: CreateUserDTO): any {
    return { data };
  }

  @Get()
  findAll(@Query('usersEmail') userEmail: string[]): any {
    return { userEmail };
  }

  @Get(':userEmail')
  find(@Param('userEmail') userEmail: string): any {
    return { userEmail };
  }

  @Put(':userEmail')
  update(@Param('userEmail') userEmail: string, data: UpdateUserDTO): any {
    return { userEmail, data };
  }
}
