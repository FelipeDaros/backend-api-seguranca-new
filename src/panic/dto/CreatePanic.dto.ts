import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreatePanicDto{
  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  verify: boolean;
}