import { CreateUserDTO, ResponseUserDTO } from 'src/dto/user.dto';

export abstract class RepositoryUser {
  abstract create(user: CreateUserDTO): Promise<void>;
  abstract get(userId: string): Promise<ResponseUserDTO>;
}
