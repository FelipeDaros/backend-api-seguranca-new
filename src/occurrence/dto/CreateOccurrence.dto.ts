import { Users } from "@prisma/client";
import { IsString } from "class-validator";


export class CreateOccurrenceDto{
  @IsString()
  resume: string;

  @IsString()
  locale: string;

  @IsString()
  user_id: string;
}