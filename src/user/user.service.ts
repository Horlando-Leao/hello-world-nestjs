import { Injectable } from '@nestjs/common';
import { RepositoryUser } from 'src/interfaces/repositories/user.agreement';
import { User, Prisma } from '@prisma/client';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class UserService implements RepositoryUser {
  constructor() {
    // asd
  }

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
