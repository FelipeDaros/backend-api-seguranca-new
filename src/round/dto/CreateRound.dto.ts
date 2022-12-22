import { Points, Post, Users } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";


export class CreateRoundDto{

  @IsString()
  user_id: string;

  @IsString()
  post_id: string;

  @IsString()
  name: string;

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;
}
