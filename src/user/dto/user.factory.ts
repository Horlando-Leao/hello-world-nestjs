import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { ResponseUserDTO } from './user.dto';

@Injectable()
export class UserDTO {
  toDTO(user: User): ResponseUserDTO {
    console.log(user);
    return {
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toISOString(),
    };
  }

  toDTOColletion(data: User[]): ResponseUserDTO[] {
    return data.map((user: User) => {
      return this.toDTO(user);
    });
  }
}
