import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './dto/user.mapper';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserDTO],
  imports: [],
})
export class UserModule {}
