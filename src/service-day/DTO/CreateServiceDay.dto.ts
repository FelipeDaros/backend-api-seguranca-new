import { Itens, Post } from "@prisma/client";
import { IsArray, IsBoolean, IsString } from "class-validator";


export class CreateServiceDayDTO{
  @IsString()
  user_id: string;

  @IsBoolean()
  report_reading: boolean;

  @IsArray()
  itens_id: string[];

  @IsString()
  post_id: string;
}