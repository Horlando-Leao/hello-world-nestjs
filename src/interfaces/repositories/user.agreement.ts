export abstract class RepositoryUser {
  abstract create(userCreateInput: any): Promise<any>;
  abstract findAll(userWhereInput: any): Promise<any[]>;
  abstract find(userWhereUniqueInput: any): Promise<any>;
  abstract update(userWhereUniqueInput: any): Promise<any>;
}
