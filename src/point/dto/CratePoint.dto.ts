import { IsNumber, IsString } from "class-validator";


export class CreatePointDto{
  @IsString()
  name: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  company_id: string;
}