import { IsString } from "class-validator";


export class CreateCompanyDTO{
  @IsString()
  name: string;

  @IsString()
  city: string;
}