import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsString } from "class-validator";


export class UserCreateDto{

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  password: string;
  
  @ApiProperty()
  @IsString()
  post_id: string;
}