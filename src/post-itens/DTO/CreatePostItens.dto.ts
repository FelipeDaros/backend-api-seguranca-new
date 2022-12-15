import { IsString } from "class-validator";


export class CreatePostItensDTO{

  @IsString()
  itens_id: string;

  @IsString()
  post_id: string;
}