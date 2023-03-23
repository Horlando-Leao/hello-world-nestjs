export abstract class CreateUserDTO {
  name: string;
  email: string;
}

export abstract class ResponseUserDTO {
  name: string;
  email: string;
  createdAt: string;
}
