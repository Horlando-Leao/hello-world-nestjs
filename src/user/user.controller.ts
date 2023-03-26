import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  CreateUserDTO,
  FindAllUsersByNameDTO,
  FindUserByEmailDTO,
  ResponseUserDTO,
  UpdateUserDTO,
} from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO): Promise<ResponseUserDTO> {
    const rs = await this.userService.create({ ...data });
    return {
      name: rs.name,
      email: rs.email,
      createdAt: new Date(rs.createdAt).toISOString(),
    };
  }

  @Get()
  findAll(
    @Query() usersName: FindAllUsersByNameDTO,
  ): Promise<ResponseUserDTO[]> | any {
    return { usersName };
  }

  @Get(':userEmail')
  find(@Param() userEmail: FindUserByEmailDTO): Promise<ResponseUserDTO> | any {
    return { userEmail };
  }

  @Put(':userEmail')
  update(
    @Param('userEmail') userEmail: string,
    @Body() data: UpdateUserDTO,
  ): Promise<ResponseUserDTO> | any {
    return { userEmail, ...data };
  }
}
