import { IsNotEmpty } from 'class-validator';

export class CreatePermissionDto {
  @IsNotEmpty({
    message: 'Nome da permissão não pode ser vazio!',
  })
  name: string;
}
