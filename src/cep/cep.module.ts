import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './user/dto/user.mapper';
import { UserController } from './user.controller';
import { UserService } from './cep.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserDTO],
  imports: [],
})
export class UserModule {}
