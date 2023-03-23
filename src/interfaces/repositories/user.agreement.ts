import { OnModuleInit } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

export abstract class RepositoryUser {
  abstract create(userCreateInput: Prisma.UserCreateInput): Promise<User>;
  abstract findAll(userWhereInput: Prisma.UserWhereInput): Promise<User[]>;
  abstract find(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User>;
  abstract update(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User>;
}
