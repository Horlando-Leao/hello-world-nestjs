import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  CreateUserDTO,
  FindAllUsersByNameDTO,
  FindUserByEmailDTO,
  ResponseUserDTO,
  UpdateUserDTO,
} from './dto/user.dto';
import { UserDTO } from './dto/user.factory';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private dto: UserDTO,
  ) {}

  @Post()
  async create(@Body() data: CreateUserDTO): Promise<ResponseUserDTO> {
    return this.dto.toDTO(await this.userService.create({ ...data }));
  }

  @Get()
  async findAll(
    @Query() usersName: FindAllUsersByNameDTO,
  ): Promise<ResponseUserDTO[]> {
    return this.dto.toDTOColletion(
      await this.userService.findAllByUserName(usersName.usersName),
    );
  }

  @Get(':userEmail')
  async find(@Param() userEmail: FindUserByEmailDTO): Promise<ResponseUserDTO> {
    return this.dto.toDTO(
      await this.userService.findByUserEmail(userEmail.userEmail),
    );
  }

  @Put(':userEmail')
  async update(
    @Param() userEmail: FindUserByEmailDTO,
    @Body() data: UpdateUserDTO,
  ): Promise<ResponseUserDTO> {
    return this.dto.toDTO(
      await this.userService.updateByUserEmail(userEmail.userEmail, data),
    );
  }
}
