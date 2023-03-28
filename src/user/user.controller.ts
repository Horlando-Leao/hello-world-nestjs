import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateUserDTO,
  FindAllUsersByNameDTO,
  FindUserByEmailDTO,
  ResponseUserDTO,
  UpdateUserDTO,
} from './dto/user.dto';
import { UserDTO } from './dto/user.factory';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('api/v1/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private dto: UserDTO,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo usuários' })
  async create(@Body() data: CreateUserDTO): Promise<ResponseUserDTO> {
    return this.dto.toDTO(await this.userService.create({ ...data }));
  }

  @Get()
  @ApiOperation({ summary: 'Pegar todos registros por nomes [nome1, nome2]' })
  async findAll(
    @Query() usersName: FindAllUsersByNameDTO,
  ): Promise<ResponseUserDTO[]> {
    return this.dto.toDTOColletion(
      await this.userService.findAllByUserName(usersName.usersName),
    );
  }

  @Get(':userEmail')
  @ApiOperation({ summary: 'Pegar unico registro por email' })
  async find(@Param() userEmail: FindUserByEmailDTO): Promise<ResponseUserDTO> {
    return this.dto.toDTO(
      await this.userService.findByUserEmail(userEmail.userEmail),
    );
  }

  @Put(':userEmail')
  @ApiOperation({ summary: 'Atualizar dados a por email' })
  async update(
    @Param() userEmail: FindUserByEmailDTO,
    @Body() data: UpdateUserDTO,
  ): Promise<ResponseUserDTO> {
    return this.dto.toDTO(
      await this.userService.updateByUserEmail(userEmail.userEmail, data),
    );
  }
}
