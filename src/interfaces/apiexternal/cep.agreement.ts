export abstract class ApiCep {
  abstract getCep(cep: string): Promise<string>;
}
