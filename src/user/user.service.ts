import { Injectable } from '@nestjs/common';
import { RepositoryUser } from 'src/interfaces/repositories/user.agreement';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService implements RepositoryUser {
  constructor(private prisma: PrismaService) {}

  create(userCreateInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: userCreateInput });
  }

  findAll(userFindManyArgs: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany(userFindManyArgs);
  }

  find(userWhereUniqueInput: Prisma.UserFindFirstArgs): Promise<User> {
    return this.prisma.user.findFirst(userWhereUniqueInput);
  }

  update(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
