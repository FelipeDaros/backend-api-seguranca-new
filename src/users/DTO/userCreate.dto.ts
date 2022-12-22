import { IsEmpty, IsString } from "class-validator";


export class UserCreateDto{

  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  post_id: string;
}