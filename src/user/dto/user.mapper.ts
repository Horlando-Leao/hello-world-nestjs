import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { ResponseUserDTO } from './user.dto';

@Injectable()
export class UserDTO {
  toDTO(user: User): ResponseUserDTO {
    return {
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toISOString(),
    };
  }

  toDomain(user: User): any {
    throw new Error('Not implemented');
  }

  toDTOColletion(data: User[]): ResponseUserDTO[] {
    return data.map((user: User) => {
      return this.toDTO(user);
    });
  }
}
