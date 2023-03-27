import { Injectable } from '@nestjs/common';
import { RepositoryUser } from 'src/interfaces/repositories/user.agreement';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserDTO } from './dto/user.dto';

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

  update(userUpdateArgs: Prisma.UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(userUpdateArgs);
  }

  findByUserEmail(userEmail: string): Promise<User> {
    return this.find({
      where: { email: userEmail },
    });
  }

  findAllByUserName(userName: string[]): Promise<User[]> {
    return this.findAll({
      where: { name: { in: userName } },
    });
  }

  updateByUserEmail(userEmail: string, data: UpdateUserDTO): Promise<User> {
    return this.update({
      where: { email: userEmail },
      data: { ...data },
    });
  }
}
