import { IsString } from "class-validator";


export class CreatePostDTO{

  @IsString()
  name: string;

  @IsString()
  company_id: string;
}