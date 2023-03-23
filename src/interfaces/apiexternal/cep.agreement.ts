import { GetCepDTO, ResponseCepDTO } from 'src/dto/cep.dto';

export abstract class ApiCep {
  abstract getCep(cep: GetCepDTO): Promise<ResponseCepDTO>;
}
