import { Points, Post, Users } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";


export class CreateRoundDto{
  @IsString()
  point_id: string;

  @IsString()
  user_id: string;

  @IsString()
  post_id: string;

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;
}
