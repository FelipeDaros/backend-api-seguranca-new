import { IsArray, IsString } from "class-validator";


export class CreatePostDTO{

  @IsString()
  name: string;

  @IsString()
  company_id: string;

  @IsArray()
  itens_id: string[];
}