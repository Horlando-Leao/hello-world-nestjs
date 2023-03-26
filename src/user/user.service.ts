import { Injectable } from '@nestjs/common';
import { RepositoryUser } from 'src/interfaces/repositories/user.agreement';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService implements RepositoryUser {
  constructor(private prisma: PrismaService) {}

  create(userCreateInput: Prisma.UserCreateInput): Promise<User> {
    throw new Error('Method not implemented.');
  }

  findAll(userWhereInput: Prisma.UserWhereInput): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  find(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    throw new Error('Method not implemented.');
  }

  update(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
