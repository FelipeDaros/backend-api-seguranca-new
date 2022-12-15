import { PostItens } from "@prisma/client";
import { IsString } from "class-validator";


export class CreateItemDto{
  @IsString()
  name: string;
}