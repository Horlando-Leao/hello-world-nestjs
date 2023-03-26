import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from '@prisma/client';
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
  async findAll(
    @Query() usersName: FindAllUsersByNameDTO,
  ): Promise<ResponseUserDTO[]> {
    const rs = await this.userService.findAll({
      where: { name: { in: usersName.usersName } },
    });
    const dto = rs.map((user: User) => {
      return {
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toISOString(),
      };
    });
    return dto;
  }

  @Get(':userEmail')
  async find(@Param() userEmail: FindUserByEmailDTO): Promise<ResponseUserDTO> {
    const rs = await this.userService.find({
      where: { email: userEmail.userEmail },
    });
    return {
      name: rs.name,
      email: rs.email,
      createdAt: new Date(rs.createdAt).toISOString(),
    };
  }

  @Put(':userEmail')
  update(
    @Param('userEmail') userEmail: string,
    @Body() data: UpdateUserDTO,
  ): Promise<ResponseUserDTO> | any {
    return { userEmail, ...data };
  }
}
