import { Injectable } from '@nestjs/common';
import { GetCepDTO, ResponseCepDTO } from './cep.dto';

@Injectable()
export class CepDTO {
  // toDTO(user: User): ResponseUserDTO {
  //   return {
  //     name: user.name,
  //     email: user.email,
  //     createdAt: new Date(user.createdAt).toISOString(),
  //   };
  // }

  // toDomain(user: User): any {
  //   throw new Error('Not implemented');
  // }

  // toDTOColletion(data: User[]): ResponseUserDTO[] {
  //   return data.map((user: User) => {
  //     return this.toDTO(user);
  //   });
  // }
}
