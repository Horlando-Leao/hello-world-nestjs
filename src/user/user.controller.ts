import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  CreateUserDTO,
  FindAllUsersByNameDTO,
  FindUserByEmailDTO,
  ResponseUserDTO,
  UpdateUserDTO,
} from './dto/user.dto';
import { UserDTO } from './dto/user.mapper';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private dto: UserDTO,
  ) {}

  @Post()
  async create(@Body() data: CreateUserDTO): Promise<ResponseUserDTO> {
    const rs = await this.userService.create({ ...data });
    return this.dto.toDTO(rs);
  }

  @Get()
  async findAll(
    @Query() usersName: FindAllUsersByNameDTO,
  ): Promise<ResponseUserDTO[]> {
    const rs = await this.userService.findAll({
      where: { name: { in: usersName.usersName } },
    });
    return this.dto.toDTOColletion(rs);
  }

  @Get(':userEmail')
  async find(@Param() userEmail: FindUserByEmailDTO): Promise<ResponseUserDTO> {
    const rs = await this.userService.find({
      where: { email: userEmail.userEmail },
    });
    return this.dto.toDTO(rs);
  }

  @Put(':userEmail')
  async update(
    @Param() userEmail: FindUserByEmailDTO,
    @Body() data: UpdateUserDTO,
  ): Promise<ResponseUserDTO> {
    const rs = await this.userService.update({
      where: { email: userEmail.userEmail },
      data: { ...data },
    });
    return this.dto.toDTO(rs);
  }
}
