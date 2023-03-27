import { GetCepDTO } from 'src/cep/dto/cep.dto';

export abstract class ApiCep {
  abstract getCep(cep: GetCepDTO): Promise<any>;
}
