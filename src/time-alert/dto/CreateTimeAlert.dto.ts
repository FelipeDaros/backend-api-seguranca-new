import { IsBoolean, IsString } from "class-validator";



export class CreateTimeAlertDto{
  @IsString()
  user_id: string;

  @IsBoolean()
  late: boolean;
}