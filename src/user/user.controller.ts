import { Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(): void {
    throw new Error('Method not implemented.');
  }

  @Get(':userEmail')
  findAllByName(): void {
    this.userService.find({ email: 'user' });
    throw new Error('Method not implemented.');
  }

  @Get(':userEmail')
  findByEmail(): void {
    throw new Error('Method not implemented.');
  }

  @Put(':userEmail')
  updateByEmail(): void {
    throw new Error('Method not implemented.');
  }
}
